import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SurveyFormComponent } from './survey-form/survey-form.component'
import { SurveyTableComponent } from './survey-table/survey-table.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SurveyFormComponent, SurveyTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'lab7';
}
