import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private cookieValue: string;  

  private title = "DIY Event App"

  constructor() {
    // this.oauthService.redirectUri = window.location.origin;
    // this.oauthService.clientId = '{client-id}';
    // this.oauthService.scope = 'openid profile email';
    // this.oauthService.issuer = 'https://dev-{dev-id}.oktapreview.com';
    // this.oauthService.tokenValidationHandler = new JwksValidationHandler();

    // // Load Discovery Document and then try to login the user
    // this.oauthService.loadDiscoveryDocument().then(() => {
    //   this.oauthService.tryLogin();
    // });
  }
}
