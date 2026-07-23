# Statement Review

## Main Goals

The main goals of this stage are:
- Check that the statement can be understood without additional explanation from the setter.
- Find ambiguities, missing specifications, contradictions, and misleading examples.
- Give clear and actionable feedback to the setter.

::: info Polygon checklist for this stage
- Read the current English statement in Polygon.
:::

## Related Pages

- [Setter Manual: Statement and Specification](../setter/statement.md)
- [Setter Manual: Subtasks and Scoring](../setter/subtasks.md)
- [Statement Conventions](../reference/statement-conventions.md)
- [Common Text](../reference/common-text.md)

## Read the Statement Independently

Read the statement as if you were a contestant seeing the problem for the first time. Do not rely on explanations from the setter, the main correct solution, the validator, or the checker.

If you find a part ambiguous and want to ask the setter for clarification, contestants are also likely to find it ambiguous. Before asking, record:

- the exact section;
- the possible interpretations;
- which interpretation you initially understood;
- what change would remove the ambiguity.

If the statement is unambiguous but difficult to read, think about how its readability could be improved.

## Checking Well-Definedness

Even when the main concept seems clear, search for details that may leave the problem ill-defined. In particular, check that:

- the input and output formats are clear;
- all variables and objects are defined before they are used;
- all necessary constraints are written and consistent;
- impossible cases, multiple valid outputs, and tie-breaking rules are specified when relevant;
- subtask constraints and partial-scoring rules are clear, if used.

::: details Commonly missed specifications
Examples include:

- whether a graph is directed, connected, simple, or weighted;
- whether a graph may contain self-loops or multiple edges;
- whether indices are 0-based or 1-based;
- whether intervals are inclusive or exclusive;
- whether values may repeat;
- whether an answer always exists;
- what to print when no answer exists;
- whether any valid construction may be printed;
- the allowed error for real-number outputs.
:::

Also check notation, grammar, and formatting. These issues are usually less severe than ambiguity or missing constraints, but fixing them improves the contestant experience.

## Reporting Issues

After reading the statement, send your feedback to the setter. The feedback should make each issue easy to understand and fix. For each issue, we recommend including:

- where the issue appears;
- why it is unclear or incorrect;
- how serious the issue is;
- a suggested fix, if you have one.

A useful severity classification is:

| Severity | Meaning | Examples |
| --- | --- | --- |
| **Critical** | The problem may be interpreted or judged incorrectly. | Ambiguity, missing constraint |
| **Minor** | The meaning is still clear, but the presentation should be fixed. | Typo, awkward sentence, inconsistent notation |
| **Suggestion** | An optional improvement that may make the statement easier to read. | Alternative wording, shorter explanation, improved flavortext |

::: tip Report the problem, not only a replacement sentence
A suggested rewrite is useful, but also explain what was wrong. This helps the setter avoid the same issue elsewhere.
:::

::: warning Recheck changed parts
After the setter makes an important change, re-read the affected section. A local fix can introduce a new contradiction or make another part outdated.
:::

## Before Moving On

::: tip Ready to move on when
- The statement is easy to read and understandable without additional information from the setter.
- All information necessary to solve the problem is written in the statement.
- Important feedback has been sent to the setter, and the fixes have been rechecked.
:::

