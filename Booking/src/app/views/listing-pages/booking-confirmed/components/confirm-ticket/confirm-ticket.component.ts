import { currency } from '@/app/store'
import { Component } from '@angular/core'
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'booking-confirm-ticket',
  standalone: true,
  imports: [NgbDropdownModule],
  templateUrl: './confirm-ticket.component.html',
  styles: [`
  .loader-container{
    height:60vh;
  }
    .loader {
  width: 400px;
  height: 16px;
  border-radius: 20px;
/*color: #514b82;*/
  border: 2px solid;
  position: relative;
}
.loader::before {
  content: "";
  position: absolute;
  margin: 2px;
  inset: 0 100% 0 0;
  border-radius: inherit;
  background: currentColor;
  animation: l6 10s;
}
@keyframes l6 {
    100% {inset:0}
}
  `],
})
export class ConfirmTicketComponent {
  currencyType = currency;
  isLoading: boolean = true;

  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = false;
    }, 10000);
  }
}
