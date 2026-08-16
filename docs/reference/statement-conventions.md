# Statement Conventions

This page lists the formatting and style conventions used in M(IT)^2 problem statements.

## Names and Flavortext

- If you need a character, use the name `Busy Beaver`.
- If you need additional characters, name them in the same style: an adjective followed by an animal.

## Mathematical Notation

- Write numbers in math mode when they are written as digits. This also applies to numbers in sample explanations.
  - If a number is spelled out as a word, this does not apply.
- Use lowercase Latin letters for variables. Use uppercase letters for sets and graphs.
- When listing a sequence, write the first two elements, an ellipsis (`\dots`), and the last element.
  - Example: $a_1, a_2, \dots, a_n$.
- Use the same notation and capitalization consistently throughout the statement.

## Numbers

For large numbers:

- If the number is at least $1\,000$, and it can be written naturally with at most two nonzero leading digits followed by zeros, use scientific notation.
- Otherwise, write all digits and group them by three from the right using `\,`.

Examples:

- $10^9$
- $1.5 \cdot 10^5$
- $998\,244\,353$

## Standard Choices

If a problem asks for the answer modulo a number, use $998\,244\,353$ by default.

Exceptions include:

- If the solution works only for a specific modulus, use that modulus.
- If the problem requires a significantly smaller or larger modulus, use the smallest prime greater than $10^k$ for an appropriate $k$.
  - Example: $100\,003$.
