import { describe, expect, it } from 'vitest';
import { sum } from '@/math.js';

const EMPTY_SUM = 0;
const SIMPLE_SUM_RESULT = 10;
const SINGLE_VALUE = 42;
const NEGATIVE_SUM_RESULT = -10;
const LARGE_COUNT = 1000;
const LARGE_SUM_RESULT = 500_500;

describe('sum', () => {
  it('returns 0 for an empty array', () => {
    expect(sum([])).toBe(EMPTY_SUM);
  });

  it('returns the sum of multiple numbers', () => {
    expect(sum([1, 2, 3, 4])).toBe(SIMPLE_SUM_RESULT);
  });

  it('returns the value itself for a single-element array', () => {
    expect(sum([SINGLE_VALUE])).toBe(SINGLE_VALUE);
  });

  it('handles negative numbers correctly', () => {
    expect(sum([-1, 1])).toBe(0);
    expect(sum([-5, -3, -2])).toBe(NEGATIVE_SUM_RESULT);
  });

  it('handles large arrays', () => {
    const numbers = Array.from({ length: LARGE_COUNT }, (_, i) => i + 1);
    expect(sum(numbers)).toBe(LARGE_SUM_RESULT);
  });
});
