import { Interaction } from "discord.js";
import { Event } from "../Interfaces";

export const event: Event = {
    name: "interactionCreate",
    run: async (Ashen, interaction: Interaction) => {
        if (!interaction.isButton()) return;
        const BtnId = interaction.customId;

        const ButtonEvent = Ashen.buttonevents.get(BtnId);
        if (!ButtonEvent)
            return interaction.reply({
                content: "Este boton no esta registrado",
                ephemeral: true
            });

        ButtonEvent.run(Ashen, interaction);
    }
};
