import { ActivitiesOptions, ActivityType } from "discord.js";
import { Ashen } from "../Client";
import { Admins } from "./Ids";

const StatusActivity: ActivitiesOptions = {
    type: ActivityType.Streaming,
    name: ""
};

// eslint-disable-next-line no-unused-vars
const StatusPresence = (Ashen: Ashen): ActivitiesOptions[] => [
    {
        ...StatusActivity,
        name: "¡Hola! 👋"
    },
    {
        ...StatusActivity,
        name: "🌟 Viva Komi-san."
    },
    {
        ...StatusActivity,
        name: "🌈 ¡Diviértete en Hikari's World! 🌈"
    }
];

export const Config = {
    DiscordBot: {
        IdAuthor: "437308398845952001",
        Client: process.env.BOT_CLIENT_ID ?? "",
        ClientSecret: process.env.BOT_CLIENT_SECRET ?? "",
        Token: process.env.BOT_TOKEN ?? "",
        Intents: [
            "Guilds",
            "GuildMembers",
            "GuildBans",
            "GuildEmojisAndStickers",
            "GuildIntegrations",
            "GuildWebhooks",
            "GuildInvites",
            "GuildVoiceStates",
            "GuildPresences",
            "GuildMessages",
            "GuildMessageReactions",
            "GuildMessageTyping",
            "DirectMessages",
            "DirectMessageReactions",
            "DirectMessageTyping",
            "MessageContent",
            "GuildScheduledEvents"
        ] as [
            "Guilds",
            "GuildMembers",
            "GuildBans",
            "GuildEmojisAndStickers",
            "GuildIntegrations",
            "GuildWebhooks",
            "GuildInvites",
            "GuildVoiceStates",
            "GuildPresences",
            "GuildMessages",
            "GuildMessageReactions",
            "GuildMessageTyping",
            "DirectMessages",
            "DirectMessageReactions",
            "DirectMessageTyping",
            "MessageContent",
            "GuildScheduledEvents"
        ],
        Server: {
            ID: "1189681605900509278",
            WelcomeChannel: "1254559425637650482",
            VerificationChannel: "1254634339707392011",
            RulesChannel: "1254559445686554724",
            AutorolChannel: "1254559467924881471",
            QuestionsChannel: "1249574790914773012"
        },
        Roles: {
            Miembro: "1254621584371482707",
            Moderador: "1249878229007990936",
            Admin: "1254621226899341404",
            Owner: "1254621498430324826"
        },
        Messages: {
            Verification: "1254655246228131874"
        },
        Admins: [Admins.MrMikeDev, Admins.Hikari],
        Status: StatusPresence
    }
};
