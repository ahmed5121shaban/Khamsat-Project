import { Component } from '@angular/core'
import { recentActivities } from './data'
import { SelectFormInputDirective } from '@/app/components/form/select-form-input.directive'
import { DateFormInputDirective } from '@/app/components/form/date-form-input.directive'
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-activities',
  standalone: true,
  imports: [  SelectFormInputDirective,
              DateFormInputDirective,
              FormsModule],
  templateUrl: './activities.component.html',
  styles: ``,
})
export class ActivitiesComponent {
  recentActivities = recentActivities;
  selectedOrder: string | null = null;
  selectedDateType: string | null = null;

  updateNights(selectedDates: Date[], dateStr: string, instance: any) {
    const checkIn = selectedDates[0];
    const checkOut = selectedDates[1];
    if (checkIn && checkOut) {
      const diffTime = Math.abs(checkOut.getTime() - checkIn.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); // Calculate difference in days

      const formattedDate = `${checkIn.getDate()} ${checkIn.toLocaleString('default', { month: 'short' })} to ${checkOut.getDate()} ${checkOut.toLocaleString('default', { month: 'short' })}   |   ${diffDays} nights`;
      instance.input.value = formattedDate; // Update the input value
    }
  }
}
