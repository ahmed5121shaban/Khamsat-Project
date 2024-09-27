import { SelectFormInputDirective } from '@/app/components/form/select-form-input.directive'
import { Component } from '@angular/core'
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'

@Component({
  selector: 'booking-guestdetail',
  standalone: true,
  imports: [SelectFormInputDirective, RouterModule,FormsModule],
  templateUrl: './guestdetail.component.html',
  styles: ``,
})
export class GuestdetailComponent {
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
}
