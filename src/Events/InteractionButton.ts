import { Interaction } from "discord.js";
import { Event } from "../Interfaces";
import { ButtonEventHandler } from "../Handlers/ButtonHandler";

export const event: Event = {
    name: "interactionCreate",
    run: async (Ashen, interaction: Interaction) => {
        if (!interaction.isButton()) return;
        const BtnId = interaction.customId;

        if (Ashen.buttonevents.size === 0) {
            ButtonEventHandler().forEach(async (ButtonEvent) => {
                const event = await ButtonEvent;
                Ashen.buttonevents.set(event.id, event);
            });

            return interaction.reply({
                content: "Reiniciando botones, por favor intenta de nuevo",
                ephemeral: true
            });
        }

        const ButtonEvent = Ashen.buttonevents.get(BtnId);

        if (!ButtonEvent)
            return interaction.reply({
                content: "Este boton no esta registrado",
                ephemeral: true
            });

        await interaction.deferReply({ ephemeral: true });
        ButtonEvent.run(Ashen, interaction);
    }
};
