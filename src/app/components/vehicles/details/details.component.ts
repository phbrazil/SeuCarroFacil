import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.navigatetotop();
    console.log('Details component initialized');
  }

  public navigatetotop() {
    const el = document.getElementById('vehicle-details');
    if (el) {
      console.log('Scrolling to vehicle-details element');
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

}
