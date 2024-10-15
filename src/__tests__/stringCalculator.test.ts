import { add } from '../stringCalculator';

describe('String Calculator', () => {
  it('should return 0 for an empty string', () => {
    expect(add('')).toBe(0);
  });

  it('should return the number itself when only one number is provided', () => {
    expect(add('1')).toBe(1);
  });

  it('should return the sum of two numbers', () => {
    expect(add('1,2')).toBe(3);
  });

  it('should handle an unknown amount of numbers', () => {
    expect(add('1,2,3,4')).toBe(10);
  });

  it('should handle new lines between numbers', () => {
    expect(add('1\n2,3')).toBe(6);
  });

  it('should handle custom delimiters', () => {
    expect(add('//;\n1;2')).toBe(3);
  });

  it('should throw an error if a negative number is included', () => {
    expect(() => add('1,-2,3')).toThrow('negatives not allowed: -2');
  });

  it('should ignore numbers greater than 1000', () => {
    expect(add('2,1001')).toBe(2);
  });

  it('should handle delimiters of any length', () => {
    expect(add('//[***]\n1***2***3')).toBe(6);
  });

  it('should handle multiple delimiters', () => {
    expect(add('//[*][%]\n1*2%3')).toBe(6);
  });

  it('should handle multiple delimiters of varying length', () => {
    expect(add('//[***][%%%]\n1***2%%%3')).toBe(6);
  });
});

