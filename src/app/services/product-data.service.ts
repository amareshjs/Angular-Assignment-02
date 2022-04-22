import { Injectable } from '@angular/core';
import{HttpClient} from'@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {
url="http://localhost:3000/mobiles";
  constructor(private http:HttpClient) { }
  getData(){
    return this.http.get(this.url);
  }
  postData(data:any){
    return this.http.post(this.url,data);
  }
  getOne(id:any){
    console.log(id);
    return this.http.get("http://localhost:3000/mobiles/"+id);
    
    // return id;
  }
  delete(id:any){
    return this.http.delete('http://localhost:3000/mobiles/'+id)
  }
}
