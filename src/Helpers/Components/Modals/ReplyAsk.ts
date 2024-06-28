import {
    ActionRowBuilder,
    ModalBuilder,
    TextInputBuilder,
    TextInputStyle
} from "discord.js";
import { ModalsId } from "../../index";

const replyInput = new ActionRowBuilder<TextInputBuilder>().addComponents(
    new TextInputBuilder()
        .setCustomId(ModalsId.QuestionReply)
        .setLabel("Respuesta:")
        .setPlaceholder("Escribe tu respuesta.")
        .setStyle(TextInputStyle.Paragraph)
        .setRequired(true)
);

export const ReplyAskModal = new ModalBuilder()
    .setCustomId(ModalsId.Question)
    .setTitle("Responde a una pregunta")
    .addComponents(replyInput);
