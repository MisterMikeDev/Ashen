import { Client, Collection } from "discord.js";
import { ButtonEvent, CommandType } from "../Interfaces";
import { Config } from "../Data/Config";
import { EventHandler, SlashCommandsHandler } from "../Handlers";
const { DiscordBot } = Config;

export class Ashen extends Client {
    public slashcommands: Collection<string, CommandType> = new Collection();
    public buttonevents: Collection<string, ButtonEvent> = new Collection();
    public isOnline = false;

    constructor() {
        super({
            intents: DiscordBot.Intents,
            allowedMentions: {
                repliedUser: false
            }
        });
    }

    public async start() {
        await this.login(DiscordBot.Token).then(() => {
            this.isOnline = true;
        });

        EventHandler(this);
        SlashCommandsHandler(this);

        process.on("unhandledRejection", console.error);
        return this;
    }
}
