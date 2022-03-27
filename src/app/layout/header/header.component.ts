import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  email: any = null;
  constructor(private auth: AuthService, private router: Router) {
    this.auth.getUser().subscribe(
      (user) => {
        console.log("user", user?.email)
        this.email = user?.email;
      })
  }

  ngOnInit(): void {
  }

  async logOut() {
    try {
      await this.auth.logout();
      this.email = null;
      this.router.navigateByUrl("/signin")
    }
    catch{
      console.log("something went wrong")
    }

  }

}
