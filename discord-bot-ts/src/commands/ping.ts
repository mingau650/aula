export const ping = {
    name: 'ping',
    description: 'Responds with a confirmation message.',
    execute: (message) => {
        message.channel.send('Pong!');
    },
};