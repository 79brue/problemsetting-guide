# Checker Review

## Main Goals

The main goals of this stage are:
- Check that the selected checker is consistent with the statement.
- If a custom checker is used, check that it accepts exactly the valid outputs.
- Check that important checker logic is covered by checker tests.

::: info Polygon checklist for this stage
- Check the selected checker in Polygon.
- If a custom checker is used, read its source and run all checker tests.
:::

## Related Pages

- [Setter Manual: Checker](../setter/checker.md)
- [Setter Manual: Statement and Specification](../setter/statement.md)
- [Code Template](../reference/code-template.md)
- [Polygon Manual: Checker](../polygon/)

## Reviewing the Checker

If the problem uses a standard checker, check that the selected checker matches the output format in the statement. You may refer to [Setter Manual: Checker](../setter/checker.md) for the criteria for selecting a standard checker.

::: info Step complete for a standard checker
If the problem uses an appropriate standard checker, you may finish this stage here.
:::

If a custom checker is used, compare the statement and checker carefully. The checker should accept every output allowed by the statement and reject every invalid output.

Check that the checker:

- validates every condition required for a correct output;
- checks the end of file and rejects extra tokens after an otherwise valid output;
- does not enforce spaces or line breaks unless they are meaningful in the statement;
- handles both the jury answer and participant output correctly;
- returns `fail` when it detects that the jury answer is invalid, or when the participant output proves that the jury answer is not optimal;
- applies partial scoring correctly, if used.

## Reviewing Checker Tests

Checker tests should cover the important logic of the checker. In particular, check that they include all applicable types of checker tests listed in [Setter Manual: Checker](../setter/checker.md).

Make sure that every checker test produces the intended verdict.

## Reporting Issues

When you find an issue, report the relevant part of the statement and the corresponding checker logic. If applicable, include a small example consisting of the input, jury answer, and participant output.

::: warning Recheck after changes
If the setter changes the output format, checker, or checker tests, compare them again.
:::

## Before Moving On

::: tip Ready to move on when
- The selected checker matches the output format in the statement.
- A custom checker, if used, accepts exactly the valid outputs.
- Important checker logic is covered by checker tests, and all checker tests produce the intended verdict.
- All reported issues have been fixed and rechecked.
:::
