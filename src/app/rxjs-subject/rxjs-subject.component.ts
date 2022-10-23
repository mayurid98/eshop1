import { Component, OnInit } from '@angular/core';
import { AsyncSubject, BehaviorSubject, map, ReplaySubject, Subject } from 'rxjs';
import { AsyncAction } from 'rxjs/internal/scheduler/AsyncAction';

@Component({
  selector: 'app-rxjs-subject',
  templateUrl: './rxjs-subject.component.html',
  styleUrls: ['./rxjs-subject.component.scss']
})
export class RxjsSubjectComponent implements OnInit {

  constructor() { }

  sub = new Subject();

  behaveSubject = new BehaviorSubject(2);

  replaySubject = new ReplaySubject(4);

  asyncSubject = new AsyncSubject();

  voidSubject = new Subject<void>();

  generaterandom(){
    return Math.random();
  }

  ngOnInit(): void {

    // this.voidSubject.subscribe((val:any)=>
    // {
    //   console.log("Void Subject 1  "+val);
    // })

    this.voidSubject.subscribe(()=>
    {
      console.log("Void Subject ");
    })
    // this.voidSubject.next();

    setTimeout(() => {
      this.voidSubject.next();
    }, 3000);

//     this.asyncSubject.subscribe(val=>
//       {
//         console.log("async value 1= "+val);
//       })
// this.asyncSubject.next(10);
// this.asyncSubject.next(20);
// this.asyncSubject.next(30);
// this.asyncSubject.next(40);
// this.asyncSubject.complete();

    // this.replaySubject.subscribe(val=>{
    //   console.log("replay value 1= "+val)
    // })
    // this.replaySubject.next(1);
    // this.replaySubject.next(2);
    // this.replaySubject.next(3);
    // this.replaySubject.next(4);
    // this.replaySubject.next(5);
    // this.replaySubject.next(6);

    // this.replaySubject.subscribe(val=>{
    //   console.log("replay value 2= "+val)
    // })
    // this.replaySubject.next(60);
    // this.replaySubject.next(70);
    
    // this.replaySubject.subscribe(val=>{
    //   console.log("replay value 3= "+val)
    // })
   



    // this.behaveSubject.subscribe(val=>{
    //   console.log("Behavior subject= "+val);
    // })
    // this.behaveSubject.next(2);
    // this.behaveSubject.next(4);

    // this.behaveSubject.subscribe(el=>{
    //        console.log("behave value2 = "+el);
    //   })
    // this.behaveSubject.next(20);
    // this.behaveSubject.next(40);

    // this.behaveSubject.subscribe(val=>
    //   {
    //     console.log("behave value3 ="+val)
    //   })

    // this.sub.pipe(map((val:any)=>val*10)).subscribe(el=>{
    //   console.log("map value is= "+el)
    // });
    
    // this.sub.subscribe(val=>{
    //   console.log("subject value1= "+val);
    // })
    
    // this.sub.subscribe(val=>
    //   {
    //     console.log("subject value2= "+val);
    //   })

    // this.sub.next(1);
    // this.sub.next(2);
    // this.sub.next(3);
    
    // this.sub.next(this.generaterandom());
    // this.sub.next(this.generaterandom());
  }

}
