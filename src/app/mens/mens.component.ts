import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-mens',
  templateUrl: './mens.component.html',
  styleUrls: ['./mens.component.scss']
})
export class MensComponent implements OnInit {
mens_product=[{
    watch:'titen',
    shoes: 'bata',
    cloths: 'mufti',
    perfumes: 'skin'
},
{
  watch:'fasttrack',
  shoes: 'lancer',
  cloths: 'zudio',
  perfumes: 'axe signarture'
},
{
  watch:'mi band ',
  shoes: 'spark',
  cloths: 'max',
  perfumes: 'killer'
},
{
  watch:'boat',
  shoes: 'bata',
  cloths: 'mufti',
  perfumes: 'skin'
}]
  constructor(private rout:Router) { }

  ngOnInit(): void {
    // this.rout.navigate(['shopcategary'],{queryParams: {watch:this.mens_product[0].watch,cloths: this.mens_product[0].cloths}})



    // this.rout.navigate(['shopcategary'],{state:{watch:'mi band ', cloths: 'max'} })
}
// clickme(){
//   let navigationExtras: NavigationExtras ={
//     state: {
//       user: this.mens_product
//     }
//   };
//   this.rout.navigate(['shopcategary'],navigationExtras)
// }

edit_data(i:any){
 
//   this.rout.navigate(['shopcategary'],
//   {queryParams: {watch:this.mens_product[i].watch,
//                 shoes: this.mens_product[i].shoes,
//                 cloths:this.mens_product[i].cloths,
//                 perfumes:this.mens_product[i].perfumes
//                 }
// })


   

  
 
    this.rout.navigate(['shopcategary'], 
    {queryParams: {product: JSON.stringify(this.mens_product[i])}
    });

}

  }
  
