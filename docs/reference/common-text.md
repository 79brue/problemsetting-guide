---
pageClass: common-text-page
---

# Common Text

This page contains standard phrases that you are encouraged to copy and modify when writing problem statements.

The sections follow the standard M(IT)^2 statement order:

**Legend → Constraints → Input Format → Output Format → Scoring**

Copy these phrases when they fit your problem, and modify them whenever necessary to describe the problem accurately.

## Legend

Most content in the Legend is problem-specific. Use the templates below only when they fit naturally.

### Operations

**Any number of times**

```text
You may perform the following operation any number of times:
```

**At most $k$ times**

```text
You may perform the following operation at most $k$ times:
```

### Guarantees

**Existence**

```text
It can be shown that an answer always exists.
```

**Uniqueness**

```text
It can be shown that the answer is unique.
```

## Constraints

**Integers**

```text
* $1 \le n \le 2 \cdot 10^5$.
* $0 \le m \le 2 \cdot 10^5$.
```

**Sequence Values**

```text
* $1 \le a_i \le 10^9$ ($1 \le i \le n$).
```

**Permutation**

```text
* $1 \le p_i \le n$ ($1 \le i \le n$).
* $p_i \ne p_j$ ($1 \le i < j \le n$).
```

**String Length and Alphabet**

```text
* $|s| = n$.
* $s$ consists only of lowercase English letters.
* $s_i \in \{\texttt{L}, \texttt{R}\}$ ($1 \le i \le n$).
```

### Multiple Test Cases

**Number of test cases**

```text
* $1 \le t \le 10^4$.
```

**Sum of sizes**

```text
* The sum of $n$ over all test cases does not exceed $2 \cdot 10^5$.
```

### Graph

**Edge endpoints**

For an undirected graph, use the second or third line if the graph does not have self-loops or multiple edges, respectively.

```text
* $1 \le u_i, v_i \le n$ ($1 \le i \le m$).
* $u_i \ne v_i$ ($1 \le i \le m$).
* $\{u_i, v_i\} \ne \{u_j, v_j\}$ ($1 \le i < j \le m$).
```

For a directed graph with no multiple edges, use ordered pairs instead:

```text
* $(u_i, v_i) \ne (u_j, v_j)$ ($1 \le i < j \le m$).
```

**Connected Graph**

To use the constraint below, define graph $G$ in the statement.

```text
* The graph $G$ is connected.
```

### Tree

**Number of vertices**

```text
* $2 \le n \le 2 \cdot 10^5$.
```

**Edge endpoints**

```text
* $1 \le u_i, v_i \le n$ ($1 \le i \le n-1$).
```

**Tree Structure**

To use the constraint below, define graph $T$ in the statement.

```text
* The graph $T$ is a tree.
```

### Grid/Matrix

**Grid size**

By default, use $n$ for the number of rows and $m$ for the number of columns.

```text
* $1 \le n \le 2 \cdot 10^3$.
* $1 \le m \le 2 \cdot 10^3$.
```

Prefer explicit bounds for both $n$ and $m$. Avoid using only a product constraint such as $n \cdot m \le K$ unless it is necessary for the problem.

**Matrix elements**

```text
* $1 \le a_{i,j} \le 10^9$ ($1 \le i \le n$, $1 \le j \le m$).
```

## Input Format
### Multiple Test Cases

**Number of test cases**

```text
The first line contains a single integer $t$~--- the number of test cases.
The description of the test cases follows.
```

**First line of each test case**

```text
The first line of each test case contains a single integer $n$.
```

**Only line of each test case**

```text
The only line of each test case contains a single integer $n$.
```

### Without Testcases

**Single Integer**

```text
The first line contains a single integer $n$.
```

**Two Integers**

```text
The first line contains two integers $n$ and $m$.
```

**Sequence**

```text
The second line contains $n$ integers $a_1, a_2, \dots, a_n$.
```

**String**

```text
The second line contains a string $s$.
```

### Queries

**Number of queries**

```text
The first line contains two integers $n$ and $q$.
```

**Query lines**

```text
The $i$-th of the next $q$ lines contains ...
```

### Graph

**Number of vertices and edges**

```text
The first line contains two integers $n$ and $m$~--- the number of vertices and edges, respectively.
```

**Unweighted edge**

```text
The $i$-th of the next $m$ lines contains two integers $u_i$ and $v_i$~--- the endpoints of the $i$-th edge.
```

**Weighted edge**

```text
The $i$-th of the next $m$ lines contains three integers $u_i$, $v_i$, and $w_i$~--- the endpoints of the $i$-th edge and its weight.
```

### Tree

**Number of vertices**

```text
The first line contains a single integer $n$~--- the number of vertices of the tree.
```

**Edges**

```text
The $i$-th of the next $n-1$ lines contains two integers $u_i$ and $v_i$~--- the endpoints of the $i$-th edge.
```

### Grid

**Grid size**

```text
The first line contains two integers $n$ and $m$~--- the height and width of the grid, respectively.
```

**Grid rows**

```text
The $i$-th of the next $n$ lines contains $m$ integers $a_{i,1}, a_{i,2}, \dots, a_{i,m}$.
```

## Output Format

**Single Integer**

```text
Output a single integer~--- ...
```

**Multiple Integers**

```text
Output two integers~--- ...
```

**Sequence**

```text
Output $n$ integers $a_1, a_2, \dots, a_n$.
```

**Multiple Test Cases**

```text
For each test case, output a single integer~--- ...
```

**Queries**

```text
For each query, output a single integer~--- ...
```

### Yes/No

**Yes/No answer**

```text
Output \texttt{YES} if ..., and \texttt{NO} otherwise.
```

**Case-insensitive Yes/No**

```text
You can output \texttt{YES} and \texttt{NO} in any case.
```

### Impossible Cases

**Output -1 if impossible**

```text
If it is impossible, output $-1$.
```

**Otherwise output a construction**

```text
If it is impossible, output $-1$. Otherwise, output ...
```

### Multiple Valid Outputs

**Any valid solution**

```text
If there are multiple valid solutions, output any of them.
```

**Any order**

```text
You may output the elements in any order.
```

### Real-Valued Output

**Absolute or relative error**

```text
Your answer will be considered correct if its absolute or relative error does not exceed $10^{-6}$.
```

## Scoring

If the problem has neither subtasks nor partial scoring, you may omit this section.

### Subtasks

```text
There are $k$ subtasks for this problem.
\begin{itemize}
    \item Subtask 1 ($x$ points): ...
    \item Subtask 2 ($x$ points): No additional constraints.
\end{itemize}
```

### Partial Scoring

**Formula-based scoring**

```text
Let $x$ be ...

Your score is calculated as follows:

\[
...
\]
```

If the score is rounded or truncated, state the rule explicitly.

**Rounding**

```text
Your score is rounded to the nearest [integer / one decimal place / two decimal places / ...].
```

**Truncation**

```text
Your score is truncated to [an integer / one decimal place / two decimal places / ...].
```
