import { ChartOptions } from '@/app/core/models/apexchart.model'
import { Component } from '@angular/core'
import { NgApexchartsModule } from 'ng-apexcharts'
import { BookingTrafficComponent } from '../booking-traffic/booking-traffic.component'

@Component({
  selector: 'dashboard-booking-stats',
  standalone: true,
  imports: [NgApexchartsModule, BookingTrafficComponent],
  templateUrl: './booking-stats.component.html',
  styles: ``,
})
export class BookingStatsComponent {
  chartOpts: Partial<ChartOptions> = {
    colors: ['#2163e8'],
    series: [
      {
        name: 'Completed',
        data: [5000, 10000, 25000, 50000, 100000],
      },
    ],
    chart: {
      height: 320,
      type: 'area',
      toolbar: {
        show: false,
      },
    },
    grid: {
      strokeDashArray: 4,
      position: 'back',
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
    },
    legend: {
      show: true,
      horizontalAlign: 'right',
      position: 'top',
      labels: {},
      markers: {
        width: 8,
        height: 8,
      },
    },
    markers: {
      size: 5, // Size of the marker points
      colors: ['#28a745'], // Green color for the marker points
      strokeColors: '#fff', // Optional: stroke around the points
      strokeWidth: 2, // Optional: stroke width
      hover: {
        size: 7, // Marker size when hovered
      },
    },
    xaxis: {
      labels: {
        show: true,
      },
      axisBorder: {
        show: false,
      },
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
    },
    yaxis: {
      min: 5000,  // Minimum Y-axis value
      max: 100000,  // Maximum Y-axis value
      tickAmount: 5,  // Number of ticks between min and max
      labels: {
        style: {
          colors: ['#28a745'], // Green color for the Y-axis labels
        },
        formatter: function (value) {
          const thresholds = [5000, 10000, 25000, 50000, 100000];
          if (thresholds.includes(value)) {
            return value.toLocaleString();  // Convert to string with commas (e.g., 5,000)
          }
          return ''; // Return empty string for other values
        },
      },
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm',
      },
    },
  };
}
