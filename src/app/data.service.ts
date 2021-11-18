
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Loggedin } from './loggedin';



@Injectable({
  providedIn: 'root'
})
export class DataService {
  Details:any={};
  
Signedin:boolean=false;
Users:Loggedin[]=[
  {id:"1",Username:"admin",Password:"admin",Usertype:"Admin"},
  {id:"2",Username:"staff",Password:"staff",Usertype:"Staff"},
  {id:"3",Username:"student",Password:"student",Usertype:"Student"}
  
 ];

constructor(public r:Router){}
Adduser(a:Loggedin){
  this.Users.push(a);
  }
  login(Username: string,Password:string){
    this.Details=this.Users.find((x) => x.Username.toLowerCase()===Username.toLowerCase() && x.Password===Password);
    this.Signedin=this.Details? true:false;
    
      return this.Signedin;
    }

Logout(){
  this.Signedin=false;
  this.r.navigate(['/login']);
}

}