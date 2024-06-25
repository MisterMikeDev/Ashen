import { ButtonsId } from "../..";
import { ButtonBuilder, ButtonStyle } from "discord.js";
import { Emojis } from "../../../Data/Emojis";

const YesEmoji = Emojis.Util.Yes;

export const CheckBtn = new ButtonBuilder()
    .setCustomId(ButtonsId.Verificación)
    .setEmoji(YesEmoji)
    .setStyle(ButtonStyle.Success);
