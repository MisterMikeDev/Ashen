/* eslint-disable no-unused-vars */
import { ButtonsId } from "../../Helpers";
import { Ashen } from "../../Client";
import { CacheType, ButtonInteraction } from "discord.js";

interface Run {
    (Ashen: Ashen, interaction: ButtonInteraction<CacheType>, ...args: any[]);
}

export interface ButtonEvent {
    id: ButtonsId;
    run: Run;
}
