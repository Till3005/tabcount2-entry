const ANSWER: string =
  "Forty-seven open, three I can explain, and one that has been there so long it is load-bearing.";

function format(line: string): string {
  return `${line}\n`;
}

function render(line: string): void {
  process.stdout.write(format(line));
}

render(ANSWER);
