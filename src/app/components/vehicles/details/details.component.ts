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
  }

  public navigatetotop(): void {
    // guard in case code runs on the server (Angular Universal)
    if (typeof window === 'undefined' || typeof document === 'undefined') {
      return;
    }

    const el = document.getElementById('vehicle-details');
    if (el) {
      console.log('Scrolling to vehicle-details element');
      try {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } catch {
        // fallback if scrollIntoView with options is not supported
        const top = el.getBoundingClientRect().top + window.pageYOffset;
        try {
          window.scrollTo({ top, behavior: 'smooth' });
        } catch {
          window.scrollTo(0, top);
        }
      }
    } else {
      try {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } catch {
        window.scrollTo(0, 0);
      }
    }
  }

}
