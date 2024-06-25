import { Ashen } from "../Client";
import { Config } from "../Data/Config";
import { ColorText } from "../Helpers";
import { Event } from "../Interfaces";
export const event: Event = {
    name: "ready",
    run: (Ashen) => {
        console.log(
            `[${ColorText("+", "greenBright")}] ${ColorText(
                `${Ashen.user?.tag}`,
                "magentaBright"
            )} en linea ✅`
        );

        SetRandomStatus(Ashen);

        setInterval(() => SetRandomStatus(Ashen), 10000);
    }
};

function SetRandomStatus(Ashen: Ashen) {
    const { Status } = Config.DiscordBot;
    const arrayStatus = Status(Ashen);

    Ashen.user?.setPresence({
        activities: [arrayStatus[Math.floor(Math.random() * arrayStatus.length)]],
        status: "online"
    });
}
