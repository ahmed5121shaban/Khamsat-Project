import { ChartOptions } from '@/app/core/models/apexchart.model'
import { Component } from '@angular/core'
import { NgApexchartsModule } from 'ng-apexcharts'

@Component({
  selector: 'dashboard-booking-traffic',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './booking-traffic.component.html',
  styles: ``,
})
export class BookingTrafficComponent {
  getRootColor = (color: string): string => {
    const selector = document.querySelector(':root')
    if (selector)
      return window.getComputedStyle(selector).getPropertyValue(color)
    else return '#5143d9'
  }

  trafficChart: Partial<ChartOptions> = {
    series: [70, 20, 10],
    labels: [ 'Completed Booking', 'Confirmed Booking', 'Canceled Booking'],
    chart: {
      height: 200,
      width: 200,
      offsetX: 0,
      type: 'donut',
      sparkline: {
        enabled: true,
      },
    },
    colors: [
      this.getRootColor('--bs-success'),
      this.getRootColor('--bs-warning'),
      this.getRootColor('--bs-danger'),
    ],
    tooltip: {
      theme: 'dark',
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
            height: 200,
          },
          legend: {
            position: 'bottom',
          },
        },
      },
    ],
  }
}
