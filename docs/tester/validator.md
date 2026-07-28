# Validator Review

## Main Goals

The main goals of this stage are:
- Check that the validator accepts exactly the inputs allowed by the statement.
- Check that the validator is easy to read and follows the official template.
- Write validator tests that target the fragile parts of the validator.
- Give clear feedback when the statement and validator do not match.

::: info Polygon checklist for this stage
- Read the validator source in Polygon.
- Compare every statement constraint with the validator.
- Add validator tests for important validator logic.
- Run all validator tests and check that the results are as expected.
- Send any issues to the setter.
:::

## Related Pages

- [Setter Manual: Validator](../setter/validator.md)
- [Setter Manual: Statement and Specification](../setter/statement.md)
- [Code Template](../reference/code-template.md)
- [Polygon Manual: Validator](../polygon/)

## Comparing the Statement and Validator

The statement and validator should describe exactly the same set of valid inputs.

Read the constraints in the statement one by one, and find the corresponding check in the validator. Do not check only simple variable bounds. Structural and global constraints are often more important.

Examples include:

- whether a graph is connected or forms a tree;
- whether self-loops or multiple edges are allowed;
- whether values are distinct or form a permutation;
- whether intervals overlap;
- whether an array is sorted;
- whether the sum of a variable over all test cases is bounded;
- whether each test satisfies its assigned subtask constraints.

::: danger Check both directions
Look for both kinds of mismatch:

- The statement allows an input, but the validator rejects it.
- The statement forbids an input, but the validator accepts it.
:::

If the intended solution relies on a condition that is not written in the statement, report it. The condition should either be added to the statement and validator, or removed from the solution's assumptions.

## Reviewing Readability

The validator should use the official validator template and follow its style.

Another committee member should be able to read the validator and identify which code checks each statement constraint.

Check that:

- the official template is used;
- each important constraint check is easy to locate;
- complicated logic is separated into understandable parts;
- names and comments make the intended checks clear;
- subtask-specific validation is easy to distinguish.

::: tip Readability is part of validator safety
An unreadable validator is difficult to review, even when it happens to be correct.
:::

If the code is difficult to follow, ask the setter to simplify it before approving the validator.

## Writing Validator Tests

Validator tests provide additional evidence that the validator behaves as intended.

Focus on constraints with nontrivial logic. Examples include:

- a disconnected graph that should be connected;
- a graph with a cycle when the input should be a tree;
- duplicated edges or values;
- an array that is almost a permutation;
- intervals that overlap at one endpoint;
- a global sum that exceeds the limit by one;
- a test that satisfies the global constraints but violates its assigned subtask.

::: tip Test near the valid boundary
Useful invalid tests are often almost valid. Change one condition in a valid input and check that the validator rejects it.
:::

You may also test simple range constraints, but they usually need less attention than structural constraints. Avoid creating very large validator tests only to check a simple upper bound.

After adding validator tests, run all of them and confirm that every valid test is accepted and every invalid test is rejected.

## Reporting Issues

When you find a mismatch, report it precisely.

Useful formats include:

- “The statement allows this input, but the validator rejects it.”
- “The statement requires this condition, but the validator does not check it.”
- “This subtask test satisfies the global constraints but violates the subtask constraint.”
- “This validator test should be rejected, but it is accepted.”

Include the relevant statement text, validator code, and a small counterexample whenever possible.

::: warning Recheck after changes
If the setter changes either the statement or validator, compare them again. Fixing one mismatch can introduce another.
:::

## Before Moving On

::: tip Ready to move on when
- Every statement constraint has a corresponding validator check.
- The validator does not enforce any unstated constraint.
- The official validator template is used and the code is easy to review.
- Important structural and subtask constraints are covered by validator tests.
- All validator tests produce the expected result.
- All reported issues have been fixed and rechecked.
:::
