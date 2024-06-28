import { Interaction } from "discord.js";
import { Event } from "../Interfaces";

export const event: Event = {
    name: "interactionCreate",
    run: async (Ashen, interaction: Interaction) => {
        if (!interaction.isModalSubmit()) return;
        const ModalId = interaction.customId;

        const ModalEvent = Ashen.modalevents.get(ModalId);
        if (!ModalEvent)
            return interaction.reply({
                content: "Este modal no esta registrado",
                ephemeral: true
            });

        ModalEvent.run(Ashen, interaction);
    }
};
