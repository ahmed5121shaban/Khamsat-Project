import { Route } from '@angular/router'
import { BookingConfirmedComponent } from './booking-confirmed/booking-confirmed.component'
import { CompareListingComponent } from './compare-listing/compare-listing.component'
import { OfferDetailComponent } from './offer-detail/offer-detail.component'

export const LISTING_PAGES_ROUTES: Route[] = [
  {
    path: 'booking-confirmed',
    component: BookingConfirmedComponent
  },
  {
    path: 'compare-listing',
    component: CompareListingComponent
  },
  {
    path: 'offer-detail',
    component: OfferDetailComponent
  },
]
