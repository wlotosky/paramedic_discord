const { Client, Events, GatewayIntentBits } = require( 'discord.js' );
const { token } = require( './config.json' );

console.log( token );
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once(Events.ClientReady, readyClient => {
  console.log( `Ready! Logged in as ${readyClient.user.tag}` );
});

client.on( Events.InteractionCreate, async interaction => {
  if ( !interaction.isChatInputCommand() ) return;

  if ( interaction.commnadName === 'ping' ) {
    await interaction.reply( 'Pong!' );
  }
});

client.login( token );