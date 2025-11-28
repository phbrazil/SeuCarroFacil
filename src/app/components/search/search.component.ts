import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

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
  public allowModelSelection: boolean = false;

  public selectedMaker: string | null = null;
  public models: any[] = [];
  public makers = [
    {
      name: 'Audi',
      code: 'AU',
      cars: [
        { model: 'A3', year: 2022 },
        { model: 'A4', year: 2023 },
        { model: 'Q5', year: 2024 },
      ],
    },
    {
      name: 'Bentley',
      code: 'BE',
      cars: [
        { model: 'Continental GT', year: 2023 },
        { model: 'Bentayga', year: 2022 },
        { model: 'Flying Spur', year: 2024 },
      ],
    },
    {
      name: 'BMW',
      code: 'BM',
      cars: [
        { model: '320i', year: 2023 },
        { model: 'X5', year: 2024 },
        { model: 'M4', year: 2022 },
      ],
    },
    {
      name: 'Chevrolet',
      code: 'CH',
      cars: [
        { model: 'Camaro SS', year: 2011 },
        { model: 'Onix', year: 2023 },
        { model: 'Tracker', year: 2024 },
      ],
    },
    {
      name: 'Ford',
      code: 'FO',
      cars: [
        { model: 'Mustang GT', year: 2023 },
        { model: 'Ranger', year: 2024 },
        { model: 'Bronco', year: 2023 },
      ],
    },
    {
      name: 'Mercedes-Benz',
      code: 'MB',
      cars: [
        { model: 'C200', year: 2023 },
        { model: 'GLA 200', year: 2024 },
        { model: 'AMG GT', year: 2022 },
      ],
    },
    {
      name: 'Porsche',
      code: 'PO',
      cars: [
        { model: '911 Carrera', year: 2023 },
        { model: 'Cayenne', year: 2024 },
        { model: 'Panamera', year: 2023 },
      ],
    },
  ];

  private baseUrl = 'https://drop-api.ea.com/player';

  constructor(private http: HttpClient) {}

  selectMaker(event: any) {
    const makerName = event.target.value;
    const maker = this.makers.find((m) => m.name === makerName);
    this.models = maker ? maker.cars : [];
    this.selectedMaker = makerName;
  }

  selectModel(event: any) {
    const model = event.target.value;
    console.log('Selected model:', model);
  }

  ngOnInit(): void {}

  public onSearch() {
    console.log(
      'Searching cars with max price:',
      this.maxPrice,
      this.make,
      this.model
    );
  }
}
