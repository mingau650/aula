import { Message } from 'discord.js';
import { commandHandler } from '../services/commandHandler';

export const messageCreate = async (message: Message) => {
    // Ignora mensagens de bots
    if (message.author.bot) return;

    // Processa comandos
    await commandHandler(message);
};