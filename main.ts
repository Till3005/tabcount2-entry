const ANSWER =
  "Forty-seven open, three I can explain, and one that has been there so long it is load-bearing.";

const format = (line: string) => `${line}\n`;
const render = (line: string) => process.stdout.write(format(line));

render(ANSWER);
