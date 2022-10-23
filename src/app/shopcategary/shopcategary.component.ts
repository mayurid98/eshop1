import { Component, OnInit } from '@angular/core';
import { Location  } from '@angular/common';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-shopcategary',
  templateUrl: './shopcategary.component.html',
  styleUrls: ['./shopcategary.component.scss']
})
export class ShopcategaryComponent implements OnInit {
rd:any;
watch:any;
shoes: any;
cloths: any;
perfumes: any;
 
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // // this.el.getState();
    // this.rd=history.state
    // console.log("navigated msg"+this.rd);
    // this.route.queryParamMap.subscribe((el)=>{
    //   this.watch = el.get('watch');
    //   this.shoes = el.get('shoes');
    //   this.cloths = el.get('cloths');
    //   this.perfumes = el.get('perfumes');
    //  })
    

     this.route.queryParams.subscribe(params => {
      this.rd.product = JSON.parse(params['product']);
       
     });
     
    
  }

}
