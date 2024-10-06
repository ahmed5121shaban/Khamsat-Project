import { Component, inject, ViewChild } from '@angular/core'
import { bookings } from './data'
import { CommonModule } from '@angular/common'
import { NgbAccordionModule, NgbAlert, NgbAlertModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap'
import { SelectFormInputDirective } from '@/app/components/form/select-form-input.directive'
import { RouterModule } from '@angular/router'
import { FormsModule, ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms'
import { currency } from '@/app/store/constants'

@Component({
  selector: 'app-bookings',
  standalone: true,
  imports: [CommonModule,
            NgbPaginationModule,
            SelectFormInputDirective,
            RouterModule,
            FormsModule,
            NgbAccordionModule,
            SelectFormInputDirective,
            NgbAlertModule,
            CommonModule,
            RouterModule,
            FormsModule,
            ReactiveFormsModule,
          ],
  templateUrl: './bookings.component.html',
  styles: ``
})
export class BookingsComponent {
  page = 1
  bookingsData = bookings;
  // Array to store rooms and their respective guests
  rooms: { guests: { firstName: string; lastName: string }[] }[] = [
    { guests: [{ firstName: '', lastName: '' }] },
    { guests: [{ firstName: '', lastName: '' }] }
  ];

  // Add a new room
  addRoom() {
    this.rooms.push({ guests: [{ firstName: '', lastName: '' }] });
  }

  // Add a new guest to a specific room
  addGuest(roomIndex: number) {
    if (this.rooms[roomIndex].guests.length < 4) {
      this.rooms[roomIndex].guests.push({ firstName: '', lastName: '' });
    }
  }

  // Check if the "Add New Guest" button should be displayed for a specific room
  canAddGuest(roomIndex: number): boolean {
    return this.rooms[roomIndex].guests.length < 4;
  }

  // Delete a guest from a specific room
  deleteGuest(roomIndex: number, guestIndex: number) {
    this.rooms[roomIndex].guests.splice(guestIndex, 1);
  }

  // Delete a room
  deleteRoom(roomIndex: number) {
    this.rooms.splice(roomIndex, 1);
  }


  currencyType = currency
  staticAlertClosed = false

  paymentForm!: UntypedFormGroup
  submit = false

  private fb = inject(UntypedFormBuilder)

  @ViewChild('staticAlert', { static: false }) staticAlert!: NgbAlert

  ngOnInit(): void {
    this.paymentForm = this.fb.group({
      cardnumber: ['', [Validators.required]],
      month: ['', [Validators.required]],
      year: ['', [Validators.required]],
      cvv: ['', [Validators.required]],
      name: ['', [Validators.required]],
    })
  }

  get form() {
    return this.paymentForm.controls
  }

  onSubmit() {
    this.submit = true
  }
}
