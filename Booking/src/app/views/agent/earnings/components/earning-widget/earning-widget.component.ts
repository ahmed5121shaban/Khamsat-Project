import { currency } from '@/app/store'
import { Component } from '@angular/core'
import { RouterModule } from '@angular/router'
import { NgbDropdownModule, NgbPaginationModule, NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap'
import { invoiceHistory } from '../../data'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'earning-widget',
  standalone: true,
  imports: [NgbDropdownModule, NgbPopoverModule,RouterModule,NgbPaginationModule,CommonModule],
  templateUrl: './earning-widget.component.html',
  styles: ``,
})
export class EarningWidgetComponent {
  currencyType = currency
  page = 1
  invoiceHistoryData = invoiceHistory
}
