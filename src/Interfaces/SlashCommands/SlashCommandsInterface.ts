/* eslint-disable no-unused-vars */
import {
    ChatInputApplicationCommandData,
    CommandInteraction,
    CommandInteractionOptionResolver,
    GuildMember,
    PermissionResolvable
} from "discord.js";
import { Ashen } from "../../Client";

export interface ExtendedInteraction extends CommandInteraction {
    member: GuildMember;
}

interface RunOption {
    Ashen: Ashen;
    interaction: CommandInteraction;
    args: CommandInteractionOptionResolver;
}

type RunFunction = (options: RunOption) => any;

export type CommandType = {
    userPermisions?: PermissionResolvable[];
    usage?: string;
    run: RunFunction;
} & ChatInputApplicationCommandData;
