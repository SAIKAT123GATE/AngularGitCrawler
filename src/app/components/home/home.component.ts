import { Component, OnInit } from '@angular/core';
import { GithubService } from 'src/app/service/github.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user = null;
  userName!: string
  constructor(private githubservice: GithubService) { }

  ngOnInit(): void {
  }

  handleSubmit() {
    if (this.userName) {
      this.githubservice.getUserData(this.userName).subscribe(
        (user: any) => {
          this.user = user;
          console.log("user=>", user)
        },
        (err) => {
          console.log(err);
          alert("went Wrong")
        }
      )
    }
    else{
      alert("Plz Provide UserName")
    }
  }



}
