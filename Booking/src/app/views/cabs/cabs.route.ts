import { Route } from '@angular/router'
import { HomeComponent } from './home/home.component'
import { ListComponent } from './list/list.component'
import { DetailComponent } from './detail/detail.component'
import { BookingComponent } from './booking/booking.component'

export const CABS_ROUTES: Route[] = [
  { path: 'home', component: HomeComponent},
  { path: 'list', component: ListComponent},
  {
    path: 'detail',
    component: DetailComponent
  },
  {
    path: 'booking',
    component: BookingComponent
  },
]
