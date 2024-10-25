import { Component } from '@angular/core'

@Component({
  selector: 'detail-policies',
  standalone: true,
  imports: [],
  templateUrl: './policies.component.html',
  styles: `
    :host(detail-policies) {
      display: contents !important;
    }
  `,
})
export class PoliciesComponent {
  policies = [
    'Check-in: After 2:00 pm',
    'Check out: Before 12:00 am',
    'Self-check-in or by a reception with hotel staff',
    'No pets in most hotels',
    'Many hotels are non-smoking; designated smoking areas may be available',
  ]
}
