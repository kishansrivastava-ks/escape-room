const phrase = [
  "Solve, Unlock, Escape - The Ultimate Challenge Awaits",
  "Crack the Code, Break the Chains",
  "In Every clue's embbrace, find your Escape's Trace",
  "Escaped or not, gratitude unfolds",
  "Escaped or not, Thanks a lot",
];

document.body.style.backgroundImage = `url('img/image-${
  Math.floor(Math.random() * (5 - 1 + 1)) + 1
}.jpg')`;

const text = document.querySelector(".main");
text.textContent = phrase[Math.floor(Math.random() * (5 - 1 + 1)) + 1];
