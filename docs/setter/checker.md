# Checker

## Main Goals

The main goals of this stage are:
- Decide whether the problem can use a standard checker or needs a custom checker.
- If a custom checker is needed, write a checker that accepts exactly the valid outputs.
- Write checker tests that rigorously test the important logic of the checker.

::: info Polygon checklist for this stage
- If a standard checker is applicable, select the appropriate checker in Polygon.
- If the problem needs a custom checker:
  - Upload the checker in Polygon.
  - Write checker tests, and check that the checker passes all checker tests.
- **Commit the changes in Polygon.**
:::

## Related Pages

- [Polygon Manual: Checker](../polygon/)
- [Code Template](../reference/code-template.md)
- [Sample Tests](./samples.md)

## Choosing the Checker Type

Most problems do not need a custom checker. Use the simplest standard checker that correctly matches the statement.

For problems with a unique output, ignoring whitespace,
* Use `ncmp.cpp` for problems that output single or more `int64` (`long long`) integers.
* Use `wcmp.cpp` for problems that has a unique possible output, ignoring whitespaces, but does not fit above.

For problems with more than one possible output, ignoring whitespace,
- Use `nyesno.cpp` if the output consists only of `Yes`/`No` answers and case should be ignored.
* Use one of the standard real-number checkers such as `rcmp4.cpp`, `rcmp6.cpp`, or `rcmp9.cpp`. When possible, choose the problem's allowed error so that one of these standard checkers can be used.

A custom checker is usually needed when:

- there are multiple valid outputs;
- the problem has an interactive or special output format;
- the problem uses **partial scoring**.

::: tip Use a standard checker if you can
Standard checkers have already been used and tested many times. If a standard checker exactly matches the statement, it is usually safer than writing a custom checker.
:::

If you decide to use a standard checker, this stage is complete after selecting the checker in Polygon and committing the changes.

## Writing a Custom Checker

If you decide to use a custom checker, implement it using the template in [Code Template](../reference/code-template.md).

For technical details about checker implementation and Polygon usage, see [Polygon Manual: Checker](../polygon/).

A custom checker should accept exactly the outputs allowed by the statement. It should not require the contestant's output to match the main correct solution's output unless the output is actually unique.

::: danger Checker mistakes are critical
If the checker accepts invalid outputs, wrong submissions may pass. If it rejects valid outputs, correct submissions may fail.
:::

Some important rules are:

- Do not validate the input in the checker.
  - Instead of `inf.readInt(2, 100'000, "n")`, use `inf.readInt()`.
  - Do not use `inf.readSpace()` or `inf.readEoln()`.
- Always set limits when reading from `ouf` or `ans`.
- Do not check whitespace unless the statement really makes whitespace meaningful.
- For `ouf` and `ans`, check the end of file using `stream.seekEof()`.
- Use the `readAns` paradigm from the code template.
- Return the `fail` verdict when the checker decides that the jury answer is wrong.

## Checker Tests

For custom checkers, add checker tests to make sure the checker behaves as intended.

You should aim to test all important logic in the checker.

- Include tests for all relevant verdicts: `ok`, `wa`, and `fail`.
- For `wa` and `fail`, include outputs that cover the important failure conditions in the statement.
- Include a test where the contestant output has extra tokens after an otherwise valid output.
- If there are multiple valid outputs, include a valid output different from the main correct solution's output.

## Before Moving On

::: tip Ready to move on when
- You selected a standard checker that is consistent with the statement, or
- You wrote a custom checker, uploaded it to Polygon, and confirmed that it passes all checker tests.
- **The changes are committed on Polygon.**
:::
