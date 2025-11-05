import { Client, GatewayIntentBits } from 'discord.js';
import loadEventsFromClient from './client';
import config from './config';

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
});

client.once('ready', () => {
    console.log(`Logged in as ${client.user?.tag}!`);
});

export default function loadEvents(client: Client) {

}

client.login(config.token);