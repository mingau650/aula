import { Client, GatewayIntentBits } from 'discord.js';
import { loadEvents } from './client';
import { config } from './config';

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

loadEvents(client);

client.login(config.TOKEN);