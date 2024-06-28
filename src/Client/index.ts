import { Client, Collection } from "discord.js";
import { ButtonEvent, CommandType } from "../Interfaces";
import { Config } from "../Data/Config";
import {
    ButtonEventHandler,
    EventHandler,
    ModalEventHandler,
    SlashCommandsHandler
} from "../Handlers";
import { ModalEvent } from "../Interfaces/Other/ModalEvent";
const { DiscordBot } = Config;

export class Ashen extends Client {
    public slashcommands: Collection<string, CommandType> = new Collection();
    public buttonevents: Collection<string, ButtonEvent> = new Collection();
    public modalevents: Collection<string, ModalEvent> = new Collection();
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
        ButtonEventHandler(this);
        ModalEventHandler(this);
        SlashCommandsHandler(this);

        process.on("unhandledRejection", console.error);
        return this;
    }
}
