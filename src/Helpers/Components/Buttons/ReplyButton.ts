import { ButtonsId } from "../..";
import { ButtonBuilder, ButtonStyle } from "discord.js";
import { Emojis } from "../../../Data/Emojis";

const ReplyEmoji = Emojis.Util.FAQ;

export const ReplyBtn = new ButtonBuilder()
    .setCustomId(ButtonsId.Question)
    .setEmoji(ReplyEmoji)
    .setStyle(ButtonStyle.Secondary);
