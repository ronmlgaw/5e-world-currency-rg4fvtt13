/**
 * Registers hook callbacks.
 */

import * as core from "./world-currency-5e.js";
import { registerSettings } from "./settings.js";
import * as convert from "./convert.js";

// Core Hooks

Hooks.once("init", () => {
    registerSettings();
});

Hooks.on("ready", function () {
    core.patchCurrencies();
});

Hooks.on("renderActorSheet5eCharacter", (sheet, html) => {
    core.removeCurrencies(html);
    core.changeCurrencyIcons(html);
    console.log("world-currency-5e | Altered character sheet");
});

Hooks.on("renderActorSheet5eVehicle", (sheet, html) => {
    core.removeCurrencies(html);
    console.log("world-currency-5e | Altered vehicle sheet");
});

Hooks.on("renderItemSheet", (sheet, html, data) => {
    let standard = game.settings.get(core.WORLD_CURRENCY_5E, "Standard");
    if (!(game.user.isGM && standard == "gp")) {
        html.find('[name="system.price"]').prop("disabled", true);
        html.find('[name="system.price"]').prop("type", "text");
        html.find('[name="system.price"]').val(convert.formatCurrency(convert.gpToStandard(data.system.price)));
    }
});