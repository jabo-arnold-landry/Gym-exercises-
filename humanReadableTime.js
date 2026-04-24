function humanReadable(seconds) {
  const hours = `${Math.floor(seconds / 3600)}`;
  const hRemainders = seconds % 3600;
  const minutes = Math.floor(hRemainders / 60).toString();
  const second = `${hRemainders % 60}`;
  return `${hours.padStart(2, "0")}:${minutes.padStart(2, "0")}:${second.padStart(2, "0")}`;
}
