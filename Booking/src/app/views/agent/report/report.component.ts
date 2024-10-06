import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  title = 'Booking Report';

 /*  // Method to download PDF
  downloadPDF() {
    const element = document.getElementById('exampleModalLabel'); // Use the ID of the div you want to print
    const options = {
      margin:       1,
      filename:     'booking-report.pdf',
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2 },
      jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    html2pdf().from(element).set(options).save();
  }
 */
}


