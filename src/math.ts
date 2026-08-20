/**
 * Returns the sum of all numbers in an array.
 *
 * @param numbers - Array of numbers to sum
 * @returns The total sum
 *
 * @example
 * ```ts
 * sum([1, 2, 3, 4]); // 10
 * sum([]); // 0
 * sum([-1, 1]); // 0
 * ```
 */
export function sum(numbers: readonly number[]): number {
  let total = 0;
  for (const n of numbers) {
    total += n;
  }
  return total;
}
