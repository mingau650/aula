import { Client, GatewayIntentBits } from 'discord.js';
import { token } from './config';

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
});

client.login(token);

export default client;