import { Component } from '@angular/core';
import { AuthService } from 'app/user/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageTitle: string = 'Acme Product Management';

  constructor(private authService: AuthService) { }

  logOut(): void {
        this.authService.logout();
        console.log('Log out');
  }
}
