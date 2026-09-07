---
pageClass: common-text-page
---

# Common Text

This page contains standard phrases that you are encouraged to copy and modify when writing problem statements. When copying, be sure to read the text you are copying, and change the wording consistent to the legend.

Use the standard variable names from these templates when there is no problem-specific reason to use different notation.

## Input Format

**Single Value**

```text
The first line contains a single integer $n$ ($1 \le n \le 2 \cdot 10^5$).
```

**Multiple Values**

```text
The first line contains two integers $n$ and $m$ ($1 \le n \le 2 \cdot 10^5$, $1 \le m \le 2 \cdot 10^5$).
```

**Sequence**

```text
The second line contains $n$ integers $a_1, a_2, \dots, a_n$ ($1 \le a_i \le 10^9$).
```

**String**

```text
The second line contains a string $s$ of length $n$, consisting of lowercase English letters.
```

### Multiple Test Cases

```text
The first line contains a single integer $t$ ($1 \le t \le 10^4$) --- the number of test cases.
```

```text
The description of the test cases follows.
```

```text
The first line of each test case contains a single integer $n$ ($1 \le n \le 2 \cdot 10^5$).
```

```text
It is guaranteed that the sum of $n$ over all test cases does not exceed $2 \cdot 10^5$.
```

### Queries

```text
The first line contains two integers $n$ and $q$ ($1 \le n \le 2 \cdot 10^5$, $1 \le q \le 2 \cdot 10^5$).
```

```text
The next $q$ lines describe the queries.
```

```text
The $i$-th of the next $q$ lines contains ...
```

### Graph

**Unweighted Graph**

```text
The first line contains two integers $n$ and $m$ ($1 \le n \le 2 \cdot 10^5$, $0 \le m \le 2 \cdot 10^5$) --- the number of vertices and edges of the graph, respectively.
```

```text
Each of the next $m$ lines contains two integers $u_i$ and $v_i$ ($1 \le u_i, v_i \le n$), representing an edge between vertices $u_i$ and $v_i$.
```

**Weighted Graph**

```text
Each of the next $m$ lines contains three integers $u_i$, $v_i$, and $w_i$ ($1 \le u_i, v_i \le n$, $1 \le w_i \le 10^9$), representing an edge between vertices $u_i$ and $v_i$ with weight $w_i$.
```

### Tree

```text
The first line contains a single integer $n$ ($2 \le n \le 2 \cdot 10^5$) --- the number of vertices of the tree.
```

```text
Each of the next $n-1$ lines contains two integers $u_i$ and $v_i$ ($1 \le u_i, v_i \le n$), representing an edge between vertices $u_i$ and $v_i$.
```

### Grid

```text
The first line contains two integers $n$ and $m$ ($1 \le n \le 500$, $1 \le m \le 500$) --- the number of rows and columns of the grid, respectively.
```
