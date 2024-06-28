/* eslint-disable no-unused-vars */
import { ModalsId } from "../../Helpers";
import { Ashen } from "../../Client";
import { CacheType, ModalSubmitInteraction } from "discord.js";

interface Run {
    (Ashen: Ashen, interaction: ModalSubmitInteraction<CacheType>, ...args: any[]);
}

export interface ModalEvent {
    id: ModalsId;
    run: Run;
}
