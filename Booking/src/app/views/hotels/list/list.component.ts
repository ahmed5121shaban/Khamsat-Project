import { Component,AfterViewInit, Renderer2  } from '@angular/core'
import { TopbarComponent } from './components/topbar/topbar.component'
import { BannerComponent } from './components/banner/banner.component'
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap'
import { ListcardComponent } from './components/listcard/listcard.component'
import { FilterOffcanvasComponent } from './components/filter-offcanvas/filter-offcanvas.component'
import { FilterbarComponent } from './components/filterbar/filterbar.component'
import { Footer1Component } from './components/footer1/footer1.component'
import { RouterModule } from '@angular/router'
import * as L from 'leaflet';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    TopbarComponent,
    BannerComponent,
    NgbAlertModule,
    ListcardComponent,
    FilterbarComponent,
    FilterOffcanvasComponent,
    Footer1Component,
    RouterModule,
  ],
  templateUrl: './list.component.html',
  styles: `
   `,
})
export class ListComponent implements AfterViewInit {

  staticAlertClosed = false;
  private map!: L.Map
  private smallMap!: L.Map;

  private initMap(): void {
    if (this.map) {
      this.map.invalidateSize(); // Adjust map size if it's already initialized
    } else {
      this.map = L.map('map', {
        center: [20, 0],
        zoom: 2,
      });

  const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    minZoom: 3,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  });

  tiles.addTo(this.map);

   // Sample hotel data
   const hotels: { name: string; location: [number, number] }[] = [
    { name: 'Hotel A', location: [40.7128, -74.0060] }, // New York
    { name: 'Hotel B', location: [51.5074, -0.1278] }, // London
    { name: 'Hotel C', location: [35.6895, 139.6917] }, // Tokyo
    { name: 'Hotel D', location: [48.8566, 2.3522] }, // Paris
  ];

     // Function to create a custom marker
     const createCustomMarker = (iconClass: string) => {
      const iconDiv = L.divIcon({
        className: 'custom-icon',
        html: `<i class="${iconClass}"></i>`, // Font Awesome icon
        iconSize: [30, 40], // Adjust size as needed
        iconAnchor: [15, 40],
        popupAnchor: [0, -40],
      });
      return iconDiv;
    };

    // Add markers for each hotel using the custom Font Awesome icon
    hotels.forEach(hotel => {
      const customIcon = createCustomMarker('fas fa-hotel text-danger'); // Change the icon class as needed
      L.marker(hotel.location, { icon: customIcon })
        .addTo(this.map)
        .bindPopup(hotel.name);
    });


}
  }
  constructor(private renderer: Renderer2) { }

  ngAfterViewInit(): void {
    this.initMap();
    this.initializeInlineMap();
    const offcanvasMap = document.getElementById('offcanvasMap');
  if (offcanvasMap) {
    this.renderer.listen(offcanvasMap, 'shown.bs.offcanvas', () => {
      this.map.invalidateSize(); // Refreshes the map size when the offcanvas is opened
    });
  }
  }
  initializeMap(): void {
    this.map = L.map('map').setView([30.0444, 31.2357], 10); // Set to Cairo, Egypt, adjust as needed

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap'
    }).addTo(this.map);

    // Optional: Add a marker
    L.marker([30.0444, 31.2357]).addTo(this.map)
      .bindPopup('Cairo, Egypt')
      .openPopup();
  }
  private initializeInlineMap(): void {
    this.smallMap = L.map('smallMap', {
      zoomControl: false,   // Remove zoom controls to keep it minimal
      attributionControl: false // Hide attribution for a cleaner look
    }).setView([40.7128, -74.0060], 12); // Set to New York, adjust as needed

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
    }).addTo(this.smallMap);
  }

}
