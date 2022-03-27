import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  submitForm(f: NgForm) {
    this.auth.signUp(f.value.email, f.value.password).then(
      (user) => {
        console.log("user from firebase=>", user);
        this.router.navigateByUrl("/")
      }).catch((err) => {


        console.log("Error", err.code)
        this.router.navigate(["/signin"])

      }
      )

  }
}
