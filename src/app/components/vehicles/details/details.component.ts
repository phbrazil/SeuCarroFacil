import { Component, OnInit } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  faWhatsapp = faWhatsapp as IconProp;

  constructor() {}
  images: string[] = [
    'assets/img/cars/camaro.JPG',
    'assets/img/cars/camaro.JPG',
    'assets/img/cars/camaro.JPG',
  ];

  ngOnInit(): void {
    this.navigatetotop();
  }

  public navigatetotop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  currentIndex = 0;

  get currentTransform() {
    return `translateX(-${this.currentIndex * 100}%)`;
  }

  prev() {
    this.currentIndex =
      (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }
}
