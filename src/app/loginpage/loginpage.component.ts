import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, PatternValidator, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.scss']
})
export class LoginpageComponent implements OnInit {
  
  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  
  user_details=[{
    firstname : 'mayuri ',
    lastname :'darekar',
    email_id  : 'mayuridsukre@gmail.com',
    password  : 'aA1@'
  },
  {
    firstname : 'mayuri ',
    lastname :'shirbhate',
    email_id  : 'mayurishirbhate21@gmail.com',
    password  : 'abc13$de'
  },
  {
    firstname : 'priya ',
    lastname :'shelke',
    email_id  : 'priyashelke623@gmail.com',
    password  : 'bB2#'
  }]

  loginform = new FormGroup({
    
    email_id : new FormControl('',[Validators.required,Validators.email]),
    password : new FormControl('',[Validators.required, this.createPasswordStrengthValidator()])
  }
  )
  get email() {
    return this.loginform.controls['email_id'];
}
  get password() {
    return this.loginform.controls['password'];
}
  login_details()
  {
      // this.loginform.markAllAsTouched;
      
      let input = this.loginform.value;
    

      let user = this.user_details.filter((el)=>
      {
        return el.email_id == input.email_id  
            && el.password == input.password
      })
      alert(user[0].firstname+"login successfully")
      console.log(user);
      this.route.navigate(['welcomepage'],{queryParams: {firstname:user[0].firstname, lastname:user[0].lastname}})

      // for(let i=0;i<this.user_details.length;i++)
      // {
      //   if(this.user_details[i].email_id == input.email_id 
      //     && this.user_details[i].password == input.password)
      //   {
      //     alert("user login successfully")
      //     this.route.navigate(['welcomepage'])
          
      //   }
       
      // }

      
       
  }

  createPasswordStrengthValidator(): ValidatorFn {
    return (control:AbstractControl) : ValidationErrors | null => {

        const value = control.value;

        if (!value) {
            return null;
        }
        const hasUpperCase = /[A-Z]+/.test(value);

        const hasLowerCase = /[a-z]+/.test(value);

        const hasNumeric = /[0-9]+/.test(value);

        const hasSpecialSymbol = /[!@#$%^&*_=+-]+/.test(value);

        const passwordValid = hasUpperCase && hasLowerCase && hasNumeric && hasSpecialSymbol;

        return !passwordValid ? {passwordStrength:true}: null;
    }
}
}