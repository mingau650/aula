export const ping = {
    name: 'ping',
    description: 'Responds with a confirmation message.',
    execute: (message: import('discord.js').Message) => {
        if ('send' in message.channel && typeof message.channel.send === 'function') {
            message.channel.send('Pong!');
        }
    },
};