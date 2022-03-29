export function splitAndSumNumbers(numberText: string): string {
  const splittedNumbers = numberText.split('').map(Number)
  const sum = String(splittedNumbers.reduce((sum: number, number: number) => sum + number, 0))
  if (sum.length === 1) {
      return sum
  }
  return splitAndSumNumbers(sum)
}