// BO7 Camo Tracker - Application Logic

const STORAGE_KEY = "bo7-camo-progress";

// --- State ---
let completedCamos = new Set();
let activeFilter = "all";

// --- Persistence ---
function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const data = JSON.parse(raw);
      completedCamos = new Set(data.completedCamos || []);
    }
  } catch {
    completedCamos = new Set();
  }
}

function saveProgress() {
  const data = {
    version: 1,
    completedCamos: Array.from(completedCamos),
    lastUpdated: new Date().toISOString(),
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

// --- Export / Import ---
function exportProgress() {
  const data = {
    version: 1,
    completedCamos: Array.from(completedCamos),
    lastUpdated: new Date().toISOString(),
  };
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `bo7-camo-progress-${new Date().toISOString().slice(0, 10)}.json`;
  a.click();
  URL.revokeObjectURL(url);
}

function importProgress(file) {
  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const data = JSON.parse(e.target.result);
      if (data.completedCamos && Array.isArray(data.completedCamos)) {
        completedCamos = new Set(data.completedCamos);
        saveProgress();
        renderWeapons();
        updateMasteryProgress();
      }
    } catch {
      alert("Invalid progress file.");
    }
  };
  reader.readAsText(file);
}

// --- Progress Calculations ---
function getTotalCamos() {
  return CAMO_DATA.weapons.reduce((sum, w) => sum + w.camos.length, 0);
}

function getCompletedTotal() {
  let count = 0;
  for (const w of CAMO_DATA.weapons) {
    for (const c of w.camos) {
      if (completedCamos.has(c.id)) count++;
    }
  }
  return count;
}

function getWeaponProgress(weapon) {
  let done = 0;
  for (const c of weapon.camos) {
    if (completedCamos.has(c.id)) done++;
  }
  return { done, total: weapon.camos.length };
}

function getWeaponsWithCamo(camoName) {
  let count = 0;
  for (const w of CAMO_DATA.weapons) {
    const camo = w.camos.find((c) => c.name === camoName);
    if (camo && completedCamos.has(camo.id)) count++;
  }
  return count;
}

// --- Rendering ---
function renderMasteryProgress() {
  const section = document.getElementById("mastery-progress");
  const total = getTotalCamos();
  const done = getCompletedTotal();
  const pct = total > 0 ? Math.round((done / total) * 100) : 0;
  const totalWeapons = CAMO_DATA.weapons.length;

  const sgCount = getWeaponsWithCamo("Shattered Gold");
  const alCount = getWeaponsWithCamo("Arclight");
  const tpCount = getWeaponsWithCamo("Tempest");

  const sgUnlocked = sgCount === totalWeapons;
  const alUnlocked = alCount === totalWeapons;
  const singularityReq = 30;
  const tpUnlocked = tpCount >= singularityReq;

  section.innerHTML = `
    <div class="progress-summary">
      <div class="progress-text">
        <span>Overall Progress:</span>
        <span id="overall-stats">${done}/${total} (${pct}%)</span>
      </div>
      <div class="progress-bar-track">
        <div id="overall-bar" class="progress-bar-fill${pct === 100 ? " complete" : ""}" style="width:${pct}%"></div>
      </div>
    </div>
    <div class="mastery-progress-grid">
      <div class="camo-tracker-banner shattered-gold${sgUnlocked ? " unlocked" : ""}">
        <h2>${sgUnlocked ? "Shattered Gold Complete!" : "Shattered Gold"}</h2>
        <div class="progress-bar-track">
          <div class="progress-bar-fill${sgUnlocked ? " complete" : ""}" style="width:${Math.round((sgCount / totalWeapons) * 100)}%"></div>
        </div>
        <div class="banner-stats">${sgCount}/${totalWeapons} weapons</div>
      </div>
      <div class="camo-tracker-banner arclight${alUnlocked ? " unlocked" : ""}">
        <h2>${alUnlocked ? "Arclight Complete!" : "Arclight"}</h2>
        <div class="progress-bar-track">
          <div class="progress-bar-fill${alUnlocked ? " complete" : ""}" style="width:${Math.round((alCount / totalWeapons) * 100)}%"></div>
        </div>
        <div class="banner-stats">${alCount}/${totalWeapons} weapons</div>
      </div>
      <div class="camo-tracker-banner singularity${tpUnlocked ? " unlocked" : ""}">
        <h2>${tpUnlocked ? "Singularity Unlocked!" : "Singularity"}</h2>
        <p>${CAMO_DATA.globalMasteryCamo.requirement}</p>
        <div class="progress-bar-track">
          <div class="progress-bar-fill${tpUnlocked ? " complete" : ""}" style="width:${Math.min(Math.round((tpCount / singularityReq) * 100), 100)}%"></div>
        </div>
        <div class="banner-stats">${tpCount}/${singularityReq} weapons with Tempest</div>
      </div>
    </div>
  `;
}

function updateMasteryProgress() {
  renderMasteryProgress();
}

function renderClassFilter() {
  const nav = document.getElementById("class-filter");
  const allBtn = document.createElement("button");
  allBtn.textContent = "All";
  allBtn.className = "active";
  allBtn.addEventListener("click", () => setFilter("all"));
  nav.appendChild(allBtn);

  for (const cls of CAMO_DATA.weaponClasses) {
    const btn = document.createElement("button");
    btn.textContent = cls.name;
    btn.addEventListener("click", () => setFilter(cls.id));
    nav.appendChild(btn);
  }
}

function setFilter(classId) {
  activeFilter = classId;
  const buttons = document.querySelectorAll(".class-filter button");
  const classes = ["all", ...CAMO_DATA.weaponClasses.map((c) => c.id)];
  buttons.forEach((btn, i) => {
    btn.classList.toggle("active", classes[i] === classId);
  });
  renderWeapons();
}

function renderWeapons() {
  const container = document.getElementById("weapon-list");
  container.innerHTML = "";

  const weapons =
    activeFilter === "all"
      ? CAMO_DATA.weapons
      : CAMO_DATA.weapons.filter((w) => w.class === activeFilter);

  for (const weapon of weapons) {
    container.appendChild(createWeaponCard(weapon));
  }
}

function createWeaponCard(weapon) {
  const { done, total } = getWeaponProgress(weapon);
  const pct = total > 0 ? Math.round((done / total) * 100) : 0;

  const card = document.createElement("div");
  card.className = "weapon-card";

  // Header
  const header = document.createElement("div");
  header.className = "weapon-header";
  header.innerHTML = `
    <span class="weapon-expand">&#9654;</span>
    <div class="weapon-info">
      <div class="weapon-name">${weapon.name}</div>
      <div class="weapon-class">${CAMO_DATA.weaponClasses.find(c => c.id === weapon.class)?.name || ""}</div>
    </div>
    <div class="weapon-progress">
      <span class="weapon-progress-text">${done}/${total}</span>
      <div class="weapon-progress-bar">
        <div class="progress-bar-fill${pct === 100 ? " complete" : ""}" style="width:${pct}%"></div>
      </div>
    </div>
  `;
  header.addEventListener("click", () => {
    card.classList.toggle("open");
  });

  // Camo list
  const camoList = document.createElement("div");
  camoList.className = "camo-list";

  const sorted = [...weapon.camos].sort((a, b) => a.order - b.order);
  let currentCategory = null;

  for (const camo of sorted) {
    if (camo.category !== currentCategory) {
      currentCategory = camo.category;
      const label = document.createElement("div");
      label.className = `camo-category-label ${camo.category}`;
      const cat = CAMO_DATA.camoCategories.find((c) => c.id === camo.category);
      label.textContent = cat ? cat.name : camo.category;
      camoList.appendChild(label);
    }

    const item = document.createElement("div");
    item.className = `camo-item${completedCamos.has(camo.id) ? " completed" : ""}`;
    item.innerHTML = `
      <input type="checkbox" ${completedCamos.has(camo.id) ? "checked" : ""}>
      <div class="camo-item-info">
        <div class="camo-name">${camo.name}</div>
        <div class="camo-requirement">${camo.requirement}</div>
      </div>
      <span class="camo-badge ${camo.category}">${camo.category}</span>
    `;

    const checkbox = item.querySelector("input");

    item.addEventListener("click", (e) => {
      if (e.target === checkbox) return;
      checkbox.checked = !checkbox.checked;
      checkbox.dispatchEvent(new Event("change"));
    });

    checkbox.addEventListener("change", () => {
      if (checkbox.checked) {
        completedCamos.add(camo.id);
      } else {
        completedCamos.delete(camo.id);
      }
      item.classList.toggle("completed", checkbox.checked);
      saveProgress();
      updateWeaponCardProgress(card, weapon);
      updateMasteryProgress();
    });

    camoList.appendChild(item);
  }

  card.appendChild(header);
  card.appendChild(camoList);
  return card;
}

function updateWeaponCardProgress(card, weapon) {
  const { done, total } = getWeaponProgress(weapon);
  const pct = total > 0 ? Math.round((done / total) * 100) : 0;
  card.querySelector(".weapon-progress-text").textContent = `${done}/${total}`;
  const bar = card.querySelector(".weapon-progress-bar .progress-bar-fill");
  bar.style.width = `${pct}%`;
  bar.classList.toggle("complete", pct === 100);
}

// --- Init ---
function init() {
  loadProgress();
  renderClassFilter();
  renderMasteryProgress();
  renderWeapons();

  document.getElementById("export-btn").addEventListener("click", exportProgress);
  document.getElementById("import-file").addEventListener("change", (e) => {
    if (e.target.files[0]) {
      importProgress(e.target.files[0]);
      e.target.value = "";
    }
  });
}

init();
