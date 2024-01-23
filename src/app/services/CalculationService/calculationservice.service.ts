import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CalculationData } from '../../models/Calculation';

@Injectable({
  providedIn:'root'
})
export class CalculationserviceService {

  httpOptions = {
    header: new HttpHeaders({'Content-Type':'application/json'})
  }
  constructor(private http: HttpClient) { }

  async CreateCalculations(calcul: CalculationData ): Promise<Observable<CalculationData>> {
    return await this.http.post<CalculationData>("http://localhost:5117/api/ProjectCalculation/CreateProjectCalculator", calcul )
  }
  async Kormon(calcul: FormData ): Promise<Observable<CalculationData>> {
    return await this.http.post<CalculationData>("http://localhost:5117/api/ProjectCalculation/CreateProjectCalculator", calcul )
  }
}
