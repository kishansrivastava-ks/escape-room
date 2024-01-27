const phrase = [
  "Solve, Unlock, Escape - The Ultimate Challenge Awaits",
  "Crack the Code, Break the Chains",
  "In Every clue's embrace, find your Escape's Trace",
  "Escaped or not, gratitude unfolds",
  "Escaped or not, Thanks a lot",
];

document.body.style.backgroundImage = `url('img/image-${
  Math.floor(Math.random() * (4 - 0 + 1)) + 0
}.jpg')`;

const text = document.querySelector(".main");
text.textContent = phrase[Math.floor(Math.random() * (4 - 0 + 1)) + 0];
