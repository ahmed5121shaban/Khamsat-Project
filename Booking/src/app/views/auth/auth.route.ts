import { Route } from '@angular/router'
import { SignInComponent } from './sign-in/sign-in.component'
import { SignUpComponent } from './sign-up/sign-up.component'
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component'
import { TwoFactorAuthComponent } from './two-factor-auth/two-factor-auth.component'

export const AUTH_ROUTES: Route[] = [
  { path: 'sign-in', component: SignInComponent},
  { path: 'sign-up', component: SignUpComponent},
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent
  },
  {
    path: 'two-factor-auth',
    component: TwoFactorAuthComponent
  },
]
