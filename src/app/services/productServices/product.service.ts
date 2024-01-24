import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductData } from '../../models/Product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) { 

  }

  getAllProduct(): Observable<ProductData>{
    return this.http.get<ProductData>("http://185.217.131.187:5117/api/Project/GetByIdProject?Id=2")
  }
}
