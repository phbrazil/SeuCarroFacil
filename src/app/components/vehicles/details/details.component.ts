import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  vehicleId: number;

  faWhatsapp = faWhatsapp as IconProp;
  message: string;
  constructor(private readonly router: ActivatedRoute) {}
  images: string[] = [
    'assets/img/cars/camaro.JPG',
    'assets/img/cars/camaro.JPG',
    'assets/img/cars/camaro.JPG',
  ];

  ngOnInit(): void {
    this.vehicleId = Number(
      this.router.snapshot.queryParamMap.get('vehicleId')
    );
    this.message =
      'text=Ol%C3%A1,%20acessei%20seu%20WhatsLink%20pelo%20site.%20Gostaria%20de%20saber%20mais%20sobre%20o%20Chevrolet%20Camaro. ID ' +
      this.vehicleId;

    setTimeout(() => {
      this.navigatetotop();
    }, 300);
  }

  public navigatetotop(): void {
    console.log('navigatetotop');
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
