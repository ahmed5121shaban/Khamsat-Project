import { Component, Input } from '@angular/core'
import { RouterModule } from '@angular/router'

@Component({
  selector: 'app-logo-box',
  standalone: true,
  imports: [RouterModule],
  template: `
    <a class="navbar-brand" routerLink="/" style="margin-right: 100px !important;">
      @if (onlyDark) {
        <img
          [class]="'navbar-brand-item'"
          src="assets/images/logo.jpg"
          alt="logo"
          style="width: 80px !important;height:80px !important"
        />
      } @else {
        <img
          [class]="
            'navbar-brand-item ' +
            (!onlyDark && 'light-mode-item ') +
            imgClassName
          "
          src="assets/images/logo.jpg"
          alt="logo"
        style="width: 80px !important;height:80px !important"
        />
        <img
          [class]="'dark-mode-item navbar-brand-item ' + imgClassName"
          src="assets/images/logo.jpg"
          alt="logo"
         style="width: 80px !important;height:80px !important"
        />
      }
    </a>
  `,
  styles: `
    :host(app-logo-box) {
      display: contents;
    }
  `,
})
export class LogoBoxComponent {
  @Input() imgClassName?: string
  @Input() onlyDark?: boolean
}
