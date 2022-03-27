import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private auth:AuthService,private router:Router) { }

  ngOnInit(): void {
  }

  submitForm(f:NgForm){
    this.auth.loginWithEmail(f.value.email,f.value.password).then(
      (user)=>{
        console.log("user from firebase=>",user);
        this.router.navigateByUrl("/")
      }).catch((err)=>{

        if(err.code=="auth/user-not-found"){
          console.log("Error",err.code)
          this.router.navigate(["/signup"])
        }
      }
      )

  }

}
