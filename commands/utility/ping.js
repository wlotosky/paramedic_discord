const { SlashCommandBuilder } = require( 'discord.js' );

module.exports = {
  data: new SlashCommandBuilder()
    .setName( 'sup' )
    .setDescription( 'Replies with "sup wit u?"' ),
    async execute( interaction ) {
      await interaction.reply( 'sup wit u?' );
    }
};