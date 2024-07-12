import { Injectable } from '@angular/core';
import{HttpClient} from'@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
private url=''
  constructor(private http:HttpClient) { }
  user(endpoint:string){
    return this.http.get(this.url+endpoint)
  }
}
