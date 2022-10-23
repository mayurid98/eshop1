import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserinfoService {
  numobs = new Observable(obs=>
    {
      obs.next(2);
      obs.next(3);
      obs.next(4);
    })
  constructor() { }
  a = [1,3,2,5,4]
  geta(){
    return this.a;
  }
  getname(){
    return "mayuri";
  }
}
