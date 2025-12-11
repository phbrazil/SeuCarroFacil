import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SubscribeService } from 'src/app/_services/subscribe.service';
import {
  faFacebookF,
  faInstagram,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class FooterComponent implements OnInit {
  isLoading: boolean = false;

  faFacebook = faFacebookF as IconProp;
  faInstagram = faInstagram as IconProp;
  faWhatsapp = faWhatsapp as IconProp;

  subscribeForm: FormGroup;

  subscribed: boolean = false;

  visible: boolean = false;

  message: string =
    'text=Ol%C3%A1,%20acessei%20seu%20WhatsLink%20pelo%20site.%20Gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os.';

  constructor(
    private fb: FormBuilder,
    private subscribeService: SubscribeService
  ) {}

  ngOnInit(): void {
    this.subscribeForm = this.fb.group({
      email: ['', Validators.required],
    });
  }

  submit() {
    this.isLoading = true;

    this.subscribeService.subscribe(this.subscribeForm.value.email).subscribe(
      (res) => {
        if (res) {
          this.subscribed = true;
          this.subscribeForm.reset();
        }
        this.isLoading = false;
      },
      (_err) => {
        this.isLoading = false;
      }
    );
  }

  public openModal(modalId: string) {
    console.log('openModal', modalId);
    this.visible = true;
  }
}
