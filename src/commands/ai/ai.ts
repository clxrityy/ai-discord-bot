import config from "../../config";
import query from "../../lib/query";
import { SlashCommand } from "../../utils/types";
import { ColorResolvable, EmbedBuilder, SlashCommandBuilder } from "discord.js";

const ai: SlashCommand = {
    data: new SlashCommandBuilder()
        .setName("ai")
        .setDescription("Say or ask something to an AI")
        .addStringOption((option) => option
            .setName("prompt")
            .setDescription("The prompt to give")
            .setRequired(true)
            .setMinLength(2)
            .setMaxLength(256)
    ),
    userPermissions: [],
    botPermissions: [],
    run: async (client, interaction) => {
        const { guildId } = interaction;

        if (!interaction.isCommand()) return;

        const prompt = interaction.options.getString("prompt");

        const embed = new EmbedBuilder()
            .setAuthor({ name: interaction.user.displayName, iconURL: interaction.user.defaultAvatarURL })
            .setTitle(prompt)

        // defer the reply to give the openai query time
        await interaction.deferReply().catch(() => null)
        
        const response = await query(prompt, guildId);

        if (response === undefined || response === null || !response) {
            embed.setDescription("An error occured")
                .setColor(config.colors.error as ColorResolvable)
            return await interaction.editReply({embeds: [embed] })
        }
        if (interaction.replied) {
            return;
        }
        if (interaction.deferred) {
            embed.setDescription(response)
                .setColor(config.colors.primary as ColorResolvable)

            return await interaction.editReply({ embeds: [embed] });
        }

        return;
    }
}

module.exports = ai;