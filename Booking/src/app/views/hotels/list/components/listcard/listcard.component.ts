import { Component, OnInit, ViewChild } from '@angular/core'
import { hotels } from '../../data'
import { TinySliderComponent } from '@/app/components/tiny-slider/tiny-slider.component'
import type { TinySliderSettings } from 'tiny-slider'
import {
  NgbDropdownModule,
  NgbPaginationModule,
  NgbRatingModule,
} from '@ng-bootstrap/ng-bootstrap'
import { RouterModule } from '@angular/router'
import { currency } from '@/app/store'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'list-card',
  standalone: true,
  imports: [
    CommonModule,
    TinySliderComponent,
    NgbRatingModule,
    NgbDropdownModule,
    NgbPaginationModule,
    RouterModule,
  ],
  templateUrl: './listcard.component.html',
  styles: `
    @media (max-width: 780px) {
      .responsive-text {
        flex-direction: column;
      }
      .responsive-text i {
        margin: 0 !important;
      }
      .adress {
        width: 100%;
      }
    }

    @media (min-width: 576px) {
      .responsive-text {
        width: 80%;
        font-size: 0.9rem;
      }
    }

    @media (min-width: 768px) {
      .responsive-text {
        width: 100%;
        font-size: 14px;
      }
      .view-map {
        font-size: 13px;
      }
    }
    .loader {
      width: 400px;
      height: 25px;
      border-radius: 10px;
      border: 2px solid;
      position: relative;
    }
    .loader::before {
      content: '';
      position: absolute;
      margin: 2px;
      inset: 0 100% 0 0;
      border-radius: inherit;
      background: currentColor;
      animation: l6 1s;
    }
    @keyframes l6 {
      100% {
        inset: 0;
      }
    }
  `,
})
export class ListcardComponent implements OnInit {
  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = false
    }, 1000)
  }
  hotelList = hotels
  currencyType = currency
  isLoading: boolean = true
  @ViewChild('listSlider', { static: false }) listSlider: any

  listSliderSettings: TinySliderSettings = {
    arrowKeys: true,
    controlsText: [
      '<i class="bi bi-arrow-left"></i>',
      '<i class="bi bi-arrow-right"></i>',
    ],
    controls: true,
    items: 1,
  }
}
