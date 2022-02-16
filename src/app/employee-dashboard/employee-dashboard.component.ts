import { Component, OnInit } from '@angular/core';
import {User} from "../user";
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";
import { SubmitbuttonService} from "../submitbutton.service";

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.css']
})
export class EmployeeDashboardComponent implements OnInit {

  id = ['1', '2', '3'];  // Array for id
  projectStatus= ['Completed', 'Pending', 'Not Yet Begun'];  // Array for the project status
  Department = ['Information Technology, Pharmacy'];

  userModel = new User('Joe Smith','JoeS@humana.org', '1','Completed', 'Pharmacy', 'Low');

  submitted = false;
  errorMessage = '';

  showNav = true;

  constructor(private _auth: AuthService, private _submitbuttonService: SubmitbuttonService,
              private _router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() { // Front end side of form submission
    console.log(this.userModel); // Displays form JSON data
    this.submitted = true; // Hides form after a user submits it
    this._submitbuttonService.formData(this.userModel)
        .subscribe(
            data => console.log('Form data submitted!', data),
            error => this.errorMessage = error.statusText

  )

  }

}
