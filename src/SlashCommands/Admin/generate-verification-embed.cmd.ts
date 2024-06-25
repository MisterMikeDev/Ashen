import {
    CommandInteraction,
    CacheType,
    EmbedBuilder,
    ActionRowBuilder,
    ButtonBuilder
} from "discord.js";
import { Emojis } from "../../Data/Emojis";
import { CheckBtn } from "../../Helpers";

const YesEmoji = Emojis.Util.Yes;
export const GenerateVerificationEmbed = async (
    interaction: CommandInteraction<CacheType>
) => {
    const VerificationEmbed = new EmbedBuilder()
        .setTitle("Verificación")
        .setDescription(
            `Para poder Verificarte solo debes de precionar el boton con el emoji ${YesEmoji}`
        )
        .setColor("#ba31ff")
        .setImage(
            "https://cdn.discordapp.com/attachments/1254623170187628626/1254642910318825563/a43.gif?ex=667a3cc3&is=6678eb43&hm=9e28d44e18201256a0c0385a49c763169212b80d2a27394530addaf6886536ef&"
        );

    const Component = new ActionRowBuilder<ButtonBuilder>().addComponents(CheckBtn);

    await interaction.channel!.send({
        embeds: [VerificationEmbed],
        components: [Component]
    });

    await interaction.editReply({
        content: "Embed de verificación enviado."
    });
};
