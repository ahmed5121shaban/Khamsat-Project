import { Route } from '@angular/router'
import { AddComponent } from './add/add.component'
import { JoinUsComponent } from './join-us/join-us.component'
import { AddMinimalComponent } from './add-minimal/add-minimal.component'
import { AddedComponent } from './added/added.component'

export const LISTINGS_ROUTES: Route[] = [
  {
    path: 'join-us',
    component: JoinUsComponent
  },
  {
    path: 'add',
    component: AddComponent
  },
  {
    path: 'add-minimal',
    component: AddMinimalComponent
  },
  {
    path: 'added',
    component: AddedComponent
  },
]
