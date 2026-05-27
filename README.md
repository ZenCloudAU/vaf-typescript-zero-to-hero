# VAF TypeScript Zero to Hero

A practical TypeScript learning repo for AI-native architects, vibe coders, and Velocity Architecture Academy practitioners.

This course is designed for people who can already build with AI tools but want to understand, control, debug, and productise the code.

## What TypeScript is

TypeScript is JavaScript with a safety layer. JavaScript runs in the browser and in Node.js. TypeScript lets you describe the shape of data before the code runs, so your editor and compiler can catch mistakes earlier.

Plain JavaScript:

```js
function scoreDecision(value, risk) {
  return value - risk;
}
```

TypeScript:

```ts
function scoreDecision(value: number, risk: number): number {
  return value - risk;
}
```

The second version tells the system that `value` and `risk` must be numbers, and the function returns a number.

## Course goal

By the end, you should be able to:

- Read TypeScript without panicking
- Understand variables, functions, objects, arrays, types, and interfaces
- Use Cursor or VS Code properly
- Ask AI tools better coding questions
- Debug generated code instead of blindly accepting it
- Build small decision-support tools aligned to Velocity Architecture principles

## Setup

Install Node.js LTS first, then run:

```bash
npm install
npm run lesson:01
npm run check
```

## Repo structure

```text
src/
  lessons/       Step-by-step lessons
  exercises/     Practice tasks
  solutions/     Reference answers
docs/
  cursor-vscode.md
  academy-module.md
  prompts.md
```

## Learning rule

Do not copy code blindly. For every file, answer three questions:

1. What data enters the function?
2. What decision does the function make?
3. What comes out?
