<h1 align="center">World Currency FVTT module for D&D 5e</h1>

<p align="center">
<img src="https://gitlab.com/uploads/-/system/project/avatar/9199873/fvtt-solid-512.png?width=64" />
</p>
<!-- <p align="center">
<a href="https://github.com/cAPKck/5e-world-currency"><img src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" alt="Maintenance"></a>
<a href="https://github.com/cAPKck/5e-world-currency"><img src="https://img.shields.io/github/v/release/cstby/foundryvtt-world-currency-5e.svg" alt="Version"></a>
<a href="https://foundryvtt.com/releases/"><img src="https://img.shields.io/endpoint?url=https://foundryshields.com/version?url=https://raw.githubusercontent.com/cstby/foundryvtt-world-currency-5e/master/module.json"></a>
 <img alt="GitHub Issues" src="https://img.shields.io/github/issues/cstby/foundryvtt-world-currency-5e">
</p> -->

This [FoundryVTT](https://foundryvtt.com) module allows you to use your world's homebrew currencies in D&D 5th Edition. It is forked from 1st --> cstby's [World Currency 5e](https://github.com/cstby/foundryvtt-world-currency-5e) module and updated to work with the newest versions of Foundry v11 and the dnd5e module, and 2nd from --> [5e World Currency](https://github.com/cAPKck/5e-world-currency) for some worthy updates to incorporate v12 compatibility fixes

## Installation

1. On Foundry's "Add-on Modules" tab, click "Install Module"
2. At the bottom, paste `https://raw.githubusercontent.com/ronmlgaw/5e-world-currency-rg4fvtt13/master/module.json` into the "Manifest URL" field and click "install".

## Features

### Rename Currency

Rename currencies and their abbreviations. The new names and abbreviations will be used wherever the old names appeared.

### Hide Currency

Hide currencies that you don't want to use. If your players get confused by platinum and electrum, hide them and never think of them again!

### Hide Converter

If your currencies aren't meant to be interchangeable, you can hide the currency converter from the character sheets.

### Standard Currency

Set a standard currency. All items will be priced in that currency instead of gold. You and your players won't see any reference to gold or need to consider items prices in gold.

### Set Conversion Rates

Set whatever currency rates you need. Great for using the silver standard, which makes gold more rare.

## Compatibility

World Currencies 5e works by patching the currency names and rates set by the D&D 5e System. Any module that pulls names and rates from the D&D 5e System will display them correctly.

| **Name**                                                                                         |       Works        | Notes                                                                                                                               |
| ------------------------------------------------------------------------------------------------ | :----------------: | ----------------------------------------------------------------------------------------------------------------------------------- |
| [D&D 5e System](https://github.com/foundryvtt/dnd5e)                                             | :heavy_check_mark: | Fully Compatible                                                                                                                    |
| [Item Piles](https://github.com/fantasycalendar/FoundryVTT-ItemPiles)                            | :x:                | Not yet compatible                                                                                                                  |

## Known Limitations

- Item prices can only be edited when the standard currency is gp. This is because the DND5e system assumes all items are priced in gold.

## Contributing

If you run into anything unexpected or have an idea for a new feature, please [submit an issue](https://github.com/ronmlgaw/5e-world-currency-rg4fvtt13/issues). Merge requests are more than welcome.

## Acknowledgements

[cstby](https://github.com/cstby) for the Original World Currency 5e module. [cAPKck](https://github.com/cAPKck) for the more recent fork with some worthy, more recent commits related to FVtt v12

## License

This Foundry VTT module is licensed under [GNU GPLv3.0](https://www.gnu.org/licenses/gpl-3.0.en.html), supplemented by [Commons Clause](https://commonsclause.com/).

This work is licensed under Foundry Virtual Tabletop [EULA - Limited License Agreement for module development from March 2, 2023.](https://foundryvtt.com/article/license/)
