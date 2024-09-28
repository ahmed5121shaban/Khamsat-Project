import { Component, OnInit } from '@angular/core';
import { currency } from '@/app/store';
import { invoiceHistory } from '../earnings/data';
import { SelectFormInputDirective } from '@/app/components/form/select-form-input.directive';
import { NgbDropdownModule, NgbPaginationModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-messages',
  standalone:true,
  imports:[
    SelectFormInputDirective,
    NgbDropdownModule,
    CommonModule,
    NgbTooltipModule,
    NgbPaginationModule,
  ],
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  page = 1
  invoiceHistoryData = invoiceHistory
  currencyType = currency
  constructor() { }

  ngOnInit() {
  }

}
