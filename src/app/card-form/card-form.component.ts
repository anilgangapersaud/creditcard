import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputComponent } from '../input/input.component';
import { DateFormControl } from '../date-form-control';
import { CardComponent } from '../card/card.component';
import { NgxMaskDirective } from 'ngx-mask';

@Component({
  selector: 'app-card-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, InputComponent, CardComponent, NgxMaskDirective],
  templateUrl: './card-form.component.html',
  styleUrl: './card-form.component.css'
})
export class CardFormComponent {

  cardForm = new FormGroup({
    name: new FormControl('', [
      Validators.minLength(3),
      Validators.required,
    ]),
    cardNumber: new FormControl('', [
      Validators.required,
      Validators.minLength(16),
      Validators.maxLength(16)
    ]),
    expiration: new DateFormControl('', [
      Validators.required,
      Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}$/)
    ]),
    securityCode: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(3)
    ])
  })

  constructor() {
    console.log(this.cardForm.controls.name)
  }

  onSubmit() {
    console.log('Form was submitted');
  }

  onResetClick() {
    this.cardForm.reset();
  }
}
