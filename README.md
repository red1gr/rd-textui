# RD-TEXTUI FIVEM SCRIPT

[![GitHub issues](https://img.shields.io/github/issues/red1gr/rd-textui?style=for-the-badge&logo=github&logoColor=white)](https://github.com/red1gr/rd-textui/issues)
[![GitHub license](https://img.shields.io/github/license/red1gr/rd-textui?style=for-the-badge&logo=apache&logoColor=white)](LICENSE)

## OVERVIEW
rd-textui is a lightweight FiveM utility resource designed to provide a customizable text-based user interface. It serves as a foundational UI component used across various rd-scripts to communicate information to players via a clean, NUI-driven display.

## FEATURES
- **Dynamic Display:** Ability to open a text UI with a custom message, color, and screen position.
- **Resource Exports:** Provides `Open` and `Close` exports for seamless integration with other Lua scripts.
- **Event-Driven Control:** Supports `rd-textui:Open` and `rd-textui:Close` net events for remote triggering.
- **NUI Implementation:** Utilizes a dedicated HTML, CSS, and JavaScript frontend for a polished visual presentation.

## TECH STACK
[![Lua](https://img.shields.io/badge/Lua-5.1-2C2D72.svg?style=for-the-badge&logo=lua&logoColor=white)](https://www.lua.org/)
[![HTML5](https://img.shields.io/badge/HTML5-CSS3-E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-3.0-1572B6.svg?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6-F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

### INSTALLATION
1. **Download Resource**
    - Clone or download the repository into your server's `resources` folder.
    ```bash
    cd resources
    git clone https://github.com/red1gr/rd-textui.git
    ```
2. **Verify Directory**
    - Ensure the folder is named exactly `rd-textui` to maintain compatibility with the internal resource checks.
3. **Start Resource**
    - Add the following line to your `server.cfg` file:
    ```cfg
    ensure rd-textui
    ```

## PROJECT STRUCTURE
```
rd-textui/
├── UI/                     # NUI frontend files
│   ├── scripts.js          # UI logic and NUI message handling
│   ├── styles.css          # UI styling and positioning
│   └── ui.html             # Main UI layout
├── client.lua              # Client-side logic and event handlers
└── fxmanifest.lua          # Resource manifest and exports
```

## CONTRIBUTING
- WE WELCOME CONTRIBUTIONS! IF YOU HAVE SUGGESTIONS FOR IMPROVEMENTS, FEATURE REQUESTS, OR BUG REPORTS, PLEASE OPEN AN ISSUE OR SUBMIT A PULL REQUEST ON OUR GITHUB REPOSITORY.

## LICENSE
THIS PROJECT IS LICENSED UNDER THE [APACHE-2.0](LICENSE) - SEE THE [LICENSE](LICENSE) FILE FOR DETAILS.

## SUPPORT & CONTACT
- ISSUES: [GITHUB ISSUES](https://github.com/red1gr/rd-textui/issues)
- CONTACT: [CONTACT](mail@red1gr.dev)