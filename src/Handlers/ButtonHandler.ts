import { Ashen } from "../Client";
import { ButtonEvent } from "../Interfaces";
import { join } from "path";
import { readdirSync } from "fs";
export const ButtonEventHandler = (Ashen: Ashen) => {
    const Path = join(__dirname, "..", "ButtonEvents");
    readdirSync(Path)
        .map(async (File) => {
            const { buttonEvent } = await import(`${Path}/${File}`);
            const btnEvent: ButtonEvent = buttonEvent;
            return btnEvent;
        })
        .forEach(async (ButtonEvent) => {
            const event = await ButtonEvent;
            Ashen.buttonevents.set(event.id, event);
        });
};
