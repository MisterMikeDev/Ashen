import { CommandInteraction, CacheType, EmbedBuilder } from "discord.js";
import { Emojis } from "../../Data/Emojis";
import { Ashen } from "../../Client";

const { Arrow, WindL, WindR, Rules, Yes } = Emojis.Util;

export const GenerateRulesEmbed = async (
    interaction: CommandInteraction<CacheType>,
    Ashen: Ashen
) => {
    const RuleList = [
        {
            name: "Respeto Mutuo",
            description:
                "Trata a todos los miembros con respeto y cortesía. No se tolerará el acoso, el odio o cualquier forma de discriminación."
        },
        {
            name: "No Spam",
            description:
                "No se permite el spam de mensajes, enlaces o cualquier otro contenido. Esto incluye la autopromoción no autorizada."
        },
        {
            name: "Contenido Apropiado",
            description:
                "Todo el contenido compartido debe ser apropiado para la comunidad. No se permite contenido NSFW, violento o ilegal."
        },
        {
            name: "Uso de Canales Correctos",
            description:
                "Utiliza los canales de manera adecuada. Cada canal tiene un propósito específico, así que asegúrate de publicar en el lugar correcto."
        },
        {
            name: "No Discurso de Odio",
            description:
                "No se tolerará ningún tipo de discurso de odio, incluido racismo, sexismo, homofobia, transfobia, etc."
        },
        {
            name: "Privacidad y Seguridad",
            description:
                "No compartas información personal tuya ni de otros miembros. Respetamos la privacidad de todos."
        },
        {
            name: "No Trolling",
            description:
                "El trolling y el comportamiento disruptivo no son aceptables y resultarán en sanciones."
        },
        {
            name: "Reportar Comportamientos Inapropiados",
            description:
                "Si ves algo que va en contra de las reglas, informa a los moderadores. No intentes resolverlo por tu cuenta."
        },
        {
            name: "No Abuso de Bots",
            description:
                "No abuses de los comandos de los bots. Úsalos de manera responsable."
        },
        {
            name: "Lenguaje Apropiado",
            description:
                "Mantén el lenguaje apropiado y profesional en todo momento. Evita insultos y palabrotas."
        },
        {
            name: "No Múltiples Cuentas",
            description:
                "No uses múltiples cuentas para eludir restricciones o sanciones. Esto resultará en una prohibición permanente."
        },
        {
            name: "Escuchar a los Moderadores",
            description:
                "Los moderadores están aquí para ayudar a mantener la comunidad segura y divertida. Sigue sus instrucciones y respeta sus decisiones."
        },
        {
            name: "Eventos y Concursos",
            description:
                "Participa de manera justa y respetuosa en eventos y concursos. Cualquier trampa o mala conducta resultará en la descalificación."
        },
        {
            name: "Actualización de Reglas",
            description:
                "Estas reglas pueden ser actualizadas según sea necesario. Mantente al tanto de las actualizaciones y cambios."
        },
        {
            name: "Sanciones",
            description:
                "El incumplimiento de estas reglas puede resultar en advertencias, restricciones temporales o permanentes, dependiendo de la gravedad de la infracción."
        }
    ];

    const NameTemplate = (text: string) => `${WindL} **${text}** ${WindR}`;
    const DescriptionTemplate = (text: string) => `${Arrow} ${text}`;
    const RulesFields = RuleList.map((rule) => ({
        name: NameTemplate(rule.name),
        value: DescriptionTemplate(rule.description)
    }));

    const VerificationEmbed = new EmbedBuilder()
        .setTitle(`${Rules} **Reglas del Servidor de Discord** ${Rules}`)
        .addFields(RulesFields)
        .setFooter({
            text: "Recuerda que estas reglas están diseñadas para asegurar un entorno agradable y seguro para todos los miembros. ¡Diviértete y disfruta del servidor!",
            iconURL: Ashen.user!.displayAvatarURL()
        })
        .setColor("#ba31ff");

    await interaction.channel!.send({
        embeds: [VerificationEmbed]
    });

    await interaction.editReply({
        content: `${Yes} **¡El embed de reglas ha sido enviado!**`
    });
};
