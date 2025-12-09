import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router) {}

  public items: MenuItem[] = [];
  public sidebarVisible = false;

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        command: () => this.router.navigate(['/']),
      },
      {
        label: 'Catálogo de Veículos',
        icon: 'pi pi-car',
        command: () =>
          this.router
            .navigate(['/'])
            .then(() => setTimeout(() => this.scrollTo('search'), 50)),
      },
      {
        label: 'Serviços',
        icon: 'pi pi-briefcase',
        command: () =>
          this.router
            .navigate(['/'])
            .then(() => setTimeout(() => this.scrollTo('services'), 50)),
      },
      {
        label: 'Quem Somos',
        icon: 'pi pi-info-circle',
        command: () =>
          this.router
            .navigate(['/'])
            .then(() => setTimeout(() => this.scrollTo('about'), 50)),
      },
      {
        label: 'Contato',
        icon: 'pi pi-envelope',
        command: () =>
          this.router
            .navigate(['/'])
            .then(() => setTimeout(() => this.scrollTo('contact'), 50)),
      },
    ];
  }

  scrollTo(section: string) {
    const el = document.getElementById(section);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }

  navigate(link: string) {
    this.sidebarVisible = false;
    const element = document.querySelector(link);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  }

  public goToHome() {
    console.log('Navigating to home');
    this.router.navigate(['/']);
  }
}
