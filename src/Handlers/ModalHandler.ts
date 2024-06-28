import { readdirSync } from "fs";
import { join } from "path";
import { Ashen } from "../Client";
import { ModalEvent } from "../Interfaces/Other/ModalEvent";
export const ModalEventHandler = (Ashen: Ashen) => {
    const Path = join(__dirname, "..", "ModalEvents");
    readdirSync(Path)
        .map(async (File) => {
            const { modalEvent } = await import(`${Path}/${File}`);
            const mdlEvent: ModalEvent = modalEvent;
            return mdlEvent;
        })
        .forEach(async (ModalEvent) => {
            const event = await ModalEvent;
            Ashen.modalevents.set(event.id, event);
        });
};
