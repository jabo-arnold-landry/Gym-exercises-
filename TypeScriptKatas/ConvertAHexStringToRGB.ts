function hexStringToRGB(hexString: string): {
  r: number;
  g: number;
  b: number;
} {
  if (hexString.length < 6) throw new Error("the decimal is not compatible");

  hexString = hexString.replace(/\W/gim, "");

  const [r, g, b] = [0, 2, 4].map((i) =>
    parseInt(hexString.substring(i, i + 2), 16),
  );

  return { r, g, b } as {
    r: number;
    g: number;
    b: number;
  };
}

console.log(hexStringToRGB("#FF9933"));
