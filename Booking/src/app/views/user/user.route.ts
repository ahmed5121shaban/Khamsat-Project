import { Route } from '@angular/router'
import { ProfileComponent } from './profile/profile.component'
import { BookingsComponent } from './bookings/bookings.component'
import { SettingsComponent } from './settings/settings.component'
import { TravelersComponent } from './travelers/travelers.component'
import { WishlistComponent } from './wishlist/wishlist.component'
import { PaymentDetailsComponent } from './payment-details/payment-details.component'
import { DeleteProfileComponent } from './delete-profile/delete-profile.component'

export const USER_PAGES_ROUTES: Route[] = [
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'bookings',
    component: BookingsComponent
  },
  {
    path: 'settings',
    component: SettingsComponent
  },
  {
    path: 'travelers',
    component: TravelersComponent
  },
  {
    path: 'wishlist',
    component: WishlistComponent
  },
  {
    path: 'payment-details',
    component: PaymentDetailsComponent
  },
  {
    path: 'delete-profile',
    component: DeleteProfileComponent
  },
]
