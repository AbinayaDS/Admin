import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { Loggedin } from '../loggedin';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  Users1: Loggedin[] = [];
  Staff1:boolean=false;
  Student1:boolean=false;
  textsearch = "";
  constructor(public d: DataService, public r: Router) {
    if(d.Details.Usertype==="Admin"){
      this.Users1=this.d.Users;
      }else if(d.Details.Usertype==="Staff"){
        this.Users1=this.d.Users.filter((x)=>x.Usertype==="Student");
        this.Staff1=true;
      }
      else if(d.Details.Usertype==="Student"){
        this.Users1=this.d.Users.filter((x)=>x.Usertype==="Student");
        this.Student1=true;
              }
  }
 ngOnInit(): void {
  }
  Logout() {
    
    this.d.Logout()
  }
  Adduser() {
    this.r.navigate(["/adduser"]);
  }
  Delete(i: number) {
    this.Users1.splice(i, 1);
    alert("Details Deleted");
  }
 
  Add(event: any) {

    if (event.target.value=== "Admin")
    {
      this.Users1 = this.d.Users;
    }
     if (event.target.value === "Staff")
     {
      const Staff= this.d.Users.filter((x) => x.Usertype === "Staff");
      this.Users1 =Staff;
    }
    else if(event.target.value === "Student") {
     const Student= this.d.Users.filter((x) => x.Usertype === "Student");
       this.Users1 = Student;
     }
  }
}
