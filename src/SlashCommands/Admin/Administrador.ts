import {
    ApplicationCommandOptionType,
    CommandInteractionOptionResolver
} from "discord.js";
import { SlashCommandStructure } from "../../Interfaces";
import { Config } from "../../Data/Config";
import { GenerateVerificationEmbed } from "./generate-verification-embed.cmd";
import { GenerateRulesEmbed } from "./generate-rules-embed.cmd";
import { GenerateWelcomeEmbed } from "./generate-welcome-embed.cmd";
import { GenerateAskEmbed } from "./generate-ask-embed.cmd";

const AdminsId = Config.DiscordBot.Admins;
const { Subcommand } = ApplicationCommandOptionType;
export default new SlashCommandStructure({
    name: "administrador",
    description: "Sub SlashCommands de Administrador.",
    usage: "/administrador <subcommand>",
    options: [
        {
            name: "generate-verification-embed",
            description: "Genera el embed de verificación.",
            type: Subcommand
        },
        {
            name: "generate-rules-embed",
            description: "Genera el embed de reglas.",
            type: Subcommand
        },
        {
            name: "generate-welcome-embed",
            description: "Genera el embed de bienvenida.",
            type: Subcommand
        },
        {
            name: "generate-ask-embed",
            description: "Genera el embed de pregunta.",
            type: Subcommand,
            options: [
                {
                    name: "ask",
                    description: "La pregunta a realizar.",
                    type: ApplicationCommandOptionType.String,
                    required: true
                }
            ]
        }
    ],
    run: async ({ Ashen, interaction }) => {
        if (!AdminsId.includes(interaction.user.id)) {
            return await interaction.reply({
                content: "No tienes permisos para usar este comando.",
                ephemeral: true
            });
        }

        await interaction.deferReply();
        const Int = interaction.options as CommandInteractionOptionResolver;
        const subCommand = Int.getSubcommand();
        const IntMap = {
            "generate-verification-embed": () => {
                GenerateVerificationEmbed(interaction);
            },
            "generate-rules-embed": () => {
                GenerateRulesEmbed(interaction, Ashen);
            },
            "generate-welcome-embed": () => {
                GenerateWelcomeEmbed(interaction);
            },
            "generate-ask-embed": () => {
                const Ask = Int.getString("ask") || "";
                GenerateAskEmbed(interaction, Ask);
            }
        };

        IntMap[subCommand as keyof typeof IntMap]();
    }
});
