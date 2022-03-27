import { Component, OnInit,Input,OnChanges, SimpleChanges } from '@angular/core';
import { GithubService } from 'src/app/service/github.service';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit,OnChanges {
  @Input() repoUrl!:string;
  repos:any=[];
  constructor(private githubservice:GithubService) { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    if(this.repoUrl){
      this.githubservice.getUserRepos(this.repoUrl).subscribe(
        (repos)=>{
          this.repos=repos;
          console.log("Here")
        },
        (err)=>{
          console.log(err)
        }
      )
    }
  }

}
