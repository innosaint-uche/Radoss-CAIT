## 2023-10-24 - Kotlin collections firstNotNullOfOrNull
**Learning:** `mapNotNull { ... }.firstOrNull()` or `map { ... }.filterNotNull().firstOrNull()` is less efficient because it maps all elements and filters out the null ones, creating new intermediate collections (unless a Sequence is used), only to get the first element and discard the rest. `firstNotNullOfOrNull { ... }` applies the transformation and returns the first non-null result immediately, breaking early and avoiding intermediate collections.
**Action:** Use `firstNotNullOfOrNull` instead of chaining `mapNotNull` or `map + filterNotNull` with `firstOrNull`.
## 2023-10-24 - Kotlin collections map followed by joinToString
**Learning:** Calling `.map { ... }.joinToString(...)` on a Kotlin collection creates an intermediate list for the mapped elements, allocating memory and taking time before finally joining them. Kotlin's `joinToString` allows taking a transformation function directly: `.joinToString(...) { ... }`, avoiding the intermediate list creation and improving performance.
**Action:** Replace `.map { ... }.joinToString(...)` with `.joinToString(...) { ... }`.
