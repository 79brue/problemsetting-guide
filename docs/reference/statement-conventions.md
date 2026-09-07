# Statement Conventions

This page lists the formatting and style conventions used in M(IT)^2 problem statements.

## Default Choices

### Indexing

Use $1$-based indexing by default, unless there is a good reason to use another indexing convention.

### Modulus

If a problem asks for the answer modulo a number, use $998\,244\,353$ by default.

Exceptions include:

- If the intended solution requires a particular modulus or a modulus with specific mathematical properties, use an appropriate modulus.
- If the problem requires a significantly smaller or larger modulus, use the smallest prime greater than $10^k$ for an appropriate $k$.
  - Example: $100\,003$ (`$100\,003$`).

## Names and Identifiers

### Characters

- If you need a character, use the name `Busy Beaver`.
- If you need additional characters, name them in the same style: an adjective followed by an animal.

### Mathematical Objects

- Use lowercase Latin letters for ordinary variables and mathematical objects.
- Reserve uppercase Latin letters for sets and graphs.
- Write mathematical variable names in math mode.
  - Examples: sequence $a$, set $S$, graph $G$, vertices $u$ and $v$.
- Do not use both the uppercase and lowercase forms of the same letter for different objects in the same problem.
  - For example, avoid using both $G$ and $g$ for unrelated objects.

## Mathematical Formatting

### Numbers in Math Mode

- Write numbers in math mode when they are written as digits.
- The main exception is when a number is used only as an identifier or label, such as `Subtask 1`, `Sample 2`, or `Step 4`.
- If a number is spelled out as a word, such as `three`, this rule does not apply.

### Sequences and Ellipses

- When listing a sequence, write the first two elements, an ellipsis (`\dots`), and the last element.
  - Example: $a_1, a_2, \dots, a_n$ (`$a_1, a_2, \dots, a_n$`).
- In mathematical expressions, use `\dots` rather than `\cdots`, `\ldots`, or three periods (`...`).

### Multiplication

- Use $\cdot$ (`$\cdot$`) instead of $\times$ for multiplication.
  - Example: $2 \cdot 10^5$ (`$2 \cdot 10^5$`).
- Omit the multiplication symbol when multiplication is naturally written by juxtaposition.
  - Example: $2n$, not $2 \cdot n$.

### Large Numbers

For integers at least $1\,000$:

- If the number has at most two significant digits and is naturally expressed using a power of $10$, use scientific notation.
- Otherwise, write all digits and group them by three from the right using `\,`.

Examples:

- $10^9$ (`$10^9$`)
- $1.5 \cdot 10^5$ (`$1.5 \cdot 10^5$`)
- $998\,244\,353$ (`$998\,244\,353$`)
- $100\,003$ (`$100\,003$`)

## Literal Strings and Characters

Use monospace text for literal strings and characters by using `\texttt{}`.

Examples:

- Print `Yes` or `No`. (`Print \texttt{Yes} or \texttt{No}.`)
- The string consists only of `0` and `1`. (`The string consists only of \texttt{0} and \texttt{1}.`)
