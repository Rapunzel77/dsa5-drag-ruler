Hooks.once("dragRuler.ready", (SpeedProvider) => {
    class Dsa5SpeedProvider extends SpeedProvider {
        get colors() {
            game.i18n.initialize();
            return [
                {id: "walk", default: 0x00FF00, name: game.i18n.localize("dragRuler.TDE5.walk")},
                {id: "dash", default: 0x3B4FE8, name: game.i18n.localize("dragRuler.TDE5.dash")},
            ]
        }

        getRanges(token) {
            const baseSpeed = token.actor.data.data.status.speed.max;
            return [
                {range: baseSpeed, color: "walk"},
                {range: baseSpeed * 2, color: "dash"}
            ];
        }
    }
    dragRuler.registerModule("dsa5-drag-ruler", Dsa5SpeedProvider);
})