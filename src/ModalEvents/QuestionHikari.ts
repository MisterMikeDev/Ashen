import { ModalsId } from "../Helpers";
import { ModalEvent } from "../Interfaces";
import { Emojis } from "../Data/Emojis";
import { EmbedBuilder, EmbedData } from "discord.js";

const { Yes } = Emojis.Util;

export const modalEvent: ModalEvent = {
    id: ModalsId.Question,
    run: async (Ashen, interaction) => {
        const reply = interaction.fields.getTextInputValue(ModalsId.QuestionReply);
        const oldEmbedData = interaction.message!.embeds[0];
        const oldEmbed = new EmbedBuilder(oldEmbedData as EmbedData);
        const askAuthorId = oldEmbedData.author?.url?.replace(
            "https://discord.com/users/",
            ""
        );
        const askAuthor = await interaction.guild!.members.fetch(askAuthorId!);

        const newEmbed = oldEmbed.addFields({
            name: "Respuesta:",
            value: reply
        });

        const isEdited = oldEmbedData.fields.length > 1;

        if (isEdited) {
            newEmbed.spliceFields(1, 1);
        }

        await interaction.message!.edit({
            embeds: [newEmbed]
        });

        const replyMessage = isEdited ? "Pregunta editada." : "Pregunta respondida.";

        const EmbedMessageLink = interaction.message!.url;
        askAuthor
            .send({
                content: `<@${
                    askAuthor.id
                }>, tu [pregunta](${EmbedMessageLink}) ha sido respondida, compruébala en <#${
                    interaction.channel!.id
                }>`
            })
            .catch(() => {});

        await interaction.reply({
            content: `${Yes} | ${replyMessage}`,
            ephemeral: true
        });
    }
};
