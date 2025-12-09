import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vehicle } from 'src/app/_models/vehicle';
import { RoutesLogged } from '../logged-pages/routes-logged';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
})
export class ResultsComponent implements OnInit {
  public vehicles: Vehicle[] = [
    {
      id: 1,
      brand: 'Chevrolet',
      model: 'Camaro SS V8',
      year: 2011,
      mileageKm: 65000,
      imageUrl: 'assets/images/camaro-ss-v8.jpg',
      badge: 'Oferta Especial',
      description: 'Um carro esportivo clássico com desempenho excepcional.',
      features: [
        'Motor V8',
        'Câmbio Manual',
        'Ar Condicionado',
        'Sistema de Som Premium',
      ],
      oldPrice: 189990,
      newPrice: 180000,
      rating: 4.5,
      stockStatus: 'Disponível',
      metadata: {
        tag: 'PROMOÇÃO',
        updatedAt: new Date('2024-05-01'),
      },
    },
    {
      id: 2,
      brand: 'Ford',
      model: 'Mustang GT',
      year: 2015,
      mileageKm: 45000,
      imageUrl: 'assets/images/mustang-gt.jpg',
      features: [
        'Motor V8',
        'Câmbio Automático',
        'Controle de Tração',
        'Bancos de Couro',
      ],
      newPrice: 220000,
      rating: 4.8,
      stockStatus: 'Sob Encomenda',
    },
    {
      id: 3,
      brand: 'Volkswagen',
      model: 'Golf GTI',
      year: 2018,
      mileageKm: 30000,
      imageUrl: 'assets/images/golf-gti.jpg',
      badge: 'Lançamento',
      features: [
        'Motor Turbo',
        'Câmbio Automático',
        'Navegação GPS',
        'Assistente de Estacionamento',
      ],
      oldPrice: 130000,
      newPrice: 125000,
      rating: 4.6,
      stockStatus: 'Disponível',
      metadata: {
        tag: 'NOVO',
        updatedAt: new Date('2024-04-15'),
      },
    },
  ];

  constructor(private readonly router: Router) {}

  ngOnInit(): void {}

  public navigateToDetails(vehicle: Vehicle): void {
    // Implement navigation logic here, e.g., using Angular Router
    console.log('Navigating to details for:', vehicle);
    this.router.navigate(['details'], {
      queryParams: { vehicleId: vehicle.id },
    });
  }
}
