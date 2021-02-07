import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const validChars: any = {
  '#': true,
  '.': true,
  S: true,
  s: true,
  T: true,
  t: true
};

export function mapValidator(): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
    let sCount = 0;
    let tCount = 0;
    let result: ValidationErrors = {};
    const length = control.value.length;
    // полный квадрат
    if (Math.round(Math.sqrt(length)) !== Math.sqrt(length)) {
      return { error: `Длина строки (${length}) не является полным квадратом`};
    }
    // проверка всех символов
    control.value.split('').forEach((char: string) => {
      if (!validChars[char]) {
        result = { error: 'Допустимые значения:  t, T, s, S, точка(.), #'};
        return;
      }
      // проверка символа старта
      if (char === 's' || char === 'S') {
        sCount++;
        if (sCount > 1) {
          result = { error: 'Должен быть только один символ старта'};
          return;
        }
      }
      // проверка символа финиша
      if (char === 't' || char === 'T') {
        tCount++;
        if (tCount > 1) {
          result = { error: 'Должен быть только один символ финиша'};
          return;
        }
      }
    });
    // проверка на наличие символа старта и финиша
    if (sCount !== 1 || tCount !== 1) {
      result = { error: 'Должен быть хотя бы один символ старта и финиша'};
    }
    return result;
  };
}
