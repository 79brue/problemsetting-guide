# Full Test Data

## Main Goals

The main goals of this stage are:
- Build the final official test data for the problem.
- Add tests that target important edge cases and common wrong approaches.
- Test the problem against additional correct, wrong, TLE, and subtask solutions.
- Recheck the time limit, memory limit, subtasks, and scoring using the full test data.

::: info Polygon checklist for this stage
- Upload additional tests in Polygon.
- Upload additional solutions, including correct, wrong, TLE, and subtask solutions when available.
- Run invocations using all relevant solutions and tests, and check that each verdict or score is as expected.
- Adjust the time limit based on the full tests.
- **Commit the changes in Polygon.**
:::

## Related Pages

- [Polygon Manual: Tests](../polygon/)
- [Polygon Manual: Stress](../polygon/)
- [Polygon Manual: Solutions](../polygon/)
- [Initial Tests](./initial-tests.md)
- [Subtasks and Scoring](./subtasks.md)

## Purpose of Full Test Data

Initial tests are mainly for checking that the basic package works. Full test data has a different purpose: it should make the official tests strong enough for contest use.

In this stage, actively search for weaknesses in the tests. Think about wrong solutions that contestants may write, TLE solutions that may barely pass weak data, and subtask solutions that may accidentally receive too much score.

The goal is not to prove that no wrong solution can ever pass. That is impossible. The goal is to make the test data strong against common, natural, and dangerous wrong approaches.

## Building Strong Tests

Strong tests should be designed with intent. Do not rely only on random generators. Some useful test types include:

- maximum-size tests;
- boundary tests with minimum and maximum values;
- tests targeting common implementation mistakes or off-by-one errors;
- adversarial cases for greedy, local, or heuristic approaches;
- tests with special structures that make certain wrong approaches fail or exceed the time limit;

Note that you should consider strong tests for each subtask, if the problem has any.

::: tip Start from possible cheese solutions
Actively think about approaches that could cheese the problem. What weaknesses might the intended solution or test data have? What input would expose those weaknesses?
:::

As you add tests, also add solutions that should receive different verdicts or scores. Each time you add important tests or solutions, run invocations with all relevant tests and solutions, and check whether the results are expected. Useful solution files include:

- additional correct solutions;
- wrong/TLE solutions;
- intended subtask solutions;
- cheesing approaches that are difficult to distinguish.

Make sure each solution receives the intended score or verdict.

::: warning Do not only test accepted solutions
Accepted solutions show that the problem is solvable. Wrong, TLE, and subtask solutions show whether the tests distinguish solution quality correctly.
:::

## Stress Testing

Stress testing is an efficient way to find counterexamples for specific source codes, or to gain additional confidence that the main correct solution is correct.

The default stress testing system in Polygon is slow, so we do not recommend relying on it. Instead, we encourage running stress tests locally. You can find more information in [Polygon Manual: Stress](../polygon/).

## Reducing the Test Set

After you are confident that the tests are strong, check whether the test set has too many tests.

More tests can make the test data stronger, but they also increase judging time. You should balance strength and judging cost. In general, you do not need multiple tests that serve the same purpose. Repeating tests with the same parameters and only a different random seed is usually not useful.

Below is a rough guideline for the maximum number of tests depending on the difficulty of the problem. This is not an absolute rule.

| Difficulty | Maximum number of tests |
| ---------- | ----------------------- |
| 800–1500   | 30                      |
| 1500–2500  | 50                      |
| 2500–3000  | 70                      |
| 3000+      | 100                     |

::: tip Keep intentional redundancy, remove accidental redundancy
It is fine to keep multiple tests for the same idea if they stress meaningfully different cases. Remove tests that only repeat the same purpose without adding coverage.
:::

## Rechecking TL and ML

After the full tests are added, recheck the time limit and memory limit.

Since the full tests are stronger than the initial tests, the main correct solution's runtime may increase. Follow the same criteria from the previous section:

Since you added stronger tests, it is highly likely that the main correct solution's runtime has increased. You should follow the same criteria from the previous section:
- Unless there are special circumstances, the time limit should be at least **3x** the runtime of the fastest unoptimized accepted solution.
- Do not use an overly optimized implementation (e.g. solutions using `#pragma`) as the baseline.
- Unless a low memory limit is important for the problem, set the memory limit to `1024 MB`.

::: warning This is not the final platform TL
After exporting, you may need to adjust the time limit based on the runtimes of solutions on the contest website. Different platforms can have significantly different execution speeds.
:::

## Rechecking Scoring

If the problem has subtasks or partial scoring, recheck the scoring after adding the full tests. Check that:

- each test belongs to the correct group;
- each subtask has the intended score;
- group dependencies match the logical containment between subtasks;
- subtask solutions receive the intended scores;
- partial scoring behaves as intended, if used.

## Before Moving On

::: tip Ready to move on when
- All intended tests are added in Polygon.
- Additional solutions with varying verdicts or scores are added.
- All solutions receive the intended verdict or score.
- The test set is strong but not unnecessarily large.
- TL, ML, groups, points, and dependencies are rechecked.
- **The changes are committed on Polygon.**
:::