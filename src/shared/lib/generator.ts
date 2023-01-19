import compose from "compose-function";

export const lexer: (code: string) => string[] = (code) => code.split(" ");

/**
 * const n ->   takes constant and returns it, no random
 * range a b -> takes numbers and generates a <= n <= b
 *
 */

type Token = "const" | "range";

export const generate: (tokens: string[]) => number = (tokens) => {
  const operation: Token = tokens[0] as Token;

  // NOTE: Caveman way of making interpreter
  if (operation === "const") {
    return Number(tokens[1]);
  }

  if (operation === "range") {
    const min = Number(tokens[1]);
    const max = Number(tokens[2]);

    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  return -1;
};

export const interpret: (code: string) => number = compose(generate, lexer);
export const checkSyntax = (code: string) => interpret(code) !== 1;

export type Operation = "+" | "-" | "*" | "/" | "^";

export const solve = (op: Operation, a: number, b: number) => {
  if (op == "+") return a + b;
  if (op == "-") return a - b;
  if (op == "*") return a * b;
  if (op == "/") return a / b;
  if (op == "^") return a ^ b;

  return 0;
};
