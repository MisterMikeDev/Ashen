import { ButtonsId } from "../Helpers";
import { ButtonEvent } from "../Interfaces";
import { Emojis } from "../Data/Emojis";
import { Config } from "../Data/Config";
import { GuildMemberRoleManager } from "discord.js";

const YesEmoji = Emojis.Util.Yes;
const NoEmoji = Emojis.Util.No;
const MemberRole = Config.DiscordBot.Roles.Miembro;

export const buttonEvent: ButtonEvent = {
    id: ButtonsId.Verificación,
    run: async (Ashen, interaction) => {
        const InteractionMember = interaction.member?.roles as GuildMemberRoleManager;
        const UserHaveMemberRole = InteractionMember.cache.has(MemberRole);

        if (UserHaveMemberRole) {
            return await interaction.editReply({
                content: `${NoEmoji} | Ya tienes el rol de Miembro`
            });
        }

        InteractionMember.add(MemberRole).catch(() => null);

        await interaction.editReply({
            content: `${YesEmoji} | Te has verificado correctamente`
        });
    }
};
