# Code Template

## Validator

Use the version with subtasks if the problem has subtasks. Otherwise, use the version without subtasks.

::: details Validator with subtasks

```cpp
#include <bits/stdc++.h>
#include "testlib.h"

using namespace std;

class ProblemVariables {
public:
    /*
     * Declare all input variables here.
     *
     * Example:
     * int n;
     * vector<int> a;
     */

    ProblemVariables() {
        /*
         * Read the input exactly as described in the Input Format section.
         *
         * Example:
         *
         * n = inf.readInt(1, 200'000, "n");
         * inf.readEoln();
         *
         * a = inf.readInts(n, 1, 1'000'000'000, "a");
         * inf.readEoln();
         *
         * inf.readEof();
         */

        // TODO: Read the input.
    }

    void check_constraints() const {
        /*
         * Check EVERY constraint from the top-level Constraints section.
         *
         * Copy each statement constraint as a comment immediately above
         * the code that checks it, even if the same bound was already used
         * while reading the input.
         *
         * Example:
         *
         * // 1 <= n <= 2 * 10^5
         * ensuref(1 <= n && n <= 200'000,
         *         "n must satisfy 1 <= n <= 2 * 10^5, but n = %d", n);
         *
         * // 1 <= a_i <= 10^9 (1 <= i <= n)
         * for (int i = 0; i < n; i++) {
         *     ensuref(1 <= a[i] && a[i] <= 1'000'000'000,
         *             "a[%d] must satisfy 1 <= a_i <= 10^9, but a[%d] = %d",
         *             i + 1, i + 1, a[i]);
         * }
         */

        // TODO: Check the global constraints.
    }

    void test_subtask_1() const {
        /*
         * Check ONLY the additional constraints for Subtask 1.
         * Do not repeat the global constraints here.
         *
         * Example:
         *
         * // n <= 100
         * ensuref(n <= 100,
         *         "Subtask 1 requires n <= 100, but n = %d", n);
         */

        // TODO: Check Subtask 1.
    }

    void test_subtask_2() const {
        /*
         * Check ONLY the additional constraints for Subtask 2.
         *
         * If this subtask has no additional constraints, leave this
         * function empty.
         */

        // TODO: Check Subtask 2.
    }

    /*
     * Add or remove test_subtask_X() functions as needed.
     */
};


/*
 * Normally, do not edit the code below except for the
 * TEST_SUBTASK(...) list in main().
 *
 * Valid group names are:
 *   ""       : test has not been assigned a group yet
 *   "sample" : sample test
 *   "subX"   : Subtask X, for one of the registered subtasks below
 */

int extract_subtask_number(const string& group) {
    // Ungrouped tests and samples only need the global constraints.
    if (group.empty() || group == "sample") {
        return 0;
    }

    const string prefix = "sub";

    ensuref(group.size() > prefix.size() &&
                group.compare(0, prefix.size(), prefix) == 0,
            "Invalid test group '%s'. Expected '', 'sample', or 'subX'.",
            group.c_str());

    const string suffix = group.substr(prefix.size());

    // Require the canonical form subX, where X is a positive integer
    // without leading zeroes.
    ensuref(!suffix.empty() && suffix[0] != '0',
            "Invalid test group '%s'. Subtask groups must be named subX "
            "for a positive integer X.",
            group.c_str());

    int subtask = 0;

    for (char c : suffix) {
        ensuref('0' <= c && c <= '9',
                "Invalid test group '%s'. Subtask groups must be named subX.",
                group.c_str());

        ensuref(subtask <= (INT_MAX - (c - '0')) / 10,
                "Subtask number in group '%s' is too large.",
                group.c_str());

        subtask = subtask * 10 + (c - '0');
    }

    ensuref(to_string(subtask) == suffix,
            "Invalid test group '%s'. Use the canonical name sub%d.",
            group.c_str(), subtask);

    return subtask;
}

#define TEST_SUBTASK(number)        \
    case number:                    \
        pv.test_subtask_##number(); \
        break

int main(int argc, char* argv[]) {
    registerValidation(argc, argv);

    ProblemVariables pv;
    pv.check_constraints();

    const int subtask = extract_subtask_number(validator.group());

    // Empty group and "sample" require only the global constraints.
    if (subtask == 0) {
        return 0;
    }

    switch (subtask) {
        TEST_SUBTASK(1);
        TEST_SUBTASK(2);

        // Add or remove registered subtasks here.
        // TEST_SUBTASK(3);
        // TEST_SUBTASK(4);

        default:
            ensuref(false,
                    "Test group '%s' refers to unregistered Subtask %d.",
                    validator.group().c_str(), subtask);
    }

    return 0;
}

#undef TEST_SUBTASK
```

:::

::: details Validator without subtasks

```cpp
#include <bits/stdc++.h>
#include "testlib.h"

using namespace std;

class ProblemVariables {
public:
    /*
     * Declare all input variables here.
     *
     * Example:
     * int n;
     * vector<int> a;
     */

    ProblemVariables() {
        /*
         * Read the input exactly as described in the Input Format section.
         *
         * Example:
         *
         * n = inf.readInt(1, 200'000, "n");
         * inf.readEoln();
         *
         * a = inf.readInts(n, 1, 1'000'000'000, "a");
         * inf.readEoln();
         *
         * inf.readEof();
         */

        // TODO: Read the input.
    }

    void check_constraints() const {
        /*
         * Check EVERY constraint from the top-level Constraints section.
         *
         * Copy each statement constraint as a comment immediately above
         * the code that checks it, even if the same bound was already used
         * while reading the input.
         *
         * Example:
         *
         * // 1 <= n <= 2 * 10^5
         * ensuref(1 <= n && n <= 200'000,
         *         "n must satisfy 1 <= n <= 2 * 10^5, but n = %d", n);
         *
         * // 1 <= a_i <= 10^9 (1 <= i <= n)
         * for (int i = 0; i < n; i++) {
         *     ensuref(1 <= a[i] && a[i] <= 1'000'000'000,
         *             "a[%d] must satisfy 1 <= a_i <= 10^9, but a[%d] = %d",
         *             i + 1, i + 1, a[i]);
         * }
         */

        // TODO: Check the global constraints.
    }
};

int main(int argc, char* argv[]) {
    registerValidation(argc, argv);

    ProblemVariables pv;
    pv.check_constraints();

    return 0;
}
```

:::
