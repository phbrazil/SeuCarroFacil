import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.navigatetotop();
  }

  public navigatetotop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
