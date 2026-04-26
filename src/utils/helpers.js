export const calulateNumberYearsElapsed = (yearFrom) => {
    const endings = new Map([
      [0, 'лет'],
      [1, 'год'],
      [2, 'года'],
      [3, 'года'],
      [4, 'года'],
      [5, 'лет'],
      [6, 'лет'],
      [7, 'лет'],
      [8, 'лет'],
      [9, 'лет'],
      [12, 'лет'],
      [13, 'лет'],
      [14, 'лет'],
    ]);

    const currentYear = new Date().getFullYear()
    const yearsElapsed = currentYear - yearFrom

    if (endings.has(yearsElapsed)) {
      return `${yearsElapsed} ${endings.get(yearsElapsed)}`
    }

    const yearsElapsedLastDigit = yearsElapsed % 10
    return `${yearsElapsed} ${endings.get(yearsElapsedLastDigit)}`
}