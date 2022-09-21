Hooks.once("dragRuler.ready", (SpeedProvider) => {

    class Dsa5SpeedProvider extends SpeedProvider {
        // Adding movement types and color pickers.
        get colors() {
            game.i18n.initialize();
            return [
                {id: "walk", default: 0x00FF00, name: game.i18n.localize("dragRuler.TDE5.walk")},
                {id: "dash", default: 0x3B4FE8, name: game.i18n.localize("dragRuler.TDE5.dash")},
            ]
        }

        // Currently only (N)PCs work nicely. Monsters only work until they have special rules like birds that could
        // fly or walk and thus can be handled differently
        getRanges(token) {
            const baseSpeed = token.actor.system.status.speed.max;
            return [
                {range: baseSpeed, color: "walk"},
                {range: baseSpeed * 2, color: "dash"}
            ];
        }
    }
    dragRuler.registerModule("dsa5-drag-ruler", Dsa5SpeedProvider);
})