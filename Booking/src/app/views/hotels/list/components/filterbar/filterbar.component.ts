import { currency } from '@/app/store'
import { NgxSliderModule, type Options } from '@angular-slider/ngx-slider'

import { Component } from '@angular/core'
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'list-filterbar',
  standalone: true,
  imports: [NgbCollapseModule,NgxSliderModule,],
  templateUrl: './filterbar.component.html',
  styles: ``,
})
export class FilterbarComponent {
  isCollapsed = true
  currencyType = currency
  amenitiesCollapsed = true

    // Range slider value set
    value: number = 700.0
    highValue: number = 1500.0
    options: Options = {
      floor: 500,
      ceil: 2000,
    }
}
