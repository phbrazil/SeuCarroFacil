import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from './_models/user';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  user: User;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {}
}
