# Validator Review

## Main Goals

The main goals of this stage are:
- Check that the validator accepts exactly the inputs allowed by the statement.
- Give clear feedback when the statement and validator do not match.

::: info Polygon checklist for this stage
- Read the validator source in Polygon, and compare every statement constraint with the validator.
- Check validator tests for any complex validation logic.
:::

## Related Pages

- [Setter Manual: Validator](../setter/validator.md)
- [Setter Manual: Statement and Specification](../setter/statement.md)
- [Code Template](../reference/code-template.md)
- [Polygon Manual: Validator](../polygon/)

## Comparing the Statement and Validator

If the setter followed the manual, the validator should use the template from [Code Template](../reference/code-template.md). The template separates input reading, general constraint checks, and subtask constraint checks.

Review each part and check that:

- the input-reading code matches the `Input Format` section of the statement;
- every constraint in the `Constraints` section of the statement has a corresponding validator check;
- the validator does not enforce any constraint that is missing from the statement;
- subtask constraints are checked correctly, if the problem has subtasks.

If the validator contains complex logic, such as checking whether a graph is a tree, review that logic carefully. Also check that validator tests cover the important valid and invalid cases for that logic.

## Reporting Issues

When you find a mismatch, report it to the setter. Pinpoint the relevant parts of both the statement and the validator, and explain which inputs are accepted or rejected incorrectly.

::: warning Recheck after changes
If the setter changes either the statement or validator, compare them again. Fixing one mismatch can introduce another.
:::

## Before Moving On

::: tip Ready to move on when
- The input format in the statement is consistent with the validator.
- Every statement constraint has a corresponding validator check.
- Complex validator logic is covered by appropriate validator tests.
- All reported issues have been fixed and rechecked.
:::
