# Statement and Specification

## Main Goals

The main goals of this stage are:
- Write a problem statement that is clear, complete, and easy to understand.
- Make sure the written statement matches the intended problem exactly.
- List all specifications needed by the statement, validator, checker, tests, and solutions.

::: info Polygon checklist for this stage
- Create the problem in Polygon, and add the problem to the contest.
- Add an English statement, and fill the `Name`, `Legend`, `Input format`, and `Output format` sections.
- **Commit the changes in Polygon.**
:::

## Related Pages
* [Polygon Manual: Add a problem to contest](../polygon/)
* [Polygon Manual: Statement](../polygon/)
* [Statement Conventions](../reference/statement-conventions.md)
* [Common Text](../reference/common-text.md)

## Writing the Statement

::: danger Statement error can be very dangerous! 
If the statement describes a different problem from the intended solution, the problem may become invalid. If the statement is ambiguous, contestants may be forced to guess the intended interpretation, which can make the contest unfair even if the intended solution is correct.
:::

When writing the statement, make sure that the task is described clearly and accurately. A contestant should be able to understand what they need to compute or output using only the written statement. After writing it, ask another problems committee member, preferably one of the testers, or one of the problem directors to proofread it.

Flavortext is welcome when it helps explain the situation or makes the statement more pleasant to read. Remove or shorten it when it makes the task harder to understand.

::: tip Check the rendered statement
In the statement page, you may click `In HTML` or `In PDF` to see the rendered statement. Make sure to check them and see if the statement is rendered as intended.
:::

## Specifications and Constraints

::: warning Write all necessary specifications
The statement should contain all information needed to judge submissions correctly, including input/output format, constraints, and variables.
:::

Some specifications are easy to forget.
* For graph problems, make sure the statement says whether the graph is directed or undirected, whether it is connected, and whether self-loops or multiple edges are allowed.
* For constructive or output-flexible problems, clearly state whether any valid answer may be printed, and what should be printed if no answer exists.

::: tip Constraints should also be friendly to contestants
If a boundary case only creates boring implementation work and does not meaningfully contribute to the intended difficulty of the problem, consider excluding it by constraints. For example, if the case $n = 1$ requires special handling but does not add any interesting idea, it may be better to set the lower bound to $n \ge 2$.
:::

## References and Reusable Text
For consistency, follow the [statement conventions](../reference/statement-conventions.md) before finalizing the statement.

For common statement phrases, see [Common Text](../reference/common-text.md) and copy the phrasing when appropriate. Do not copy reference text blindly; modify it when the problem has a special condition, output format, or edge case.

## Before Moving On

::: tip Ready to move on when
- The task is unambiguous and matches the intended problem.
- All necessary specifications are written.
- The official solution solves exactly the problem described in the statement.
- The statement is well rendered as intended.
- **The changes are committed on Polygon.**
:::