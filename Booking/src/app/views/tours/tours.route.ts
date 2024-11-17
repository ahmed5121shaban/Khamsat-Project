import { Route } from '@angular/router'
import { HomeComponent } from './home/home.component'
import { GridComponent } from './grid/grid.component'
import { DetailComponent } from './detail/detail.component'
import { BookingComponent } from './booking/booking.component'

export const TOURS_ROUTES: Route[] = [
  { path: 'home', component: HomeComponent },
  { path: 'grid', component: GridComponent},
  {
    path: 'detail',
    component: DetailComponent
  },
  {
    path: 'booking',
    component: BookingComponent
  },
]
