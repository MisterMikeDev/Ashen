import { readdirSync } from "fs";
import { join } from "path";
import { Ashen } from "../Client";
import { Event } from "../Interfaces";
export const EventHandler = (Ashen: Ashen): void => {
    const Path = join(__dirname, "..", "Events");
    readdirSync(Path).map(async (File) => {
        const { event } = await import(`${Path}/${File}`);
        const { name, run }: Event = event;
        Ashen.on(name, (...args) => run(Ashen, ...args));
        return event;
    });
};
