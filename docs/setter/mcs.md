# Main Correct Solution

## Main Goals

The main goals of this stage are:
- Write the main correct solution for the problem.
- Check that it produces the intended outputs for the samples chosen earlier.
- Upload it to Polygon as the main correct solution.

::: info Polygon checklist for this stage
- Upload the main correct solution in Polygon, and mark it as the main correct solution.
- **Commit the changes in Polygon.**
:::

## Related Pages

- [Polygon Manual: Solutions](../polygon/)
- [Sample Tests](./samples.md)

## How to Ensure the Correctness of the Main Correct Solution

::: danger A wrong main correct solution can ruin the entire contest
Polygon generates official outputs from the main correct solution. If the main correct solution is wrong, later tests and samples may also become wrong.
:::

The main correct solution is one of the most important parts of problemsetting. It is the reference solution that Polygon uses to generate outputs for tests.

However, it is difficult to be completely sure that a solution is correct immediately after writing it. Therefore, we check the main correct solution in several stages. In this stage, only check that it produces the intended outputs for the samples chosen earlier. Later sections will test it with larger and more complicated tests.

## Instructions

In this stage, do the following:

- Write a full solution that is intended to solve the entire problem.
- Run it on the sample inputs chosen earlier, and check that it prints the intended outputs.
  - If it does not, debug the solution or recheck the sample answer.
- Upload the solution in the `Solutions` tab in Polygon, and name it as `mcs.cpp`.
- Mark it as the main correct solution.

You can read more about uploading solutions in [Polygon Manual: Solutions](../polygon/).

::: warning This is not the final correctness check
Passing the samples does not prove that the main correct solution is correct. This stage only checks basic consistency with the samples. More serious testing will happen in later sections.
:::

::: tip When finished, complete the Sample Tests section
After the main correct solution is uploaded, return to the unfinished [Sample Tests](./samples.md) section. Add the samples to Polygon and check that they render correctly in the statement.
:::

## Before Moving On

::: tip Ready to move on when
- The main correct solution is uploaded in Polygon and marked as the main correct solution.
- The main correct solution gives the intended outputs for all sample inputs.
- **The changes are committed on Polygon.**
:::