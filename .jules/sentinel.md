## 2026-10-02 - Print Stack Trace Leaks Internal Implementation Details
**Vulnerability:** A `printStackTrace()` method was called during exception handling inside `GenAIOrchestratorInterceptor.kt`.
**Learning:** `printStackTrace()` prints the throwable and its backtrace directly to the standard error stream (`System.err`), causing potential information leakage of internal stack details which could be beneficial to an attacker or simply fill up logs uncontrollably in production environments instead of properly handling exceptions via the configured logger.
**Prevention:** Always use the dedicated logger framework (e.g., `KotlinLogging` / `SLF4J`) to log exceptions rather than relying on `printStackTrace()`.
