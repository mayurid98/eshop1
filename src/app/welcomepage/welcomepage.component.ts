import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcomepage',
  templateUrl: './welcomepage.component.html',
  styleUrls: ['./welcomepage.component.scss']
})
export class WelcomepageComponent implements OnInit {
  firstname:any;
  lastname: any;
  //  @Input() username:any;
  rd:any;
  state:any;
  imageurl ="assets/images/iStock-957125704-1068x712.jpg"
  constructor( private ar:ActivatedRoute) { }

  ngOnInit(): void {
   

    // console.log(this._location.getState())
    this.ar.queryParamMap.subscribe((parm)=>{
      this.firstname= parm.get('firstname');
      this.lastname = parm.get('lastname');
      
    })
  }

}
