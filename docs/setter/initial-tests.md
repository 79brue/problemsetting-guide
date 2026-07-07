# Initial Tests

## Main Goals

The main goals of this stage are:
- Add exhaustive small tests, if feasible.
- Add random tests that cover large input ranges.
- Write a naive solution, if possible, and compare it with the main correct solution.

::: info Polygon checklist for this stage
- Add exhaustive small tests and random tests, if feasible.
- Upload a naive solution, if possible, and run invocations to compare the main correct solution with the naive solution on feasible tests.
- Assign groups and points for tests appropriately.
- If the problem has subtasks, assign group names, points, and dependencies appropriately.
- Adjust the time and memory limit based on the invocation result.
- **Commit the changes in Polygon.**
:::

## Related Pages

- [Polygon Manual: Tests](../polygon/)
- [Polygon Manual: Solutions](../polygon/)
- [Main Correct Solution](./mcs.md)
- [Sample Tests](./samples.md)

## Test Generation Plan

In this manual, we will make tests in two stages:
* Initial tests: focus on validating that the main correct solution is almost correct, and the test captures trivially wrong codes
* Full tests: focus on sniping codes with difficult-to-find mistakes, and making the tests strong.

::: tip 
There could be problems where this plan does not make sense. In that case, adjust to a plan matching to your problem, referring to this and the next documents in this manual.
:::

In this phase, you will make a set of weak tests to validate your main correct solution, and estimate the running time and memory. These are not meant to be the final strong tests.

## Write a Naive code

Before generating many tests, it is extremely useful to write a naive solution. Here, a naive solution means a solution that is easier to trust than the main correct solution, but only works for small or restricted inputs because of time or memory limits.

If the problem has subtasks, choose the target subtask carefully. Prefer a subtask whose restriction is mainly about input size, such as $n \le 100$, rather than a subtask that restricts a different aspect of the input, such as $1 \le a_i \le 100$. Also prefer a subtask with a simple implementation where you are unlikely to make mistakes.

When the naive solution is ready, upload it in the `Solutions` tab in Polygon. Make sure to follow the solution filename rule, including starting the filename with your identifier.

You can read more about uploading solutions and filename rules in [Polygon Manual: Solutions](../polygon/).

## Exhaustive Small Tests

::: tip Tests tab settings
If your problem has subtasks, make sure that you check the following boxes in the `Tests` tab:

- `Enable groups`
- `Enable points`
  - If you use partial scoring, after checking this box, click `More options` and select `Treat points from checker as a percent`.
:::

Start by adding exhaustive small tests for each subtask where this is feasible.

Choose small bounds for the input parameters, and try to include all possible inputs within those bounds.

::: details Example of an exhaustive test
Assume that each test case has the following input format:

- An integer $n$, where $2 \le n \le 2 \cdot 10^5$.
- An integer sequence $a$ of length $n$, where $1 \le a_i \le 10^9$ for all $1 \le i \le n$.

A reasonable exhaustive test may contain all possible test cases under the following limited bounds:

- $2 \le n \le 5$
- $1 \le a_i \le 5$

There will be $3\,900$ possible test cases satisfying these limited bounds. You should double-check that the generated test data still satisfies global constraints such as:

1. the number of test cases $t$;
2. the sum of $n$ over all test cases.
:::

For some subtasks, a small exhaustive test would only contain the tests from the previous subtasks. In this case, you do not have to make one.

For some subtasks, a small exhaustive test would only repeat tests already covered by an earlier subtask. In that case, you do not need to add another exhaustive test.

::: details Which subtasks need exhaustive small tests?
Consider the classic longest increasing subsequence problem, as in [Subtasks and Scoring](./subtasks.md):

> You are given an integer sequence $a$ of length $n$. Find the length of the longest increasing subsequence.
>
> Constraints:
> - $2 \le n \le 2 \cdot 10^5$
> - $1 \le a_i \le 10^9$ for all $1 \le i \le n$

Suppose the task has the following subtasks:

- Subtask 1 ($5$ points): $a_i = 1$ for all $1 \le i \le n$.
- Subtask 2 ($10$ points): $2 \le n \le 15$.
- Subtask 3 ($30$ points): $2 \le n \le 2 \cdot 10^3$.
- Subtask 4 ($20$ points): There are at most $100$ distinct elements in $a$.
- Subtask 5 ($35$ points): No additional constraints.

One possible choice is to add exhaustive small tests for subtasks 1 and 2. For subtask 1, we can test several small values of $n$. For subtask 2, we can test small values of $n$ and $a_i$.

For later subtasks, the same small exhaustive tests would mostly repeat subtask 2. In this example, subtask 2 is already contained in subtasks 3, 4, and 5 through dependencies, so another small exhaustive test is usually unnecessary.
:::

Refer to [Polygon Manual: Tests](../polygon/) for the technical details of adding tests with generators. After adding these tests, run an invocation containing all relevant solutions and tests, and check whether the results are expected.

## Random Tests

Next, add a few random tests for each subtask.

The meaning of "random" depends on the problem. Some useful principles are:

- Maximize the input size, such as the length of a sequence or the number of vertices in a graph.
- Randomize parts of the input that do not directly affect input size, such as element values or graph structure.
- Use several distributions if the problem has meaningfully different input shapes.

One important goal is to check that the main correct solution and the naive solution produce the same output on the tests that the naive solution can handle. Another goal is to estimate the runtime and memory usage of the main correct solution.

::: warning Initial runtime is not the final time limit
Use this stage to get a preliminary sense of runtime. The final time limit should be checked again after full tests are added.
:::

Refer to [Polygon Manual: Tests](../polygon/) for the technical details of adding tests with generators. After adding these tests, run an invocation containing all relevant solutions and tests, and check whether the results are expected.

::: tip Set a preliminary TL and ML
If the initial tests run as expected, set a preliminary time limit and memory limit for the problem.

- Unless there are special circumstances, the time limit should be at least **3x** the runtime of the fastest unoptimized accepted solution.
- Do not use an overly optimized implementation (e.g. solutions using `#pragma`) as the baseline.
- Unless a low memory limit is important for the problem, set the memory limit to `1024 MB`.

This is not the final TL/ML check. Revisit the limits after full tests and additional correct solutions are added.
:::

## Setting Groups and Points (Subtask Problems only)

At this point, you should have samples and at least one test for each subtask. If the problem uses subtasks, set the Polygon group and point settings appropriately in the `Tests` tab.

The detailed Polygon instructions belong in [Polygon Manual: Tests](../polygon/), but the important conventions are:

- For samples, set the group name to `sample`.
- For other tests, set the group name to `subX`, where `X` is the subtask number.
- Assign the corresponding subtask score to one test in each subtask group.
- Set each group points policy to `COMPLETE_GROUP`, and each feedback policy to `COMPLETE`.
- Add dependencies between subtasks. If every input satisfying subtask A also satisfies subtask B, add subtask A as a dependency of subtask B. Do **not** consider samples when setting dependencies.

After all settings are done, run an invocation with all relevant solutions and tests, and check whether the subtask results are expected.

## Before Moving On

::: tip Ready to move on when
- A naive solution is written, if feasible.
- Exhaustive small tests and random tests are added, if feasible.
- The main correct solution and the naive solution produce the same outputs on feasible tests.
- Tests have correct group names, points, and dependencies, if the problem uses subtasks.
- The main correct solution's runtime has been checked preliminarily, and the TL was accordingly adjusted.
- **The changes are committed on Polygon.**
:::