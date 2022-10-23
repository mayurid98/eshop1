import { Component, OnInit } from '@angular/core';
import { UserinfoService } from 'src/app/services/userinfo.service';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.scss']
})
export class BillingComponent implements OnInit {
  user:any
  constructor(private uf:UserinfoService) { }

  ngOnInit(): void {
    console.log("name = "+this.uf.getname())
    this.user = this.uf.getname()
  }


}
