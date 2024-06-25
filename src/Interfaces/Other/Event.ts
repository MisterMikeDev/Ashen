/* eslint-disable no-unused-vars */
import { Ashen } from "../../Client";
import { ClientEvents } from "discord.js";

interface Run {
    (Ashen: Ashen, ...args: any[]);
}

export interface Event {
    name: keyof ClientEvents;
    run: Run;
}
