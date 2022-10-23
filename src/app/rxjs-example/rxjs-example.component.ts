import { Component, OnInit } from '@angular/core';
import { filter, first, from, map, Observable, of } from 'rxjs';
import { UserinfoService } from '../services/userinfo.service';

@Component({
  selector: 'app-rxjs-example',
  templateUrl: './rxjs-example.component.html',
  styleUrls: ['./rxjs-example.component.scss']
})
export class RxjsExampleComponent implements OnInit {

  constructor(private arr:UserinfoService) { }

  sendObj = new Observable((sub)=>
  {
    sub.next(1);
    sub.next('mayuri');
    
    // setTimeout(()=>{
    //   sub.next('darekar');
    //   sub.complete();
    //  },1000)
    sub.next(this.generaterandomnumber())
    sub.complete();
    sub.error();
  })
num = of(4,6,5);

evennumber = [2,4,6,8,10]
  // numobs = new Observable(obs=>
  //   {
  //     obs.next(2);
  //     obs.next(3);
  //     obs.next(4);
  //   })
  generaterandomnumber(){
    return Math.random();
  }

  ngOnInit(): void {

    from(this.arr.geta()).subscribe(val=>
      {
        console.log("from one component to second: "+val)
      })
    from(this.evennumber).subscribe(val=>
      {
        console.log("even number: "+val)
      })
    this.num.subscribe((val:any)=>
      {
        console.log(val)
      })
    this.arr.numobs.pipe(map((val:any)=>val*7),
                     filter((val:any)=>val%2==0),
                     map((val:any)=>val+2)).
                     subscribe(el=>
                     {
                        console.log("data transerfer from operator: "+ el)
                      })

    this.sendObj.subscribe({
      next(value){
        console.log("data from value: "+value)
      },
      complete(){
        console.log("complete data sending: ");
      },
      error(err){
        console.log("error msg: "+err)
      }
    })
    this.sendObj.subscribe(el=>{
      console.log("data from observable"+el);
    })
  }

}
