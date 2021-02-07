import { Component, Input } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-form-field-errors',
  templateUrl: './form-field-errors.component.html',
  styleUrls: ['./form-field-errors.component.scss']
})
export class FormFieldErrorsComponent {
  @Input() set errors(errors: ValidationErrors | null) {
    this.errorsList = [];
    if (!errors) {
      return;
    }

    for (const key in errors) {
      if (errors.hasOwnProperty(key)) {
        switch (key) {
          case 'required':
            this.errorsList.push('Обязательное поле');
            break;
          case 'minlength':
            this.errorsList.push(`Минимальная длина ${errors[key].requiredLength} символа`);
            break;
          case 'error':
            this.errorsList.push(errors[key]);
            break;
        }
        console.log(key, errors[key]);

      }
    }
  }

  errorsList: Array<string> = [];

  constructor() { }

}
