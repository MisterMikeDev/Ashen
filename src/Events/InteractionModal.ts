import { Interaction } from "discord.js";
import { Event } from "../Interfaces";

export const event: Event = {
    name: "interactionCreate",
    run: async (Ashen, interaction: Interaction) => {
        if (!interaction.isModalSubmit()) return;
    }
};
