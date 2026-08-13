# Testing Review

## Main Goals

The main goals of this stage are:
- Check that the official test data is strong enough for contest use.
- Write additional WA, TLE, subtask, and cheesing solutions.
- Add tests that distinguish those solutions from correct solutions.
- Check that the time limit, memory limit, groups, points, and dependencies work as intended.

::: info Polygon checklist for this stage
- Review all current tests and generators.
- Upload additional WA, TLE, subtask, and cheesing solutions.
- Run invocations with all relevant solutions and tests.
- Add tests for solutions that receive an unintended verdict or score.
- Recheck TL, ML, groups, points, and dependencies.
:::

## Related Pages

- [Setter Manual: Initial Tests](../setter/initial-tests.md)
- [Setter Manual: Full Test Data](../setter/full-tests.md)
- [Tester Manual: Solution Review](./solution.md)
- [Polygon Manual: Tests](../polygon/)
- [Polygon Manual: Stress](../polygon/)
- [Polygon Manual: Solutions](../polygon/)

## Reviewing the Test Data

Review the current tests and think about what each test is intended to cover.

Check whether the test data contains:

- important boundary and corner cases;
- maximum-size inputs;
- cases for every subtask;
- cases targeting common implementation mistakes;
- cases targeting incorrect greedy, heuristic, or simplified approaches;
- cases that stress the intended time complexity.

Do not judge test quality only by the number or size of tests. A small targeted test may be more useful than many large random tests.

::: tip Start from possible wrong solutions
Think about what a contestant might implement incorrectly, then construct an input where that approach fails.
:::

## Writing Additional Solutions

Write solutions that should receive different verdicts or scores.

Useful examples include:

- natural wrong approaches;
- solutions with off-by-one or overflow mistakes;
- intended subtask solutions;
- solutions with a worse time complexity;
- greedy or heuristic approaches;
- cheesing solutions that exploit weaknesses in the test data.

Run invocations with all relevant solutions and tests.

The expected behavior is:

- all correct solutions are accepted;
- WA solutions fail;
- TLE solutions exceed the time limit on relevant tests;
- subtask solutions receive the intended scores.

::: warning Investigate every unexpected result
If a solution receives an unintended verdict or score, determine whether the problem is in the solution, test data, checker, grouping, or limits.
:::

## Adding and Improving Tests

When a dangerous wrong solution passes, find a counterexample and add it to the official tests.

Stress testing is useful for finding small counterexamples. Once a useful counterexample is found, preserve it as a deterministic official test when possible.

Avoid adding many tests with the same purpose. Prefer a smaller set of intentional tests that collectively cover the important risks.

## Rechecking Limits and Scoring

Use the full test data to recheck:

- the time limit and memory limit;
- subtask group names and points;
- group dependencies;
- partial-scoring behavior, if used;
- the scores of intended subtask solutions.

Correct solutions should have a safe runtime margin, while intended TLE solutions should not pass reliably.

## Reporting Issues

When you find an issue, report:

- the affected solution;
- its actual and intended verdict or score;
- the test or missing case that causes the issue;
- the proposed test or configuration change.

After the setter makes changes, rerun the relevant invocations.

## Before Moving On

::: tip Ready to move on when
- All correct solutions are accepted on all tests.
- Important WA and cheesing solutions fail.
- TLE solutions exceed the time limit on relevant tests.
- Subtask solutions receive the intended scores.
- TL, ML, groups, points, and dependencies have been rechecked.
- All reported issues have been fixed and verified.
:::
