interface Commands {
  name: string;
  description: string;
}

export const commands: Commands[] = [
  {
    name: "ping",
    description: "Replies with Pong!",
  },
  {
    name: "test",
    description: "Replies with Hello World!",
  },
];
