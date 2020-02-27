import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import { User } from 'src/app/models/user';
import { CookieService } from 'ngx-cookie-service'; 

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

  constructor(private userService: UserService, private cookieService: CookieService) { }

  cookieValue : string;

  model = new User(null, "", "");

  login() {
    this.userService.login(this.model).subscribe(
    (val: any) => {
      if (val != null) {
        this.cookieService.set('email',  this.model.email);
        this.cookieService.set('password', this.model.password);
        
        }
      }
    ); 
  }
}
