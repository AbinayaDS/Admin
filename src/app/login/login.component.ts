import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public d:DataService,public r:Router) { 
  
  }
Username="";
Password="";

  ngOnInit(): void {
  }
 
 Login(){
   
  const data= this.d.login(this.Username,this.Password);
   if (data) {
     if(this.d.Details.Usertype==="Admin"){
       this.r.navigate(['/admin'])
     }
    }
    if(this.d.Details.Usertype==="Staff"){
      this.r.navigate(['/admin'])
    }
    if(this.d.Details.Usertype==="Student"){
      this.r.navigate(['/admin'])
    }
}
}

  
  

 