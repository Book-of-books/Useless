import { Client } from "revolt.js";

const client = new Client();

const randomReplies = [
  "bruh 😭",
  "skill issue 💀",
  "why tho 🤡",
  "yikes 🫠",
  "🗣️ random dumb noise 🗣️",
  "stop talking to me 🫣",
  "poggers 😎",
  "haha useless 😂",
];

client.on("ready", () => {
  console.log("Useless bot is online! Prepare for chaos 💀");
});

client.on("message", (msg) => {
  if (!msg.author) return;

  const text = msg.content?.toLowerCase() || "";

  // Respond to keywords
  if (text.includes("hello")) msg.reply("bro said hello 💀");
  if (text.includes("useless")) msg.reply("nah YOU useless 😭");
  if (text.includes("bot")) msg.reply("im literally useless 🤡");

  // 20% chance to spam random dumb replies
  if (Math.random() < 0.2) {
    const reply = randomReplies[Math.floor(Math.random() * randomReplies.length)];
    msg.reply(reply);
  }

  // Random emoji reactions (optional chaos)
  if (Math.random() < 0.1) {
    const emojis = ["😂", "💀", "😭", "🤡", "🫣", "😎"];
    msg.react(emojis[Math.floor(Math.random() * emojis.length)]);
  }
});

client.loginBot("ut8yeavMMvciVmUcrMsNSN6Uf6ecE_EUpbRnKeUdiDdBZcz2g0GBoMUek7kuo_TX
");
