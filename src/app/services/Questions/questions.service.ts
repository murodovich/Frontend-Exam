import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { QuestionData } from '../../models/Questions';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  
  constructor(private http: HttpClient) { }

  CreateQuestion(Quest:any) : Observable<QuestionData> {
      return this.http.post<any>("http://localhost:5050/api/Question/CreateQuestions",Quest)
  }
  
 
}
