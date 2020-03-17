import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { from, Observable } from 'rxjs';
// import { url } from 'inspector';
@Injectable({
  providedIn: 'root'
})
export class RandomuserService {

  constructor(private http: HttpClient) {

   }
   getData(): Observable<any>
   {
     const url= "https://jsonplaceholder.typicode.com/posts"
     return this.http.get<any>(url)
   }
}
