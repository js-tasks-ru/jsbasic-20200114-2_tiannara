/**
 * Складываем зарплаты
 * @param {Object} salaries - объект зарплат
 * @returns {Number}
 */
let salaries = {
    John: 1000,
    Ann: 1600,
    Pete: 1300,
    month: 'December',
    currency: 'USD',
    isPayed: false
  };

  function sumSalary(salaries) {
    let sumOfSalaries = 0;
    for (let key in salaries) {
      let isSalary = typeof salaries[key] === "number";
      if (isSalary) {
        sumOfSalaries += salaries[key];
      }
    }
    return sumOfSalaries;
  }