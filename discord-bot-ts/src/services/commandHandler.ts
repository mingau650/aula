import { Message } from 'discord.js';
import { commands } from '../commands';

export const commandHandler = (message: Message) => {
    const args = message.content.slice(1).trim().split(/ +/);
    const commandName = args.shift()?.toLowerCase();

    if (!commandName || !commands.has(commandName)) return;

    const command = commands.get(commandName);
    if (command) {
        command.execute(message, args);
    }
};