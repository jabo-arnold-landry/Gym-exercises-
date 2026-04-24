function countLonelyLetters(text) {
  text = text.toLowerCase().replace(/[^a-z]/g, "");

  const counts = {};
  for (const char of text) {
    counts[char] = (counts[char] || 0) + 1;
  }

  let lonelyCount = 0;

  for (const [letter, count] of Object.entries(counts)) {
    if (count === 1) {
      const code = letter.charCodeAt(0);
      const prev = String.fromCharCode(code - 1);
      const next = String.fromCharCode(code + 1);

      const hasPrev = counts[prev] !== undefined;
      const hasNext = counts[next] !== undefined;

      if (!hasPrev && !hasNext) {
        lonelyCount++;
      }
    }
  }

  return lonelyCount;
}
