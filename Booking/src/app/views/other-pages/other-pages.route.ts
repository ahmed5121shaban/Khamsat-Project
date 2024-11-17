import { Route } from '@angular/router'
import { PricingComponent } from './pricing/pricing.component'
import { FaqsComponent } from './faqs/faqs.component'
import { NotFoundComponent } from './not-found/not-found.component'
import { ComingSoonComponent } from './coming-soon/coming-soon.component'

export const OTHER_PAGES_ROUTES: Route[] = [
  { path: 'pricing', component: PricingComponent},
  { path: 'faqs', component: FaqsComponent },
  {
    path: 'not-found',
    component: NotFoundComponent
  },
  {
    path: 'coming-soon',
    component: ComingSoonComponent
  },
]
