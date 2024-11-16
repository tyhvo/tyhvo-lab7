import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { SurveyService, SurveyResponse } from '../services/survey.service';

@Component({
  selector: 'app-survey-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './survey-form.component.html',
  styleUrls: ['./survey-form.component.scss']
})
export class SurveyFormComponent {
  surveyForm: FormGroup;

  constructor(private fb: FormBuilder, private surveyService: SurveyService) {
    this.surveyForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      age: ['', [Validators.required, Validators.min(1)]],
      feedback: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.surveyForm.valid) {
      const response: SurveyResponse = this.surveyForm.value;
      this.surveyService.addResponse(response);
      this.surveyForm.reset();
    }
  }
}
