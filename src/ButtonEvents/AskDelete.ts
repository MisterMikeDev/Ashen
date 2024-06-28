import { ButtonsId } from "../Helpers";
import { ButtonEvent } from "../Interfaces";
import { Config } from "../Data/Config";

export const buttonEvent: ButtonEvent = {
    id: ButtonsId.QuestionDelete,
    run: async (Ashen, interaction) => {
        if (!Config.DiscordBot.Admins.includes(interaction.user.id)) {
            return await interaction.reply({
                content: "No tienes permisos para interactuar con este botón.",
                ephemeral: true
            });
        }

        await interaction.message!.delete().catch(() => {});
    }
};
