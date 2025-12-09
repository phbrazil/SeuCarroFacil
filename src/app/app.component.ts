import { Component } from '@angular/core';
import { User } from './_models/user';
import { NavigationEnd, Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  isHomePage = false;

  user: User = {
    token: 'abc123xyz-token-mock',
    idUser: 101,
    idGroup: 5,
    name: 'Paulo Bezerra',
    username: 'paulo.bz',
    email: 'paulo.bz@example.com',
    regDate: '2024-10-12T15:23:00Z',
    pendingRegistration: false,
    pendingEmailConfirmation: false,
    message: null,
    changePassword: false,
    admin: true,
    active: true,
    trialDate: '2024-12-01T00:00:00Z',
    trial: false,
    phone: '+55 11 91234-5678',
    initialSetup: true,
  };

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
    if (event instanceof NavigationEnd) {
      this.isHomePage = event.url === '/';
    }
  });
  }

  ngOnInit(): void {
    this.user = null;
  }
}
