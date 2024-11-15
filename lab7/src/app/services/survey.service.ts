import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface SurveyResponse {
  name: string;
  email: string;
  age: number;
  feedback: string;
}

@Injectable({
  providedIn: 'root'
})
export class SurveyService {
  private responses: SurveyResponse[] = [];
  private responsesSubject = new BehaviorSubject<SurveyResponse[]>(this.responses);

  getResponses() {
    return this.responsesSubject.asObservable();
  }

  addResponse(response: SurveyResponse) {
    this.responses.push(response);
    this.responsesSubject.next(this.responses);
  }
}