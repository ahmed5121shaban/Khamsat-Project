import { Route } from '@angular/router'
import { DashboardComponent } from './dashboard/dashboard.component'
import { ListingsComponent } from './listings/listings.component'
import { BookingsComponent } from './bookings/bookings.component'
import { ActivitiesComponent } from './activities/activities.component'
import { EarningsComponent } from './earnings/earnings.component'
import { ReviewsComponent } from './reviews/reviews.component'
import { SettingsComponent } from './settings/settings.component'
import { MessagesComponent } from './messages/messages.component'
import { ReportComponent } from './report/report.component'

export const AGENT_ROUTES: Route[] = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'message',
    component: MessagesComponent
  },
  {
    path: 'listings',
    component: ListingsComponent
  },
  {
    path: 'bookings',
    component: BookingsComponent
  },
  {
    path: 'activities',
    component: ActivitiesComponent
  },
  {
    path: 'earnings',
    component: EarningsComponent
  },
  {
    path: 'reviews',
    component: ReviewsComponent
  },
  {
    path: 'settings',
    component: SettingsComponent
  },

]
