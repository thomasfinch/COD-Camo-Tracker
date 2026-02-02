# Call of Duty Camo Tracker - Project Specification

## Overview

A simple, local-first single page web application for tracking camo unlock progress across all weapons in Call of Duty: Black Ops 7. The app allows users to view camo requirements, mark camos as complete, filter by weapon class, and persist progress locally.

## Goals

- **Simple**: No backend server, database, or complex build process
- **Local-first**: All data stored locally, works offline
- **Fast**: Instant updates when checking off camos
- **Practical**: Easy to see what's left to grind at a glance

## Technical Approach

### Stack

- **Vanilla HTML/CSS/JavaScript** - No framework overhead for a simple app
- **localStorage** - Browser-based persistence for progress data
- **Static JSON file** - Camo definitions loaded at runtime

### Why This Stack?

- Zero build step - just open `index.html` in a browser
- No server required
- Progress persists across browser sessions via localStorage
- Easy to backup progress (export/import JSON)
- Camo data is easy to edit/update in a JSON file

## Data Structure

### Progressive Camo Grouping

Many camos unlock through progressive milestones of the same challenge type (e.g., 10 headshots, 20 headshots, 30 headshots, etc.). These are treated as a **single camo category** with one checkbox, not individual checkboxes for each tier. For example, if a weapon has 10 headshot camos unlocking at 10/20/30/.../100 headshots, this counts as one "Headshots" category that you check off once you've completed all tiers.

### Camo Definitions (`camo-data.js`)

Weapons are stored as a flat array, each with a `class` property indicating which weapon class it belongs to.

```json
{
  "weaponClasses": [
    { "id": "assault_rifles", "name": "Assault Rifles" },
    { "id": "smgs", "name": "SMGs" },
    { "id": "lmgs", "name": "LMGs" }
  ],
  "weapons": [
    {
      "id": "xm4",
      "name": "XM4",
      "class": "assault_rifles",
      "camos": [
        {
          "id": "xm4_headshots",
          "name": "Headshots",
          "category": "military",
          "requirement": "Get 100 headshots (10 tiers)",
          "order": 1
        },
        {
          "id": "xm4_eliminations",
          "name": "Eliminations",
          "category": "military",
          "requirement": "Get 500 eliminations (10 tiers)",
          "order": 2
        },
        {
          "id": "xm4_gold",
          "name": "Gold",
          "category": "mastery",
          "requirement": "Complete all Military camos",
          "order": 3
        }
      ]
    },
    {
      "id": "ak74",
      "name": "AK-74",
      "class": "assault_rifles",
      "camos": [
        {
          "id": "ak74_headshots",
          "name": "Headshots",
          "category": "military",
          "requirement": "Get 100 headshots (10 tiers)",
          "order": 1
        }
      ]
    }
  ],
  "camoCategories": [
    { "id": "military", "name": "Military", "color": "#4a5568" },
    { "id": "mastery", "name": "Mastery", "color": "#d69e2e" }
  ]
}
```

### Progress Data (localStorage)

```json
{
  "version": 1,
  "completedCamos": ["xm4_gold", "xm4_woodland", "ak74_gold"],
  "lastUpdated": "2026-01-15T10:30:00Z"
}
```

## Features

### Core Features (MVP)

1. **Weapon Class Filter**
   - Dropdown or tab-based filter
   - Options: All, Assault Rifles, SMGs, LMGs, Shotguns, Marksman Rifles, Sniper Rifles, Pistols, Launchers, Melee, Special

2. **Weapon List View**
   - Display all weapons in selected class
   - Show completion progress per weapon (e.g., "4/10 camos")
   - Visual progress bar

3. **Camo Checklist**
   - Expandable section per weapon
   - Checkbox for each camo
   - Display camo name and unlock requirement
   - Visual distinction for completed vs incomplete

4. **Progress Summary**
   - Overall completion percentage
   - Camos completed vs total
   - Per-class completion stats

5. **Data Persistence**
   - Auto-save to localStorage on every change
   - Export progress to JSON file (backup)
   - Import progress from JSON file (restore)

### Nice-to-Have Features (Post-MVP)

- Search by weapon name
- Filter by camo category (Military, Mastery, etc.)
- Dark/light theme toggle
- Camo preview images
- Sort weapons by completion %
- "What to grind next" suggestions
- Keyboard shortcuts for power users

## User Interface

### Layout

```
┌─────────────────────────────────────────────────────────────┐
│  BO7 Camo Tracker                    [Export] [Import]      │
├─────────────────────────────────────────────────────────────┤
│  Overall Progress: ████████░░░░░░░░ 156/312 (50%)           │
├─────────────────────────────────────────────────────────────┤
│  Filter: [All ▼]  [Assault Rifles] [SMGs] [LMGs] ...        │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │ XM4                                    8/10 ████░░  │   │
│  │  ☑ Gold - Get 100 eliminations                      │   │
│  │  ☑ Woodland - Get 50 headshots                      │   │
│  │  ☐ Savanna - Get 30 objective kills                 │   │
│  │  ...                                                │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │ AK-74                                  5/10 █████░  │   │
│  │  ...                                                │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Design Principles

- **Mobile-friendly**: Works well on phone for quick updates during gaming sessions
- **High contrast**: Easy to read in various lighting conditions
- **Minimal clicks**: One click to toggle a camo complete/incomplete
- **Clear hierarchy**: Weapon class → Weapon → Camo

## File Structure

```
cod-camo-tracker/
├── index.html          # Main application page
├── styles.css          # All styling
├── app.js              # Application logic
├── camos.json          # Weapon and camo definitions
├── PROJECT_SPEC.md     # This file
└── README.md           # Setup and usage instructions
```

## Implementation Notes

### Loading Camo Data

Since we're running locally without a server, we have two options:

1. **Embed in JavaScript**: Define camo data directly in `app.js`
   - Pro: No CORS issues, works by double-clicking index.html
   - Con: Mixing data with code

2. **Use a local dev server**: Serve files with `python -m http.server` or similar
   - Pro: Clean separation of data and code
   - Con: Extra step to run

**Recommendation**: Embed camo data in a separate `camo-data.js` file that declares a global variable. This keeps data separate while avoiding CORS issues.

### Progress Backup

The export feature should generate a downloadable JSON file. Import should accept a file upload and merge/replace progress data.

## Development Phases

### Phase 0: Data Gathering
- Research and compile full weapon list for BO7 from online sources
- Research camo requirements for each weapon class
- Structure data into `camo-data.js` format

### Phase 1: Foundation
- Set up HTML structure
- Basic CSS styling
- Load and display camo data

### Phase 2: Core Functionality
- Implement checkbox toggle
- localStorage persistence
- Progress calculations

### Phase 3: Filtering & UX
- Weapon class filtering
- Progress bars and stats
- Export/import functionality

### Phase 4: Polish
- Responsive design
- Visual refinements
- Edge case handling

## Open Questions

1. **Camo categories**: How are camos organized in BO7? (e.g., Military → Mastery → Prestige)

2. **Mastery camos**: Are there weapon-specific mastery camos plus class-wide or game-wide mastery camos to track?
