import {
    CommandInteraction,
    CacheType,
    GuildMember,
    EmbedBuilder,
    EmbedData
} from "discord.js";
import { AskEmbed } from "../../Helpers";

export const GenerateAskEmbed = async (
    interaction: CommandInteraction<CacheType>,
    Ask: string
) => {
    const VerificationEmbed = AskEmbed(interaction.member as GuildMember, Ask);

    const msg = await interaction.channel!.send({
        embeds: [VerificationEmbed]
    });

    const newEmbed = new EmbedBuilder(msg.embeds[0] as EmbedData).setDescription(
        `Id del mensaje:\n\`\`\`\n${msg.id}\n\`\`\``
    );

    await msg.edit({ embeds: [newEmbed] });

    await interaction.editReply({
        content: "Embed de verificación enviado."
    });
};
