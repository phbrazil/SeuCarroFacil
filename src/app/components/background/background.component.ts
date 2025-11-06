import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BackgroundComponent implements OnInit {
  images = [
    'assets/img/cars/320i-prata.JPG',
    'assets/img/cars/a3-ambition-preto.JPG',
    'assets/img/cars/a3-azul.JPG',
    'assets/img/cars/altis-preto.JPG',
    'assets/img/cars/bmw-318i.JPG',
    'assets/img/cars/320i-prata.JPG',
    'assets/img/cars/a3-ambition-preto.JPG',
    'assets/img/cars/a3-azul.JPG',
    'assets/img/cars/altis-preto.JPG',
    'assets/img/cars/bmw-318i.JPG',
    'assets/img/cars/320i-prata.JPG',
    'assets/img/cars/a3-ambition-preto.JPG',
    'assets/img/cars/a3-azul.JPG',
    'assets/img/cars/altis-preto.JPG',
    'assets/img/cars/bmw-318i.JPG',
    'assets/img/cars/320i-prata.JPG',
    'assets/img/cars/a3-ambition-preto.JPG',
    'assets/img/cars/a3-azul.JPG',
    'assets/img/cars/altis-preto.JPG',
    'assets/img/cars/bmw-318i.JPG',
    'assets/img/cars/320i-prata.JPG',
    'assets/img/cars/a3-ambition-preto.JPG',
    'assets/img/cars/a3-azul.JPG',
    'assets/img/cars/altis-preto.JPG',
    'assets/img/cars/bmw-318i.JPG',
    'assets/img/cars/320i-prata.JPG',
    'assets/img/cars/a3-ambition-preto.JPG',
    'assets/img/cars/a3-azul.JPG',
    'assets/img/cars/altis-preto.JPG',
    'assets/img/cars/bmw-318i.JPG',
    'assets/img/cars/320i-prata.JPG',
    'assets/img/cars/a3-ambition-preto.JPG',
    'assets/img/cars/a3-azul.JPG',
    'assets/img/cars/altis-preto.JPG',
    'assets/img/cars/bmw-318i.JPG',
    'assets/img/cars/320i-prata.JPG',
    'assets/img/cars/a3-ambition-preto.JPG',
    'assets/img/cars/a3-azul.JPG',
    'assets/img/cars/altis-preto.JPG',
    'assets/img/cars/bmw-318i.JPG',
    'assets/img/cars/320i-prata.JPG',
    'assets/img/cars/a3-ambition-preto.JPG',
    'assets/img/cars/a3-azul.JPG',
    'assets/img/cars/altis-preto.JPG',
    'assets/img/cars/bmw-318i.JPG',
    'assets/img/cars/320i-prata.JPG',
    'assets/img/cars/a3-ambition-preto.JPG',
    'assets/img/cars/a3-azul.JPG',
    'assets/img/cars/altis-preto.JPG',
    'assets/img/cars/bmw-318i.JPG',
    'assets/img/cars/320i-prata.JPG',
    'assets/img/cars/a3-ambition-preto.JPG',
    'assets/img/cars/a3-azul.JPG',
    'assets/img/cars/altis-preto.JPG',
    'assets/img/cars/bmw-318i.JPG',
    'assets/img/cars/320i-prata.JPG',
    'assets/img/cars/a3-ambition-preto.JPG',
    'assets/img/cars/a3-azul.JPG',
    'assets/img/cars/altis-preto.JPG',
    'assets/img/cars/bmw-318i.JPG',
  ];

  constructor() {}

  ngOnInit(): void {}

  public getRandomHeight(): string {
    const min = 10; // set a minimum if you want
    const max = 25;
    const random = Math.random() * (max - min) + min;
    return `${random}vh`;
  }
}
