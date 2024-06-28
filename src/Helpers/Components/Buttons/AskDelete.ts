import { ButtonsId } from "../..";
import { ButtonBuilder, ButtonStyle } from "discord.js";
import { Emojis } from "../../../Data/Emojis";

const DeleteEmoji = Emojis.Util.Deny;

export const DeleteBtn = new ButtonBuilder()
    .setCustomId(ButtonsId.QuestionDelete)
    .setEmoji(DeleteEmoji)
    .setStyle(ButtonStyle.Danger);
