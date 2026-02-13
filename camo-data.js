// Call of Duty: Black Ops 7 - Weapon and Camo Data
// Last updated: February 2026

const CAMO_DATA = {
  weaponClasses: [
    { id: "assault_rifles", name: "Assault Rifles" },
    { id: "smgs", name: "SMGs" },
    { id: "shotguns", name: "Shotguns" },
    { id: "lmgs", name: "LMGs" },
    { id: "marksman_rifles", name: "Marksman Rifles" },
    { id: "sniper_rifles", name: "Sniper Rifles" },
    { id: "pistols", name: "Pistols" },
    { id: "launchers", name: "Launchers" },
    { id: "melee", name: "Melee" }
  ],

  camoCategories: [
    { id: "military", name: "Military", color: "#4a5568" },
    { id: "special", name: "Special", color: "#2b6cb0" },
    { id: "mastery", name: "Mastery", color: "#d69e2e" }
  ],

  weapons: [
    // ==================== ASSAULT RIFLES ====================
    {
      id: "m15_mod_0",
      name: "M15 Mod 0",
      class: "assault_rifles",
      camos: [
        { id: "m15_mod_0_military", name: "Headshots", category: "military", requirement: "Get 80 headshots", order: 1 },
        { id: "m15_mod_0_special_1", name: "Diamondback", category: "special", requirement: "Get 50 kills while moving", order: 2 },
        { id: "m15_mod_0_special_2", name: "Raptor", category: "special", requirement: "Get 30 objective kills", order: 3 },
        { id: "m15_mod_0_special_3", name: "Mainframe", category: "special", requirement: "Get 20 kills with an underbarrel launcher", order: 4 },
        { id: "m15_mod_0_mastery_1", name: "Shattered Gold", category: "mastery", requirement: "Get 3 kills without dying 10 times", order: 5 },
        { id: "m15_mod_0_mastery_2", name: "Arclight", category: "mastery", requirement: "Get 10 Double Kills or better", order: 6 },
        { id: "m15_mod_0_mastery_3", name: "Tempest", category: "mastery", requirement: "Get 5 kills without dying 3 times", order: 7 }
      ]
    },
    {
      id: "ak27",
      name: "AK-27",
      class: "assault_rifles",
      camos: [
        { id: "ak27_military", name: "Headshots", category: "military", requirement: "Get 80 headshots", order: 1 },
        { id: "ak27_special_1", name: "Diamondback", category: "special", requirement: "Get 30 hipfire kills", order: 2 },
        { id: "ak27_special_2", name: "Raptor", category: "special", requirement: "Get 2 kills without reloading 10 times", order: 3 },
        { id: "ak27_special_3", name: "Mainframe", category: "special", requirement: "Get 20 kills with an underbarrel launcher", order: 4 },
        { id: "ak27_mastery_1", name: "Shattered Gold", category: "mastery", requirement: "Get 3 kills without dying 10 times", order: 5 },
        { id: "ak27_mastery_2", name: "Arclight", category: "mastery", requirement: "Get 10 Double Kills or better", order: 6 },
        { id: "ak27_mastery_3", name: "Tempest", category: "mastery", requirement: "Get 5 kills without dying 3 times", order: 7 }
      ]
    },
    {
      id: "mxr17",
      name: "MXR-17",
      class: "assault_rifles",
      camos: [
        { id: "mxr17_military", name: "Headshots", category: "military", requirement: "Get 80 headshots", order: 1 },
        { id: "mxr17_special_1", name: "Diamondback", category: "special", requirement: "With 5+ attachments equipped, get 50 eliminations", order: 2 },
        { id: "mxr17_special_2", name: "Raptor", category: "special", requirement: "Get 30 kills while or shortly after sprinting", order: 3 },
        { id: "mxr17_special_3", name: "Mainframe", category: "special", requirement: "Get 20 kills with an underbarrel launcher", order: 4 },
        { id: "mxr17_mastery_1", name: "Shattered Gold", category: "mastery", requirement: "Get 3 kills without dying 10 times", order: 5 },
        { id: "mxr17_mastery_2", name: "Arclight", category: "mastery", requirement: "Get 10 Double Kills or better", order: 6 },
        { id: "mxr17_mastery_3", name: "Tempest", category: "mastery", requirement: "Get 5 kills without dying 3 times", order: 7 }
      ]
    },
    {
      id: "x9_maverick",
      name: "X9 Maverick",
      class: "assault_rifles",
      camos: [
        { id: "x9_maverick_military", name: "Headshots", category: "military", requirement: "Get 80 headshots", order: 1 },
        { id: "x9_maverick_special_1", name: "Diamondback", category: "special", requirement: "Kill 30 enemies afflicted by your tactical equipment", order: 2 },
        { id: "x9_maverick_special_2", name: "Raptor", category: "special", requirement: "Get 50 kills without any attachments", order: 3 },
        { id: "x9_maverick_special_3", name: "Mainframe", category: "special", requirement: "Get a kill without taking any damage 30 times", order: 4 },
        { id: "x9_maverick_mastery_1", name: "Shattered Gold", category: "mastery", requirement: "Get 3 kills without dying 10 times", order: 5 },
        { id: "x9_maverick_mastery_2", name: "Arclight", category: "mastery", requirement: "Get 10 Double Kills or better", order: 6 },
        { id: "x9_maverick_mastery_3", name: "Tempest", category: "mastery", requirement: "Get 5 kills without dying 3 times", order: 7 }
      ]
    },
    {
      id: "ds20_mirage",
      name: "DS20 Mirage",
      class: "assault_rifles",
      camos: [
        { id: "ds20_mirage_military", name: "Headshots", category: "military", requirement: "Get 80 headshots", order: 1 },
        { id: "ds20_mirage_special_1", name: "Diamondback", category: "special", requirement: "With a 4.0x or higher scope, get 50 eliminations", order: 2 },
        { id: "ds20_mirage_special_2", name: "Raptor", category: "special", requirement: "Get 50 eliminations with a suppressor equipped", order: 3 },
        { id: "ds20_mirage_special_3", name: "Mainframe", category: "special", requirement: "Using Gunfighter Wildcard, get 50 eliminations with 8 attachments", order: 4 },
        { id: "ds20_mirage_mastery_1", name: "Shattered Gold", category: "mastery", requirement: "Get 3 kills without dying 10 times", order: 5 },
        { id: "ds20_mirage_mastery_2", name: "Arclight", category: "mastery", requirement: "Get 10 Double Kills or better", order: 6 },
        { id: "ds20_mirage_mastery_3", name: "Tempest", category: "mastery", requirement: "Get 5 kills without dying 3 times", order: 7 }
      ]
    },
    {
      id: "peacekeeper_mk1",
      name: "Peacekeeper MK1",
      class: "assault_rifles",
      camos: [
        { id: "peacekeeper_mk1_military", name: "Headshots", category: "military", requirement: "Get 80 headshots", order: 1 },
        { id: "peacekeeper_mk1_special_1", name: "Diamondback", category: "special", requirement: "Get 50 eliminations with 5+ attachments", order: 2 },
        { id: "peacekeeper_mk1_special_2", name: "Raptor", category: "special", requirement: "Get a kill without taking any damage 30 times", order: 3 },
        { id: "peacekeeper_mk1_special_3", name: "Mainframe", category: "special", requirement: "Get 20 kills with an underbarrel launcher", order: 4 },
        { id: "peacekeeper_mk1_mastery_1", name: "Shattered Gold", category: "mastery", requirement: "Get 3 kills without dying 10 times", order: 5 },
        { id: "peacekeeper_mk1_mastery_2", name: "Arclight", category: "mastery", requirement: "Get 10 Double Kills or better", order: 6 },
        { id: "peacekeeper_mk1_mastery_3", name: "Tempest", category: "mastery", requirement: "Get 5 kills without dying 3 times", order: 7 }
      ]
    },
    {
      id: "maddox_rfb",
      name: "Maddox RFB",
      class: "assault_rifles",      camos: [
        { id: "maddox_rfb_military", name: "Headshots", category: "military", requirement: "Get 80 headshots", order: 1 },
        { id: "maddox_rfb_special_1", name: "Diamondback", category: "special", requirement: "Get 50 kills while moving", order: 2 },
        { id: "maddox_rfb_special_2", name: "Raptor", category: "special", requirement: "Get 30 kills while or shortly after sprinting", order: 3 },
        { id: "maddox_rfb_special_3", name: "Mainframe", category: "special", requirement: "Get a kill without taking any damage 30 times", order: 4 },
        { id: "maddox_rfb_mastery_1", name: "Shattered Gold", category: "mastery", requirement: "Get 3 kills without dying 10 times", order: 5 },
        { id: "maddox_rfb_mastery_2", name: "Arclight", category: "mastery", requirement: "Get 10 Double Kills or better", order: 6 },
        { id: "maddox_rfb_mastery_3", name: "Tempest", category: "mastery", requirement: "Get 5 kills without dying 3 times", order: 7 }
      ]
    },
    {
      id: "egrt17",
      name: "EGRT-17",
      class: "assault_rifles",
      camos: [
        { id: "egrt17_military", name: "Headshots", category: "military", requirement: "Get 80 headshots", order: 1 },
        { id: "egrt17_special_1", name: "Diamondback", category: "special", requirement: "TBD", order: 2 },
        { id: "egrt17_special_2", name: "Raptor", category: "special", requirement: "TBD", order: 3 },
        { id: "egrt17_special_3", name: "Mainframe", category: "special", requirement: "TBD", order: 4 },
        { id: "egrt17_mastery_1", name: "Shattered Gold", category: "mastery", requirement: "Get 3 kills without dying 10 times", order: 5 },
        { id: "egrt17_mastery_2", name: "Arclight", category: "mastery", requirement: "Get 10 Double Kills or better", order: 6 },
        { id: "egrt17_mastery_3", name: "Tempest", category: "mastery", requirement: "Get 5 kills without dying 3 times", order: 7 }
      ]
    },

    // ==================== SMGS ====================
    {
      id: "ryden_45k",
      name: "Ryden 45K",
      class: "smgs",
      camos: [
        { id: "ryden_45k_military", name: "Headshots", category: "military", requirement: "Get 80 headshots", order: 1 },
        { id: "ryden_45k_special_1", name: "Diamondback", category: "special", requirement: "Get 50 eliminations without any attachments", order: 2 },
        { id: "ryden_45k_special_2", name: "Raptor", category: "special", requirement: "Get 30 kills while or shortly after sprinting", order: 3 },
        { id: "ryden_45k_special_3", name: "Mainframe", category: "special", requirement: "Get a kill without taking any damage 30 times", order: 4 },
        { id: "ryden_45k_mastery_1", name: "Shattered Gold", category: "mastery", requirement: "Get 3 kills without dying 10 times", order: 5 },
        { id: "ryden_45k_mastery_2", name: "Arclight", category: "mastery", requirement: "Get 10 Double Kills or better", order: 6 },
        { id: "ryden_45k_mastery_3", name: "Tempest", category: "mastery", requirement: "Get 5 kills without dying 3 times", order: 7 }
      ]
    },
    {
      id: "rk9",
      name: "RK-9",
      class: "smgs",
      camos: [
        { id: "rk9_military", name: "Headshots", category: "military", requirement: "Get 80 headshots", order: 1 },
        { id: "rk9_special_1", name: "Diamondback", category: "special", requirement: "Get 50 kills while moving", order: 2 },
        { id: "rk9_special_2", name: "Raptor", category: "special", requirement: "Kill 30 enemies affected by your tactical equipment", order: 3 },
        { id: "rk9_special_3", name: "Mainframe", category: "special", requirement: "Get 50 eliminations with a suppressor equipped", order: 4 },
        { id: "rk9_mastery_1", name: "Shattered Gold", category: "mastery", requirement: "Get 3 kills without dying 10 times", order: 5 },
        { id: "rk9_mastery_2", name: "Arclight", category: "mastery", requirement: "Get 10 Double Kills or better", order: 6 },
        { id: "rk9_mastery_3", name: "Tempest", category: "mastery", requirement: "Get 5 kills without dying 3 times", order: 7 }
      ]
    },
    {
      id: "razor_9mm",
      name: "Razor 9mm",
      class: "smgs",
      camos: [
        { id: "razor_9mm_military", name: "Headshots", category: "military", requirement: "Get 80 headshots", order: 1 },
        { id: "razor_9mm_special_1", name: "Diamondback", category: "special", requirement: "Get 30 hipfire kills", order: 2 },
        { id: "razor_9mm_special_2", name: "Raptor", category: "special", requirement: "Get 30 objective kills", order: 3 },
        { id: "razor_9mm_special_3", name: "Mainframe", category: "special", requirement: "Get 50 kills while moving", order: 4 },
        { id: "razor_9mm_mastery_1", name: "Shattered Gold", category: "mastery", requirement: "Get 3 kills without dying 10 times", order: 5 },
        { id: "razor_9mm_mastery_2", name: "Arclight", category: "mastery", requirement: "Get 10 Double Kills or better", order: 6 },
        { id: "razor_9mm_mastery_3", name: "Tempest", category: "mastery", requirement: "Get 5 kills without dying 3 times", order: 7 }
      ]
    },
    {
      id: "dravec_45",
      name: "Dravec 45",
      class: "smgs",
      camos: [
        { id: "dravec_45_military", name: "Headshots", category: "military", requirement: "Get 80 headshots", order: 1 },
        { id: "dravec_45_special_1", name: "Diamondback", category: "special", requirement: "Get 30 objective kills", order: 2 },
        { id: "dravec_45_special_2", name: "Raptor", category: "special", requirement: "Get 2 kills without reloading 10 times", order: 3 },
        { id: "dravec_45_special_3", name: "Mainframe", category: "special", requirement: "Get a kill while sliding, diving, or wall-jumping 15 times", order: 4 },
        { id: "dravec_45_mastery_1", name: "Shattered Gold", category: "mastery", requirement: "Get 3 kills without dying 10 times", order: 5 },
        { id: "dravec_45_mastery_2", name: "Arclight", category: "mastery", requirement: "Get 10 Double Kills or better", order: 6 },
        { id: "dravec_45_mastery_3", name: "Tempest", category: "mastery", requirement: "Get 5 kills without dying 3 times", order: 7 }
      ]
    },
    {
      id: "carbon_57",
      name: "Carbon 57",
      class: "smgs",
      camos: [
        { id: "carbon_57_military", name: "Headshots", category: "military", requirement: "Get 80 headshots", order: 1 },
        { id: "carbon_57_special_1", name: "Diamondback", category: "special", requirement: "Get 30 hipfire kills", order: 2 },
        { id: "carbon_57_special_2", name: "Raptor", category: "special", requirement: "Get 2 kills without reloading 10 times", order: 3 },
        { id: "carbon_57_special_3", name: "Mainframe", category: "special", requirement: "Using Gunfighter Wildcard, get 50 eliminations with 8 attachments", order: 4 },
        { id: "carbon_57_mastery_1", name: "Shattered Gold", category: "mastery", requirement: "Get 3 kills without dying 10 times", order: 5 },
        { id: "carbon_57_mastery_2", name: "Arclight", category: "mastery", requirement: "Get 10 Double Kills or better", order: 6 },
        { id: "carbon_57_mastery_3", name: "Tempest", category: "mastery", requirement: "Get 5 kills without dying 3 times", order: 7 }
      ]
    },
    {
      id: "mpc25",
      name: "MPC-25",
      class: "smgs",
      camos: [
        { id: "mpc25_military", name: "Headshots", category: "military", requirement: "Get 80 headshots", order: 1 },
        { id: "mpc25_special_1", name: "Diamondback", category: "special", requirement: "Get 50 eliminations with a suppressor equipped", order: 2 },
        { id: "mpc25_special_2", name: "Raptor", category: "special", requirement: "Get a kill while sliding, diving, or wall-jumping 15 times", order: 3 },
        { id: "mpc25_special_3", name: "Mainframe", category: "special", requirement: "Using Gunfighter Wildcard, get 50 eliminations with 8 attachments", order: 4 },
        { id: "mpc25_mastery_1", name: "Shattered Gold", category: "mastery", requirement: "Get 3 kills without dying 10 times", order: 5 },
        { id: "mpc25_mastery_2", name: "Arclight", category: "mastery", requirement: "Get 10 Double Kills or better", order: 6 },
        { id: "mpc25_mastery_3", name: "Tempest", category: "mastery", requirement: "Get 5 kills without dying 3 times", order: 7 }
      ]
    },
    {
      id: "kogot7",
      name: "Kogot-7",
      class: "smgs",      camos: [
        { id: "kogot7_military", name: "Headshots", category: "military", requirement: "Get 80 headshots", order: 1 },
        { id: "kogot7_special_1", name: "Diamondback", category: "special", requirement: "Get 50 kills while moving", order: 2 },
        { id: "kogot7_special_2", name: "Raptor", category: "special", requirement: "Get 30 kills while or shortly after sprinting", order: 3 },
        { id: "kogot7_special_3", name: "Mainframe", category: "special", requirement: "Get a kill without taking any damage 30 times", order: 4 },
        { id: "kogot7_mastery_1", name: "Shattered Gold", category: "mastery", requirement: "Get 3 kills without dying 10 times", order: 5 },
        { id: "kogot7_mastery_2", name: "Arclight", category: "mastery", requirement: "Get 10 Double Kills or better", order: 6 },
        { id: "kogot7_mastery_3", name: "Tempest", category: "mastery", requirement: "Get 5 kills without dying 3 times", order: 7 }
      ]
    },
    {
      id: "rev46",
      name: "REV-46",
      class: "smgs",
      camos: [
        { id: "rev46_military", name: "Headshots", category: "military", requirement: "Get 80 headshots", order: 1 },
        { id: "rev46_special_1", name: "Diamondback", category: "special", requirement: "TBD", order: 2 },
        { id: "rev46_special_2", name: "Raptor", category: "special", requirement: "TBD", order: 3 },
        { id: "rev46_special_3", name: "Mainframe", category: "special", requirement: "TBD", order: 4 },
        { id: "rev46_mastery_1", name: "Shattered Gold", category: "mastery", requirement: "Get 3 kills without dying 10 times", order: 5 },
        { id: "rev46_mastery_2", name: "Arclight", category: "mastery", requirement: "Get 10 Double Kills or better", order: 6 },
        { id: "rev46_mastery_3", name: "Tempest", category: "mastery", requirement: "Get 5 kills without dying 3 times", order: 7 }
      ]
    },

    // ==================== SHOTGUNS ====================
    {
      id: "m10_breacher",
      name: "M10 Breacher",
      class: "shotguns",
      camos: [
        { id: "m10_breacher_military", name: "Point-Blank Kills", category: "military", requirement: "Get 80 point-blank kills", order: 1 },
        { id: "m10_breacher_special_1", name: "Diamondback", category: "special", requirement: "Get a kill without taking any damage 30 times", order: 2 },
        { id: "m10_breacher_special_2", name: "Raptor", category: "special", requirement: "Get 50 eliminations without any attachments", order: 3 },
        { id: "m10_breacher_special_3", name: "Mainframe", category: "special", requirement: "Get 30 kills while or shortly after sprinting", order: 4 },
        { id: "m10_breacher_mastery_1", name: "Shattered Gold", category: "mastery", requirement: "Get 3 kills without dying 10 times", order: 5 },
        { id: "m10_breacher_mastery_2", name: "Arclight", category: "mastery", requirement: "Get 10 Double Kills or better", order: 6 },
        { id: "m10_breacher_mastery_3", name: "Tempest", category: "mastery", requirement: "Get 5 kills without dying 3 times", order: 7 }
      ]
    },
    {
      id: "echo_12",
      name: "Echo 12",
      class: "shotguns",
      camos: [
        { id: "echo_12_military", name: "Point-Blank Kills", category: "military", requirement: "Get 80 point-blank kills", order: 1 },
        { id: "echo_12_special_1", name: "Diamondback", category: "special", requirement: "Get 30 objective kills", order: 2 },
        { id: "echo_12_special_2", name: "Raptor", category: "special", requirement: "Get 10 kills while or shortly after sprinting", order: 3 },
        { id: "echo_12_special_3", name: "Mainframe", category: "special", requirement: "Get 50 eliminations without any attachments", order: 4 },
        { id: "echo_12_mastery_1", name: "Shattered Gold", category: "mastery", requirement: "Get 3 kills without dying 10 times", order: 5 },
        { id: "echo_12_mastery_2", name: "Arclight", category: "mastery", requirement: "Get 10 Double Kills or better", order: 6 },
        { id: "echo_12_mastery_3", name: "Tempest", category: "mastery", requirement: "Get 5 kills without dying 3 times", order: 7 }
      ]
    },
    {
      id: "akita",
      name: "Akita",
      class: "shotguns",
      camos: [
        { id: "akita_military", name: "Point-Blank Kills", category: "military", requirement: "Get 80 point-blank kills", order: 1 },
        { id: "akita_special_1", name: "Diamondback", category: "special", requirement: "Get 50 kills while moving", order: 2 },
        { id: "akita_special_2", name: "Raptor", category: "special", requirement: "Get 30 hipfire kills", order: 3 },
        { id: "akita_special_3", name: "Mainframe", category: "special", requirement: "Get a kill while sliding, diving, or wall-jumping 15 times", order: 4 },
        { id: "akita_mastery_1", name: "Shattered Gold", category: "mastery", requirement: "Get 3 kills without dying 10 times", order: 5 },
        { id: "akita_mastery_2", name: "Arclight", category: "mastery", requirement: "Get 10 Double Kills or better", order: 6 },
        { id: "akita_mastery_3", name: "Tempest", category: "mastery", requirement: "Get 5 kills without dying 3 times", order: 7 }
      ]
    },

    // ==================== LMGS ====================
    {
      id: "mk78",
      name: "MK.78",
      class: "lmgs",
      camos: [
        { id: "mk78_military", name: "Headshots", category: "military", requirement: "Get 80 headshots", order: 1 },
        { id: "mk78_special_1", name: "Diamondback", category: "special", requirement: "Get 30 objective kills", order: 2 },
        { id: "mk78_special_2", name: "Raptor", category: "special", requirement: "Get 2 kills without releasing the trigger 5 times", order: 3 },
        { id: "mk78_special_3", name: "Mainframe", category: "special", requirement: "Get 50 eliminations with 5+ attachments", order: 4 },
        { id: "mk78_mastery_1", name: "Shattered Gold", category: "mastery", requirement: "Get 3 kills without dying 10 times", order: 5 },
        { id: "mk78_mastery_2", name: "Arclight", category: "mastery", requirement: "Get 10 Double Kills or better", order: 6 },
        { id: "mk78_mastery_3", name: "Tempest", category: "mastery", requirement: "Get 5 kills without dying 3 times", order: 7 }
      ]
    },
    {
      id: "xm325",
      name: "XM325",
      class: "lmgs",
      camos: [
        { id: "xm325_military", name: "Headshots", category: "military", requirement: "Get 80 headshots", order: 1 },
        { id: "xm325_special_1", name: "Diamondback", category: "special", requirement: "Kill 30 enemies affected by your tactical equipment", order: 2 },
        { id: "xm325_special_2", name: "Raptor", category: "special", requirement: "Get 2 kills without releasing the trigger 5 times", order: 3 },
        { id: "xm325_special_3", name: "Mainframe", category: "special", requirement: "Using Gunfighter Wildcard, get 50 eliminations with 8 attachments", order: 4 },
        { id: "xm325_mastery_1", name: "Shattered Gold", category: "mastery", requirement: "Get 3 kills without dying 10 times", order: 5 },
        { id: "xm325_mastery_2", name: "Arclight", category: "mastery", requirement: "Get 10 Double Kills or better", order: 6 },
        { id: "xm325_mastery_3", name: "Tempest", category: "mastery", requirement: "Get 5 kills without dying 3 times", order: 7 }
      ]
    },
    {
      id: "sokol_545",
      name: "Sokol 545",
      class: "lmgs",      camos: [
        { id: "sokol_545_military", name: "Headshots", category: "military", requirement: "Get 80 headshots", order: 1 },
        { id: "sokol_545_special_1", name: "Diamondback", category: "special", requirement: "Get 50 kills while moving", order: 2 },
        { id: "sokol_545_special_2", name: "Raptor", category: "special", requirement: "Get 2 kills without releasing the trigger 5 times", order: 3 },
        { id: "sokol_545_special_3", name: "Mainframe", category: "special", requirement: "Get 50 eliminations with 5+ attachments", order: 4 },
        { id: "sokol_545_mastery_1", name: "Shattered Gold", category: "mastery", requirement: "Get 3 kills without dying 10 times", order: 5 },
        { id: "sokol_545_mastery_2", name: "Arclight", category: "mastery", requirement: "Get 10 Double Kills or better", order: 6 },
        { id: "sokol_545_mastery_3", name: "Tempest", category: "mastery", requirement: "Get 5 kills without dying 3 times", order: 7 }
      ]
    },

    // ==================== MARKSMAN RIFLES ====================
    {
      id: "m8a1",
      name: "M8A1",
      class: "marksman_rifles",
      camos: [
        { id: "m8a1_military", name: "Headshots", category: "military", requirement: "Get 80 headshots", order: 1 },
        { id: "m8a1_special_1", name: "Diamondback", category: "special", requirement: "With a 4.0x or higher scope, get 50 eliminations", order: 2 },
        { id: "m8a1_special_2", name: "Raptor", category: "special", requirement: "Get 15 Long Shot Medals", order: 3 },
        { id: "m8a1_special_3", name: "Mainframe", category: "special", requirement: "Get a kill without taking any damage 30 times", order: 4 },
        { id: "m8a1_mastery_1", name: "Shattered Gold", category: "mastery", requirement: "Get 3 kills without dying 10 times", order: 5 },
        { id: "m8a1_mastery_2", name: "Arclight", category: "mastery", requirement: "Get 10 Double Kills or better", order: 6 },
        { id: "m8a1_mastery_3", name: "Tempest", category: "mastery", requirement: "Get 5 kills without dying 3 times", order: 7 }
      ]
    },
    {
      id: "warden_308",
      name: "Warden 308",
      class: "marksman_rifles",
      camos: [
        { id: "warden_308_military", name: "Headshots", category: "military", requirement: "Get 80 headshots", order: 1 },
        { id: "warden_308_special_1", name: "Diamondback", category: "special", requirement: "Get 30 objective kills", order: 2 },
        { id: "warden_308_special_2", name: "Raptor", category: "special", requirement: "Get 50 eliminations with 5+ attachments", order: 3 },
        { id: "warden_308_special_3", name: "Mainframe", category: "special", requirement: "Get 30 one shot kills", order: 4 },
        { id: "warden_308_mastery_1", name: "Shattered Gold", category: "mastery", requirement: "Get 3 kills without dying 10 times", order: 5 },
        { id: "warden_308_mastery_2", name: "Arclight", category: "mastery", requirement: "Get 10 Double Kills or better", order: 6 },
        { id: "warden_308_mastery_3", name: "Tempest", category: "mastery", requirement: "Get 5 kills without dying 3 times", order: 7 }
      ]
    },
    {
      id: "m34_novaline",
      name: "M34 Novaline",
      class: "marksman_rifles",
      camos: [
        { id: "m34_novaline_military", name: "Headshots", category: "military", requirement: "Get 80 headshots", order: 1 },
        { id: "m34_novaline_special_1", name: "Diamondback", category: "special", requirement: "Get 15 Long Shot Medals", order: 2 },
        { id: "m34_novaline_special_2", name: "Raptor", category: "special", requirement: "With a 4.0x or higher scope, get 50 eliminations", order: 3 },
        { id: "m34_novaline_special_3", name: "Mainframe", category: "special", requirement: "Using Gunfighter Wildcard, get 50 eliminations with 8 attachments", order: 4 },
        { id: "m34_novaline_mastery_1", name: "Shattered Gold", category: "mastery", requirement: "Get 3 kills without dying 10 times", order: 5 },
        { id: "m34_novaline_mastery_2", name: "Arclight", category: "mastery", requirement: "Get 10 Double Kills or better", order: 6 },
        { id: "m34_novaline_mastery_3", name: "Tempest", category: "mastery", requirement: "Get 5 kills without dying 3 times", order: 7 }
      ]
    },

    // ==================== SNIPER RIFLES ====================
    {
      id: "vs_recon",
      name: "VS Recon",
      class: "sniper_rifles",
      camos: [
        { id: "vs_recon_military", name: "One Shot Kills", category: "military", requirement: "Get 80 one shot kills", order: 1 },
        { id: "vs_recon_special_1", name: "Diamondback", category: "special", requirement: "With a 4.0x or higher scope, get 50 eliminations", order: 2 },
        { id: "vs_recon_special_2", name: "Raptor", category: "special", requirement: "Get 30 one shot kills", order: 3 },
        { id: "vs_recon_special_3", name: "Mainframe", category: "special", requirement: "Get 2 kills without reloading 10 times", order: 4 },
        { id: "vs_recon_mastery_1", name: "Shattered Gold", category: "mastery", requirement: "Get 3 kills without dying 10 times", order: 5 },
        { id: "vs_recon_mastery_2", name: "Arclight", category: "mastery", requirement: "Get 10 Double Kills or better", order: 6 },
        { id: "vs_recon_mastery_3", name: "Tempest", category: "mastery", requirement: "Get 5 kills without dying 3 times", order: 7 }
      ]
    },
    {
      id: "shadow_sk",
      name: "Shadow SK",
      class: "sniper_rifles",
      camos: [
        { id: "shadow_sk_military", name: "One Shot Kills", category: "military", requirement: "Get 80 one shot kills", order: 1 },
        { id: "shadow_sk_special_1", name: "Diamondback", category: "special", requirement: "Get 50 eliminations with a suppressor equipped", order: 2 },
        { id: "shadow_sk_special_2", name: "Raptor", category: "special", requirement: "Get 15 Long Shot Medals", order: 3 },
        { id: "shadow_sk_special_3", name: "Mainframe", category: "special", requirement: "Get 2 kills without reloading 10 times", order: 4 },
        { id: "shadow_sk_mastery_1", name: "Shattered Gold", category: "mastery", requirement: "Get 3 kills without dying 10 times", order: 5 },
        { id: "shadow_sk_mastery_2", name: "Arclight", category: "mastery", requirement: "Get 10 Double Kills or better", order: 6 },
        { id: "shadow_sk_mastery_3", name: "Tempest", category: "mastery", requirement: "Get 5 kills without dying 3 times", order: 7 }
      ]
    },
    {
      id: "xr3_ion",
      name: "XR-3 Ion",
      class: "sniper_rifles",
      camos: [
        { id: "xr3_ion_military", name: "One Shot Kills", category: "military", requirement: "Get 80 one shot kills", order: 1 },
        { id: "xr3_ion_special_1", name: "Diamondback", category: "special", requirement: "Get 15 Long Shot Medals", order: 2 },
        { id: "xr3_ion_special_2", name: "Raptor", category: "special", requirement: "Get 50 eliminations without any attachments", order: 3 },
        { id: "xr3_ion_special_3", name: "Mainframe", category: "special", requirement: "Get 2 kills without reloading 10 times", order: 4 },
        { id: "xr3_ion_mastery_1", name: "Shattered Gold", category: "mastery", requirement: "Get 3 kills without dying 10 times", order: 5 },
        { id: "xr3_ion_mastery_2", name: "Arclight", category: "mastery", requirement: "Get 10 Double Kills or better", order: 6 },
        { id: "xr3_ion_mastery_3", name: "Tempest", category: "mastery", requirement: "Get 5 kills without dying 3 times", order: 7 }
      ]
    },

    // ==================== PISTOLS ====================
    {
      id: "jager_45",
      name: "Jager 45",
      class: "pistols",
      camos: [
        { id: "jager_45_military", name: "Headshots", category: "military", requirement: "Get 80 headshots", order: 1 },
        { id: "jager_45_special_1", name: "Diamondback", category: "special", requirement: "Get 15 kills shortly after switching weapons", order: 2 },
        { id: "jager_45_special_2", name: "Raptor", category: "special", requirement: "Get 50 kills while moving", order: 3 },
        { id: "jager_45_special_3", name: "Mainframe", category: "special", requirement: "Get a kill without taking any damage 30 times", order: 4 },
        { id: "jager_45_mastery_1", name: "Shattered Gold", category: "mastery", requirement: "Get 3 kills without dying 10 times", order: 5 },
        { id: "jager_45_mastery_2", name: "Arclight", category: "mastery", requirement: "Get 10 Double Kills or better", order: 6 },
        { id: "jager_45_mastery_3", name: "Tempest", category: "mastery", requirement: "Get 5 kills without dying 3 times", order: 7 }
      ]
    },
    {
      id: "velox_57",
      name: "Velox 5.7",
      class: "pistols",
      camos: [
        { id: "velox_57_military", name: "Headshots", category: "military", requirement: "Get 80 headshots", order: 1 },
        { id: "velox_57_special_1", name: "Diamondback", category: "special", requirement: "Get a kill while sliding, diving, or wall-jumping 15 times", order: 2 },
        { id: "velox_57_special_2", name: "Raptor", category: "special", requirement: "Get 30 kills while or shortly after sprinting", order: 3 },
        { id: "velox_57_special_3", name: "Mainframe", category: "special", requirement: "Kill 30 enemies afflicted by your tactical equipment", order: 4 },
        { id: "velox_57_mastery_1", name: "Shattered Gold", category: "mastery", requirement: "Get 3 kills without dying 10 times", order: 5 },
        { id: "velox_57_mastery_2", name: "Arclight", category: "mastery", requirement: "Get 10 Double Kills or better", order: 6 },
        { id: "velox_57_mastery_3", name: "Tempest", category: "mastery", requirement: "Get 5 kills without dying 3 times", order: 7 }
      ]
    },
    {
      id: "coda_9",
      name: "CODA 9",
      class: "pistols",
      camos: [
        { id: "coda_9_military", name: "Headshots", category: "military", requirement: "Get 80 headshots", order: 1 },
        { id: "coda_9_special_1", name: "Diamondback", category: "special", requirement: "Get 10 eliminations with a suppressor equipped", order: 2 },
        { id: "coda_9_special_2", name: "Raptor", category: "special", requirement: "Get 30 hipfire kills", order: 3 },
        { id: "coda_9_special_3", name: "Mainframe", category: "special", requirement: "Get 15 kills shortly after switching weapons", order: 4 },
        { id: "coda_9_mastery_1", name: "Shattered Gold", category: "mastery", requirement: "Get 3 kills without dying 10 times", order: 5 },
        { id: "coda_9_mastery_2", name: "Arclight", category: "mastery", requirement: "Get 10 Double Kills or better", order: 6 },
        { id: "coda_9_mastery_3", name: "Tempest", category: "mastery", requirement: "Get 5 kills without dying 3 times", order: 7 }
      ]
    },

    // ==================== LAUNCHERS ====================
    {
      id: "aarow_109",
      name: "AAROW 109",
      class: "launchers",
      camos: [
        { id: "aarow_109_military", name: "Scorestreak Destructions", category: "military", requirement: "Destroy 50 scorestreaks", order: 1 },
        { id: "aarow_109_special_1", name: "Diamondback", category: "special", requirement: "Destroy 10 aerial scorestreaks", order: 2 },
        { id: "aarow_109_special_2", name: "Raptor", category: "special", requirement: "Get 10 direct hit kills", order: 3 },
        { id: "aarow_109_special_3", name: "Mainframe", category: "special", requirement: "Destroy 10 scorestreaks, vehicles, equipment, or field upgrades", order: 4 },
        { id: "aarow_109_mastery_1", name: "Shattered Gold", category: "mastery", requirement: "Get 3 kills in a single match 10 times", order: 5 },
        { id: "aarow_109_mastery_2", name: "Arclight", category: "mastery", requirement: "Get 10 Double Kills or better", order: 6 },
        { id: "aarow_109_mastery_3", name: "Tempest", category: "mastery", requirement: "Get 5 kills in a single match", order: 7 }
      ]
    },
    {
      id: "arc_m1",
      name: "A.R.C. M1",
      class: "launchers",
      camos: [
        { id: "arc_m1_military", name: "Scorestreak Destructions", category: "military", requirement: "Destroy 50 scorestreaks", order: 1 },
        { id: "arc_m1_special_1", name: "Diamondback", category: "special", requirement: "Destroy 10 aerial scorestreaks", order: 2 },
        { id: "arc_m1_special_2", name: "Raptor", category: "special", requirement: "Get 10 direct hit kills", order: 3 },
        { id: "arc_m1_special_3", name: "Mainframe", category: "special", requirement: "Destroy 10 ground scorestreaks or vehicles", order: 4 },
        { id: "arc_m1_mastery_1", name: "Shattered Gold", category: "mastery", requirement: "Get 3 kills in a single match 10 times", order: 5 },
        { id: "arc_m1_mastery_2", name: "Arclight", category: "mastery", requirement: "Get 10 Double Kills or better", order: 6 },
        { id: "arc_m1_mastery_3", name: "Tempest", category: "mastery", requirement: "Get 5 kills in a single match", order: 7 }
      ]
    },
    {
      id: "gdl_havoc",
      name: "GDL Havoc",
      class: "launchers",
      camos: [
        { id: "gdl_havoc_military", name: "Scorestreak Destructions", category: "military", requirement: "Destroy 50 scorestreaks", order: 1 },
        { id: "gdl_havoc_special_1", name: "Diamondback", category: "special", requirement: "TBD", order: 2 },
        { id: "gdl_havoc_special_2", name: "Raptor", category: "special", requirement: "TBD", order: 3 },
        { id: "gdl_havoc_special_3", name: "Mainframe", category: "special", requirement: "TBD", order: 4 },
        { id: "gdl_havoc_mastery_1", name: "Shattered Gold", category: "mastery", requirement: "Get 3 kills in a single match 10 times", order: 5 },
        { id: "gdl_havoc_mastery_2", name: "Arclight", category: "mastery", requirement: "Get 10 Double Kills or better", order: 6 },
        { id: "gdl_havoc_mastery_3", name: "Tempest", category: "mastery", requirement: "Get 5 kills in a single match", order: 7 }
      ]
    },

    // ==================== MELEE ====================
    {
      id: "knife",
      name: "Knife",
      class: "melee",
      camos: [
        { id: "knife_military", name: "Eliminations", category: "military", requirement: "Get 250 eliminations", order: 1 },
        { id: "knife_special_1", name: "Diamondback", category: "special", requirement: "Get 50 kills while moving", order: 2 },
        { id: "knife_special_2", name: "Raptor", category: "special", requirement: "Get 30 kills while or shortly after sprinting", order: 3 },
        { id: "knife_special_3", name: "Mainframe", category: "special", requirement: "Get a kill without taking any damage 30 times", order: 4 },
        { id: "knife_mastery_1", name: "Shattered Gold", category: "mastery", requirement: "Get 3 kills without dying 10 times", order: 5 },
        { id: "knife_mastery_2", name: "Arclight", category: "mastery", requirement: "Get 10 Double Kills or better", order: 6 },
        { id: "knife_mastery_3", name: "Tempest", category: "mastery", requirement: "Get 5 kills without dying 3 times", order: 7 }
      ]
    },
    {
      id: "flatline_mk2",
      name: "Flatline MK.II",
      class: "melee",
      camos: [
        { id: "flatline_mk2_military", name: "Eliminations", category: "military", requirement: "Get 250 eliminations", order: 1 },
        { id: "flatline_mk2_special_1", name: "Diamondback", category: "special", requirement: "Get a kill while sliding, diving, or wall-jumping 15 times", order: 2 },
        { id: "flatline_mk2_special_2", name: "Raptor", category: "special", requirement: "Get 50 kills while moving", order: 3 },
        { id: "flatline_mk2_special_3", name: "Mainframe", category: "special", requirement: "Get 30 kills from behind", order: 4 },
        { id: "flatline_mk2_mastery_1", name: "Shattered Gold", category: "mastery", requirement: "Get 3 kills without dying 10 times", order: 5 },
        { id: "flatline_mk2_mastery_2", name: "Arclight", category: "mastery", requirement: "Get 10 Double Kills or better", order: 6 },
        { id: "flatline_mk2_mastery_3", name: "Tempest", category: "mastery", requirement: "Get 5 kills without dying 3 times", order: 7 }
      ]
    },
    {
      id: "ballistic_knife",
      name: "Ballistic Knife",
      class: "melee",      camos: [
        { id: "ballistic_knife_military", name: "Eliminations", category: "military", requirement: "Get 250 eliminations", order: 1 },
        { id: "ballistic_knife_special_1", name: "Diamondback", category: "special", requirement: "Get 25 kills shortly after switching weapons", order: 2 },
        { id: "ballistic_knife_special_2", name: "Raptor", category: "special", requirement: "Get 50 kills while moving", order: 3 },
        { id: "ballistic_knife_special_3", name: "Mainframe", category: "special", requirement: "Get 30 ranged kills with thrown blades", order: 4 },
        { id: "ballistic_knife_mastery_1", name: "Shattered Gold", category: "mastery", requirement: "Get 3 kills without dying 10 times", order: 5 },
        { id: "ballistic_knife_mastery_2", name: "Arclight", category: "mastery", requirement: "Get 10 Double Kills or better", order: 6 },
        { id: "ballistic_knife_mastery_3", name: "Tempest", category: "mastery", requirement: "Get 5 kills without dying 3 times", order: 7 }
      ]
    },
    {
      id: "h311_saw",
      name: "H311-SAW",
      class: "melee",
      camos: [
        { id: "h311_saw_military", name: "Eliminations", category: "military", requirement: "Get 250 eliminations", order: 1 },
        { id: "h311_saw_special_1", name: "Diamondback", category: "special", requirement: "TBD", order: 2 },
        { id: "h311_saw_special_2", name: "Raptor", category: "special", requirement: "TBD", order: 3 },
        { id: "h311_saw_special_3", name: "Mainframe", category: "special", requirement: "TBD", order: 4 },
        { id: "h311_saw_mastery_1", name: "Shattered Gold", category: "mastery", requirement: "Get 3 kills without dying 10 times", order: 5 },
        { id: "h311_saw_mastery_2", name: "Arclight", category: "mastery", requirement: "Get 10 Double Kills or better", order: 6 },
        { id: "h311_saw_mastery_3", name: "Tempest", category: "mastery", requirement: "Get 5 kills without dying 3 times", order: 7 }
      ]
    }
  ],

  // Global mastery camo that unlocks after completing Tempest on all 30 weapons
  globalMasteryCamo: {
    id: "singularity",
    name: "Singularity",
    category: "mastery",
    requirement: "Unlock Tempest camo on all 30 weapons",
    description: "The ultimate multiplayer mastery camo"
  }
};
