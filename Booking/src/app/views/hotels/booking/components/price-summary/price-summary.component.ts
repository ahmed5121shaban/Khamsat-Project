import { StickyDirective } from '@/app/directives/sticky.directive'
import { currency } from '@/app/store'
import { Component } from '@angular/core'
import { ScrollToModule, ScrollToService } from '@nicky-lenaers/ngx-scroll-to'

@Component({
  selector: 'booking-price-summary',
  standalone: true,
  imports: [StickyDirective,ScrollToModule],
  templateUrl: './price-summary.component.html',
  styles: `
  @media (min-width: 992px) {
    .sticky-card {
      position: sticky;
      top: 20px;
    }
  }`,
  providers: [ScrollToService],
})
export class PriceSummaryComponent {
  currencyType = currency
}
