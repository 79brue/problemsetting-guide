# Subtasks and Scoring

## Main Goals

The main goals of this stage are:
- Decide whether the problem needs subtasks or partial scoring.
- If it does, design good subtasks / partial scoring, and write the scoring details clearly in the statement.

::: info Polygon checklist for this stage
- Fill the `Scoring` section of the statement, if needed.
- **Commit the changes in Polygon.**
:::

## Related Pages

* [Polygon Manual: Statement](../polygon/)
- [Common Text](../reference/common-text.md)

## Designing Subtasks

::: details What's a subtask?
A subtask is a group of tests with additional constraints that make the problem easier. Subtasks are used to give score for meaningful partial progress.
:::

Subtasks have two main purposes:

- **Differentiation**: separate contestants by score, not only by penalty.
- **Reward**: give credit to contestants who made meaningful partial progress.

A good subtask should usually correspond to a meaningful step toward the full solution. It may require a simpler version of the main idea, a useful observation, or a standard partial solution.

::: tip Prefer meaningful subtasks
A subtask is useful when passing it means the contestant understood or implemented a meaningful part of the problem.
:::

Avoid adding subtasks only because they are easy to write. If a subtask does not correspond to an interesting idea or useful partial progress, it may make the scoring feel arbitrary.

However, meaningful subtasks are not always easy to design. If it is difficult to find enough good subtasks, it is acceptable to add a small number of simple subtasks, especially when they help contestants check that they understood the statement correctly.

::: details Example: subtasks for LIS
Consider the classic longest increasing subsequence problem:
> You are given an integer sequence $a$ of length $n$. Find the length of the longest increasing subsequence.
>
> (Detailed description omitted)
> 
> * $2 \le n \le 2 \cdot 10^5$
> * $1 \le a_i \le 10^9$ ($1 \le i \le n$)

Let's assume that this task contains five subtasks as below. Which one do you think is good or bad?
* Subtask 1 ($5$ points): $a_i = 1$ ($1 \le i \le n$)
* Subtask 2 ($10$ points): $2 \le n \le 15$
* Subtask 3 ($30$ points): $2 \le n \le 2 \cdot 10^3$
* Subtask 4 ($20$ points): There are at most $100$ distinct elements in $a$.
* Subtask 5 ($35$ points): No additional constraints.

One possible evaluation is:

- Subtask 1 is relatively weak. The answer is always $1$, so it checks only a very simple observation.
- Subtask 2 is also relatively weak. It allows brute force over all subsequences, but does not require much insight into LIS.
- Subtask 3 is good. The $O(n^2)$ dynamic programming solution is a meaningful step toward the full solution.
- Subtask 4 may be reasonable, but it overlaps with Subtask 3. Keeping both may make sense only if they test meaningfully different approaches.
- Subtask 5 is the full task.

This example is subjective. The point is not that every task should have this structure, but that subtasks should be judged by whether they represent meaningful partial progress.
:::

In general, problems with subtasks usually work well with **3–5 subtasks**. There are exceptions:

- For easy problems in contests with many tasks, it may be better to use fewer subtasks or no subtasks.
- For very difficult problems, especially in a difficult contest, more subtasks may be useful. Even then, more than five subtasks is usually unnecessary.

Scores should roughly match the difficulty and implementation effort of each subtask. For easier problems, it is recommended to make each subtask score a multiple of $5$.

## Partial Scoring

Partial scoring is different from ordinary subtasks. Instead of giving score only by which test groups are passed, the score may depend on the quality or form of the output.

Partial scoring should be used rarely. It is useful when there is a natural and fair way to measure partial progress inside a single output.

Use partial scoring when:

- the score can be determined by a clear formula based on output quality;
- a partial answer has meaningful value, such as outputting only the decision part before the full construction.

::: details Examples of partial scoring
These are examples of problems that use partial scoring:

1. Counting Mushrooms (IOI 2020 Day 2): [Official Statement](https://ioinformatics.org/files/ioi2020problem5.pdf)
2. APIObike (APIO 2026): [QOJ Mirror of Official Statement](https://qoj.ac/contest/3763/problem/17643/statement/en)

You may refer to their scoring sections to see how partial scoring can be described. Note that their format may differ from ours because these are not standard input/output problems.
:::

## Writing the Scoring Section

::: details I cannot see the `Scoring` section
On the Statement tab in Polygon, check `Show section 'Scoring'` below the `Save` button.
:::

If the problem uses subtasks or partial scoring, write the scoring details in the `Scoring` section of the statement. For ordinary subtasks, use a format like this:

```
* Subtask 1 ($50$ points): $n \le 100$.
* Subtask 2 ($50$ points): No additional constraints.
```

For each subtask, make sure the score and additional constraints are clear. If the problem uses partial scoring, describe exactly how the score is computed.

You can also check [Common Text](../reference/common-text.md) for reusable scoring-section phrases.

## Before Moving On

::: tip Ready to move on when
- The scoring specifications are written clearly as intended.
- **The changes are committed on Polygon**.
:::
