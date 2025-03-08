const fs = require( "node:fs" );
const path = require( "node:path" );

const { Client, Collection, Events, GatewayIntentBits } = require( "discord.js" );

const { token } = require( "./config.json" );

const client = new Client( { intents: [GatewayIntentBits.Guilds] } );

client.commands = new Collection();

const commandsPath = path.join( __dirname, "commands" );
const commandsFolders = fs.readdirSync( commandsPath );

for ( const folder of commandsFolders ) {
  const commandPath = path.join( folder, folder );
  const commandFiles = fs.readdirSync( commandPath );

  for ( const file of commandFiles ) {
    const filePath = path.join( commandPath, file );
    const command = require( filePath );

    if ( "data" in command && "execute" in command ) {
      client.commands.set( command.data.name, command );
    } else {
      console.log(
        `[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`
      );
    }
  }
}

client.once( Events.ClientReady, ( readyClient ) => {
  console.log( `Ready! Logged in as ${readyClient.user.tag}` );
} );

client.on( Event.user );

client.login( token );
