/**
 * Retries an async function up to `retries` times with exponential backoff.
 * Useful for Supabase cold-start 4xx/5xx transient failures.
 */
export async function withRetry<T>(
  fn: () => Promise<T>,
  retries = 3,
  baseDelayMs = 400,
): Promise<T> {
  let lastError: unknown;
  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      return await fn();
    } catch (err) {
      lastError = err;
      if (attempt < retries) {
        await new Promise((res) =>
          setTimeout(res, baseDelayMs * Math.pow(2, attempt)),
        );
      }
    }
  }
  throw lastError;
}
