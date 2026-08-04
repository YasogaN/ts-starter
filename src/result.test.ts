import { describe, expect, it } from 'vitest';
import { err, isErr, isOk, ok } from '@/result.js';

describe('ok', () => {
  it('creates an Ok result with the value', () => {
    const expected = 42;
    const result = ok(expected);
    expect(result.ok).toBe(true);
    if (result.ok) {
      expect(result.value).toBe(expected);
    }
  });

  it('works with string values', () => {
    const expected = 'hello';
    const result = ok(expected);
    expect(result.ok).toBe(true);
    if (result.ok) {
      expect(result.value).toBe(expected);
    }
  });

  it('works with object values', () => {
    const value = { name: 'test' };
    const result = ok(value);
    expect(result.ok).toBe(true);
    if (result.ok) {
      expect(result.value).toBe(value);
    }
  });
});

describe('err', () => {
  it('creates an Err result with the error', () => {
    const expected = 'something went wrong';
    const result = err(expected);
    expect(result.ok).toBe(false);
    if (!result.ok) {
      expect(result.error).toBe(expected);
    }
  });

  it('works with Error instances', () => {
    const error = new Error('boom');
    const result = err(error);
    expect(result.ok).toBe(false);
    if (!result.ok) {
      expect(result.error).toBe(error);
    }
  });
});

describe('isOk', () => {
  it('returns true for Ok results', () => {
    expect(isOk(ok(1))).toBe(true);
  });

  it('returns false for Err results', () => {
    expect(isOk(err('fail'))).toBe(false);
  });

  it('narrows the type correctly', () => {
    const expected = 10;
    const result: { ok: false; error: string } | { ok: true; value: number } = ok(expected);
    if (isOk(result)) {
      const _: number = result.value;
      expect(_).toBe(expected);
    }
  });
});

describe('isErr', () => {
  it('returns false for Ok results', () => {
    expect(isErr(ok(1))).toBe(false);
  });

  it('returns true for Err results', () => {
    expect(isErr(err('fail'))).toBe(true);
  });

  it('narrows the type correctly', () => {
    const expected = 'oops';
    const result: { ok: false; error: string } | { ok: true; value: number } = err(expected);
    if (isErr(result)) {
      const _: string = result.error;
      expect(_).toBe(expected);
    }
  });
});
