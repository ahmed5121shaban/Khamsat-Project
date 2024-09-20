import { DateFormInputDirective } from '@/app/components/form/date-form-input.directive'
import { SelectFormInputDirective } from '@/app/components/form/select-form-input.directive'
import { Component } from '@angular/core'
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap'
import { FormsModule } from '@angular/forms';


type RoomType = {
  adults: number;
  children: number[]; // Array of numbers (children's ages)
};

type AvailabilityFormType = {
  location: string;
  stayFor: Date | Array<Date>;
  rooms: Array<RoomType>; // Now stores rooms with adults and children
};


@Component({
  selector: 'home-availability-filter',
  standalone: true,
  imports: [
    SelectFormInputDirective,
    DateFormInputDirective,
    NgbDropdownModule,
    FormsModule,
  ],
  templateUrl: './availability-filter.component.html',
})
export class AvailabilityFilterComponent {
  formValue: AvailabilityFormType = {
    location: 'San Jacinto, USA',
    stayFor: [new Date(), new Date(Date.now() + 5 * 24 * 60 * 60 * 1000)],
    rooms: [
      { adults: 2, children: [] } // Start with one room
    ]
  };

  addRoom = () => {
    if (this.formValue.rooms.length < 5) {
      this.formValue.rooms.push({ adults: 2, children: [] });
    }
  };

  removeRoom = (index: number) => {
    if (this.formValue.rooms.length > 1) {
      this.formValue.rooms.splice(index, 1);
    }
  };

  updateRoomGuests = (roomIndex: number, type: 'adults' | 'children', increase: boolean = true) => {
    const room = this.formValue.rooms[roomIndex];

    if (type === 'adults') {
      if (increase && room.adults < 4) {
        room.adults += 1;
      } else if (!increase && room.adults > 1) {
        room.adults -= 1;
      }
    } else if (type === 'children') {
      if (increase && room.children.length < 2) {
        // Allow adding a child only if there are less than 2 children
        room.children.push(0); // Adding a new child with default age of 0
      } else if (!increase && room.children.length > 0) {
        room.children.pop(); // Remove last child
      }
    }
  };
  removeChild = (roomIndex: number, childIndex: number) => {
    this.formValue.rooms[roomIndex].children.splice(childIndex, 1);
  };


  getGuestsValue = (): string => {
    return this.formValue.rooms
      .map((room, index) => {
        const adults = room.adults || 0;
        const childrenCount = room.children.length || 0;
        return `Room ${index + 1}: ${adults} Adult${adults > 1 ? 's' : ''}, ${childrenCount} Child${childrenCount > 1 ? 'ren' : ''}`;
      })
      .join(', ');
  }

}
