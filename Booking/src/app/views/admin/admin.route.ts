import { Route } from '@angular/router'
import { DashboardComponent } from './dashboard/dashboard.component'
import { ListComponent } from './bookings/list/list.component'
import { DetailComponent } from './bookings/detail/detail.component'
import { ListsComponent } from './guests/list/list.component'
import { DetailsComponent } from './guests/detail/detail.component'
import { AgentListComponent } from './agents/agent-list/agent-list.component'
import { AgentDetailComponent } from './agents/agent-detail/agent-detail.component'
import { ReviewsComponent } from './reviews/reviews.component'
import { EarningsComponent } from './earnings/earnings.component'
import { SettingsComponent } from './settings/settings.component'

export const ADMIN_ROUTES: Route[] = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'bookings/list',
    component: ListComponent
  },
  {
    path: 'bookings/detail',
    component: DetailComponent
  },
  {
    path: 'guests/list',
    component: ListsComponent
  },
  {
    path: 'guests/detail',
    component: DetailsComponent
  },
  {
    path: 'agents/list',
    component: AgentListComponent
  },
  {
    path: 'agents/detail',
    component: AgentDetailComponent
  },
  {
    path: 'reviews',
    component: ReviewsComponent
  },
  {
    path: 'earnings',
    component: EarningsComponent
  },
  {
    path: 'settings',
    component: SettingsComponent
  },
]
