/**
 * Any mental math problem consists of two numbers and operation
 */
export type Problem = {
  title: string;
  description: string; // mini tutorial
  a: string; // code in custom language for generating random number
  b: string;
};

export type Problems = Problem[];
