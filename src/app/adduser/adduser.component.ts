import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { Loggedin } from '../loggedin';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  constructor (public d:DataService,public r:Router){}
Loggedin1:Loggedin=new Loggedin;

  ngOnInit(): void {
  }
 
Add(){
  if(this.Loggedin1.Username!=null &&this.Loggedin1.Password!=null &&this.Loggedin1.Usertype!=null){
    
   this.d.Adduser(this.Loggedin1);
   this.Loggedin1=new Loggedin;
   this.r.navigate(['/admin']);
 }
else{
   alert("Fill All the Details");
 
}
  }

}