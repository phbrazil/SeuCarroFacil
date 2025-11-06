import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RoutesLogged } from './routes-logged';

export const AdminLayoutRoutes: Routes = [
  //NOVAS ROTAS INTERNAS DO SITE DEVEM SER INCLUIDAS AQUI
  { path: RoutesLogged.Home, component: HomeComponent },
];
