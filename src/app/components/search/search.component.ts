import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchComponent implements OnInit {
  public make: string = 'All';
  public model: string = 'All';
  public maxPrice: number | string = 150000;

  public makers = [
    { name: 'Audi', code: 'AU' },
    { name: 'Bentley', code: 'BE' },
    { name: 'BMW', code: 'BM' },
    { name: 'Chevrolet', code: 'CH' },
    { name: 'Ford', code: 'FO' },
    { name: 'Mercedes-Benz', code: 'MB' },
    { name: 'Porsche', code: 'PO' },
  ];

  constructor() {}

  ngOnInit(): void {}

  public selectMaker(select: HTMLSelectElement) {
    this.make = select.value;
  }

  public selectModel(select: HTMLSelectElement) {
    this.model = select.value;
  }

  public onSearch() {
    console.log(
      'Searching cars with max price:',
      this.maxPrice,
      this.make,
      this.model
    );
  }
}
