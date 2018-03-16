const palindrome = require('../palindrome');

describe('palindrome', () => {
  it('should check if sentence is palindrome or not', () => {
    const firstInput = 'ABA';
    const secondInput = 'MACACO';
    const thirdInput = 'A MAN A PLAN A CANAL PANAMA';

    expect(palindrome(firstInput)).toBeTruthy();
    expect(palindrome(secondInput)).toBeFalsy();
    expect(palindrome(thirdInput)).toBeTruthy();
  });

  it('should ignore non-letter and uppercase characters', () => {
    const firstInput = 'AbA';
    const secondInput = 'M_A_C_A_C_O';
    const thirdInput = 'A-MAN-A-PLAN-A-CANAL-PANAMA';

    expect(palindrome(firstInput)).toBeTruthy();
    expect(palindrome(secondInput)).toBeFalsy();
    expect(palindrome(thirdInput)).toBeTruthy();
  });
});
