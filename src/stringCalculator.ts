export function add(numbers: string): number {
    if (!numbers) return 0;
  
    const delimiterRegex = /\/\/(\[.*?\])+\n/;
    let delimiters: string[] = [',', '\n'];
    let numberString = numbers;
  
    if (numbers.startsWith('//')) {
      const delimiterMatch = numbers.match(delimiterRegex);
      if (delimiterMatch) {
        const delimiterSection = delimiterMatch[0];
        delimiters = [...delimiters, ...delimiterSection.match(/\[([^\]]+)\]/g)!.map(d => d.slice(1, -1))];
        numberString = numbers.slice(delimiterSection.length);
      } else {
        delimiters.push(numbers[2]);
        numberString = numbers.slice(4);
      }
    }
  
    const delimiterPattern = new RegExp(`[${delimiters.join('')}]`);
    const numberArray = numberString.split(delimiterPattern).map(n => parseInt(n, 10));
  
    const negatives = numberArray.filter(n => n < 0);
    if (negatives.length) throw new Error(`negatives not allowed: ${negatives.join(', ')}`);
  
    return numberArray.filter(n => n <= 1000).reduce((sum, n) => sum + n, 0);
  }
  