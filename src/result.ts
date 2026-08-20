interface Ok<T, _E> {
  readonly ok: true;
  readonly value: T;
}

interface Err<_T, E> {
  readonly ok: false;
  readonly error: E;
}

/**
 * A discriminated union representing either success (`Ok<T>`) or failure (`Err<E>`).
 *
 * @typeParam T - The success value type
 * @typeParam E - The error type, defaults to `Error`
 *
 * @example
 * ```ts
 * function divide(a: number, b: number): Result<number, string> {
 *   if (b === 0) return err('Cannot divide by zero')
 *   return ok(a / b)
 * }
 * ```
 */
export type Result<T, E = Error> = Ok<T, E> | Err<T, E>;

/**
 * Creates a successful result.
 *
 * @param value - The success value
 * @returns A Result with `ok: true`
 */
export function ok<T>(value: T): Result<T, never> {
  return { ok: true, value };
}

/**
 * Creates an error result.
 *
 * @param error - The error value
 * @returns A Result with `ok: false`
 */
export function err<E>(error: E): Result<never, E> {
  return { ok: false, error };
}

/**
 * Type guard: checks if a Result is an Ok variant.
 *
 * @param result - The Result to check
 * @returns `true` if the result is Ok
 */
export function isOk<T, E>(result: Result<T, E>): result is Ok<T, E> {
  return result.ok;
}

/**
 * Type guard: checks if a Result is an Err variant.
 *
 * @param result - The Result to check
 * @returns `true` if the result is an error
 */
export function isErr<T, E>(result: Result<T, E>): result is Err<T, E> {
  return !result.ok;
}
