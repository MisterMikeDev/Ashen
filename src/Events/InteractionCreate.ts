import { CommandInteractionOptionResolver, Interaction } from "discord.js";
import { Event, ExtendedInteraction } from "../Interfaces";

export const event: Event = {
    name: "interactionCreate",
    run: async (Ashen, interaction: Interaction) => {
        if (!interaction.isCommand()) return;

        const SlashCommand = Ashen.slashcommands.get(interaction.commandName);
        if (!SlashCommand) {
            interaction.reply({
                content: "Este comando no existe.",
                ephemeral: true
            });
        } else
            SlashCommand.run({
                args: interaction.options as CommandInteractionOptionResolver,
                Ashen,
                interaction: interaction as ExtendedInteraction
            });
    }
};
