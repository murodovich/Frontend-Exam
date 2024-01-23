import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddressDate } from '../../models/Address';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(private http: HttpClient) { 

  }

  getAllAddress(): Observable<AddressDate>{
    return this.http.get<AddressDate>("http://localhost:5117/api/Address/GetByIdAddress?Id=3")
  }
}
