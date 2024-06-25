import { readdirSync } from "fs";
import { join } from "path";
import { ButtonEvent } from "../Interfaces";
export const ButtonEventHandler = () => {
    const Path = join(__dirname, "..", "ButtonEvents");
    return readdirSync(Path).map(async (File) => {
        const { buttonEvent } = await import(`${Path}/${File}`);
        const btnEvent: ButtonEvent = buttonEvent;
        return btnEvent;
    });
};
