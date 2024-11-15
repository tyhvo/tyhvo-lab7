import { Component, OnInit } from '@angular/core';
import { SurveyService, SurveyResponse } from '../services/survey.service'; // Import the service
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-survey-table',
  standalone: true,
  imports: [CommonModule], // Add CommonModule to imports
  templateUrl: './survey-table.component.html',
  styleUrls: ['./survey-table.component.scss']
})
export class SurveyTableComponent implements OnInit {
  responses: SurveyResponse[] = [];

  constructor(private surveyService: SurveyService) { }

  ngOnInit() {
    this.surveyService.getResponses().subscribe(responses => {
      this.responses = responses; // Subscribe to the responses
    });
  }
}
