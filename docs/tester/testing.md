# Testing Review

## Main Goals

The main goals of this stage are:
- Check that the official test data is strong enough for contest use.
- Write additional WA, TLE, subtask, and cheesing solutions.
- Find weaknesses in the test data through those solutions, and suggest additional tests when needed.
- Check that the time limit, memory limit, groups, points, and dependencies work as intended.

::: info Polygon checklist for this stage
- Upload additional WA, TLE, subtask, and cheesing solutions.
- Run invocations with all relevant solutions and tests.
- Investigate every solution that receives an unexpected verdict or score.
:::

## Related Pages

- [Setter Manual: Initial Tests](../setter/initial-tests.md)
- [Setter Manual: Full Test Data](../setter/full-tests.md)
- [Tester Manual: Solution Review](./solution.md)
- [Polygon Manual: Tests](../polygon/)
- [Polygon Manual: Stress](../polygon/)
- [Polygon Manual: Solutions](../polygon/)

## Writing Additional Solutions

The main way to review the test data is to write solutions that should receive different verdicts or scores.

Useful examples include:

- natural wrong approaches;
- solutions with off-by-one or overflow mistakes;
- intended subtask solutions;
- solutions with a worse time complexity;
- incorrect greedy or heuristic approaches;
- cheesing solutions that might exploit weaknesses in the test data.

Run invocations with all relevant solutions and tests. Ideally, every solution should receive its expected verdict or score in each subtask.

If a solution receives an unexpected verdict or score, investigate why. Possible reasons include:

- your expectation about the solution was wrong;
- the test data is too weak;
- the subtask constraints does not match well with the time limit;
- the checker behaves unexpectedly;
- the subtask groups, points, or dependencies are incorrect.

::: tip Think like a contestant trying to cheese the problem
Do not limit yourself to clean or intended approaches. Try solutions that exploit weak constraints, weak tests, randomized behavior, heuristics, or other shortcuts that contestants may reasonably attempt.
:::

## Finding Counterexamples

When a dangerous wrong solution passes, try to find an input where it fails.

Stress testing can be useful for finding small counterexamples. See [Polygon Manual: Stress](../polygon/) for details.

Once you find a useful counterexample, report it to the setter together with the solution it is intended to break.

::: warning Let the setter maintain the official test data
Testers should generally avoid directly adding or reorganizing official tests. The setter understands the structure and purpose of the testset best.

Instead, report the weakness and suggest a counterexample or type of test. The setter should normally decide how to incorporate it into the official test data.
:::

## Final Check

After the main test-data issues are resolved, recheck that:

- the time limit and memory limit are appropriate; see [Setter Manual: Initial Tests](../setter/initial-tests.md) for the TL/ML guidelines;
- subtask group names and points are consistent with the statement;
- group dependencies are correct;
- intended subtask solutions receive the expected scores;
- important TLE solutions do not pass reliably.

If any of these settings look suspicious, report them to the setter and rerun the relevant invocations after they are changed.

## Before Moving On

::: tip Ready to move on when
- All solutions written during testing receive the intended verdict or score.
- Important natural WA, TLE, subtask, and cheesing approaches have been tried.
- Any weaknesses found in the test data have been reported and resolved.
- TL, ML, groups, points, and dependencies have been rechecked.
:::

