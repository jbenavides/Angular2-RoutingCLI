import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/user/auth.service';
import { NgForm } from '@angular/forms';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  errorMessage: string;
  pageTitle = 'Log In';

  constructor(private authService: AuthService) { }

  login(loginForm: NgForm) {
      if (loginForm && loginForm.valid) {
          let userName = loginForm.form.value.userName;
          let password = loginForm.form.value.password;
          this.authService.login(userName, password);

          // Navigate to the Product List page after log in.
      } else {
          this.errorMessage = 'Please enter a user name and password.';
      };
  }

}
