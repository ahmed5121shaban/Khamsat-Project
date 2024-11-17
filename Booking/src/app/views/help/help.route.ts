import { Route } from '@angular/router'
import { CenterComponent } from './center/center.component'
import { DetailComponent } from './detail/detail.component'
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component'
import { ServiceComponent } from './service/service.component'

export const HELP_ROUTES: Route[] = [
  {
    path: 'center',
    component: CenterComponent
  },
  {
    path: 'detail',
    component: DetailComponent
  },
  {
    path: 'privacy-policy',
    component: PrivacyPolicyComponent
  },
  {
    path: 'service',
    component: ServiceComponent
  },
]
