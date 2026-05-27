# Cursor and VS Code Operating Model

## Use VS Code for fundamentals

VS Code is the clean baseline. Use it when you want to learn what is happening without too much AI intervention.

Recommended first workflow:

1. Open the folder.
2. Open the integrated terminal.
3. Run `npm install`.
4. Run `npm run lesson:01`.
5. Run `npm run check`.
6. Break one line intentionally and observe the error.

## Use Cursor for acceleration

Cursor is useful once you know what question to ask.

Good Cursor prompts:

```text
Explain this TypeScript file line by line. Do not rewrite it yet.
```

```text
Find the type error and explain why TypeScript is complaining.
```

```text
Refactor this function but preserve the input and output contract.
```

```text
Add one exercise that teaches interfaces using a Velocity Architecture example.
```

Bad Cursor prompts:

```text
Make this better.
```

```text
Fix everything.
```

```text
Build me a platform.
```

## Working rule

Use AI as a senior pair programmer, not as an autopilot.

Before accepting a change, ask:

- Did the file get simpler?
- Did the types become clearer?
- Did the function contract stay stable?
- Can I explain the change in plain English?
