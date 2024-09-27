import { Component } from '@angular/core'
import { ListingWidgetComponent } from './components/listing-widget/listing-widget.component'
import { ListingListComponent } from './components/listing-list/listing-list.component'
import { InvoiceHistoryComponent } from '../earnings/components/invoice-history/invoice-history.component'

@Component({
  selector: 'app-listings',
  standalone: true,
  imports: [ListingWidgetComponent, ListingListComponent,InvoiceHistoryComponent],
  templateUrl: './listings.component.html',
  styles: ``,
})
export class ListingsComponent {}
