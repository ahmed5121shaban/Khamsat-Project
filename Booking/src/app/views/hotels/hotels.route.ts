import { Route } from '@angular/router'
import { HomeComponent } from './home/home.component'
import { ChainComponent } from './chain/chain.component'
import { ResortComponent } from './resort/resort.component'
import { GridComponent } from './grid/grid.component'
import { ListComponent } from './list/list.component'
import { DetailComponent } from './detail/detail.component'
import { RoomDetailComponent } from './room-detail/room-detail.component'
import { BookingComponent } from './booking/booking.component'

export const HOTEL_ROUTES: Route[] = [
  { path: 'home', component: HomeComponent },
  {
    path: 'chain',
    component: ChainComponent
  },
  {
    path: 'resort',
    component: ResortComponent
  },
  { path: 'grid', component: GridComponent},
  { path: 'list', component: ListComponent},
  {
    path: 'detail',
    component: DetailComponent
  },
  {
    path: 'room-detail',
    component: RoomDetailComponent
  },
  {
    path: 'booking',
    component: BookingComponent
  },
]
