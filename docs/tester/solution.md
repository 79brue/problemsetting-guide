# Solution Review

## Main Goals

The main goals of this stage are:
- Independently solve the problem and write another correct solution.
- Check that the tester's solution and the main correct solution produce the same outputs.
- Report any disagreement or suspicious behavior to the setter.

::: info Polygon checklist for this stage
- Upload an independently written correct solution in Polygon.
- Run an invocation with the tester's solution, the main correct solution, and all current tests.
- Investigate every unexpected difference in verdict or output.
:::

## Related Pages

- [Setter Manual: Main Correct Solution](../setter/mcs.md)
- [Setter Manual: Initial Tests](../setter/initial-tests.md)
- [Setter Manual: Full Test Data](../setter/full-tests.md)
- [Polygon Manual: Solutions](../polygon/)

## Writing an Independent Solution

Solve the problem independently before relying on the setter's solution.

The tester's solution may use the intended algorithm or a different correct algorithm. The important point is that it should be written independently, so that it provides additional evidence that the problem and main correct solution are correct.

::: warning Do not review the main correct solution as source code
In our workflow, solutions are treated as black boxes. Do not validate the setter's solution by reading its implementation. Instead, write an independent solution and compare their behavior through tests.
:::

Before implementing, check that:

- your interpretation matches the statement;
- the algorithm is correct;
- the time and memory complexity fit the constraints.

Upload the solution in the `Solutions` tab in Polygon, following the solution filename rules.

## Comparing Solutions

Run an invocation containing:

- the main correct solution;
- the tester's independent solution;
- all current tests.

Both correct solutions should pass all tests and produce outputs accepted by the checker.

If the two solutions disagree, investigate immediately. Possible causes include:

- one of the solutions is wrong;
- the statement is ambiguous;
- the checker accepts or rejects an output incorrectly;
- a test is invalid;
- the main correct solution generated a wrong jury answer.

::: danger Never ignore a disagreement
A disagreement between independently written correct solutions is evidence of a serious unresolved issue.
:::

If the current tests do not distinguish the two solutions, create or find a small input where their behavior differs. Stress testing or exhaustive small tests may help.

## Additional Solutions

If useful, write more than one independent solution.

Examples include:

- a second full solution using a different algorithm;
- a naive solution for small inputs;
- a slower but simple correct solution;
- intended subtask solutions.

Independent solutions using different ideas provide stronger evidence than several implementations of the same algorithm.

However, this stage does not require writing every wrong or TLE solution. Those are handled mainly in the testing stage.

## Reporting Issues

When you find a disagreement, report:

- the input where it occurs;
- the output or verdict of each solution;
- your current interpretation of the statement;
- any suspected cause.

After the setter makes changes, rerun the relevant invocation.

## Before Moving On

::: tip Ready to move on when
- An independently written full solution is uploaded in Polygon.
- The tester's solution and the main correct solution agree on all current tests.
- Any disagreement has been investigated and resolved.
- The tester understands why the algorithm is correct and fits the constraints.
:::
