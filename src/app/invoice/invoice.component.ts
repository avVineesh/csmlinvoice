import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { InvoiceService } from './invoice.service';
@Component({
  selector: 'app-invoice',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './invoice.component.html',
  styleUrl: './invoice.component.css'
})
export class InvoiceComponent implements OnInit {
logId!: string | null;
  invoicedata: any;

  constructor(@Inject(PLATFORM_ID) private platformId: Object,public service:InvoiceService) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const params = new URLSearchParams(window.location.search);
      this.logId = params.get('logId');
      this.service.id=this.logId;
      this.service.getSummary().subscribe((Response)=>{
        this.invoicedata=Response["Response"][0];
      })
    }
  }
}
