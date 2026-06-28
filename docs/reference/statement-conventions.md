# Statement Conventions

(Writing in progress)

This page will collect formatting and style conventions for M(IT)^2 problem statements.

You should follow the conventions below for the consistency of problem statements.

* If you need a character, you must use the name `Busy Beaver`. If you need more characters, name them in the similar format: an adjective followed by an animal.
* All numbers go in math mode. If you chose to spell it out as a word, this doesn't apply.
  * This is especially relevant for sample explanations.
* All variables should be named in lowercase alphabet, with the exception of sets and graphs, which uses uppercase.
* When listing a list of elements, list the first two elmements, use ellipsis (`\dots`), and then list the last element.
* Representing huge numbers:
  * Use scientific notation for numbers $\ge 1\,000$, if there are at most two non-zero digits at the front and all following digits are zero.
  * Else, represent the entire digits, separating by space (`\,`), grouped by three digits from the back.
  * Example: $10^9$, $1.5 \cdot 10^5$, $998\,244\,353$
* If your problem asks the answer mod some modulo, you must use $998\,244\,353$ as the modulo, expect for a few exceptions:
  * If your problem solution works for only one specific modulo, you may use that modulo.
  * If your problem solution requires a smaller (or bigger) range of modulo, you should use a modulo which is the next prime after $10^k$ for a certain $k$. (Example: $100\,003$)
* (TODO: more stuff here; probably better to move to a separate page in /reference)