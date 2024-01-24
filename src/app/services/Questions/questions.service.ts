import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { QuestionData } from '../../models/Questions';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  httpOptions = {
    header: new HttpHeaders({ 'Content-Type': 'application/json' })
  }
  constructor(private http: HttpClient) { }

  async CreateQuestion(Quest: QuestionData): Promise<Observable<QuestionData>> {
    return await this.http.post<QuestionData>("http://185.217.131.187:5117/api/Question/CreateQuestions", Quest)
  }
}
