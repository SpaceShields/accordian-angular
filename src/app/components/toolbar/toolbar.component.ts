import { Component, OnInit, HostListener, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  expandStatus = 0;

  showFilters: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleFilters() {
    if (this.expandStatus==1) {
      this.expandStatus = 2;
      setTimeout(()=> {
        this.showFilters = false;
      }, 3500);
      setTimeout(()=> {
        this.expandStatus = 0;
      }, 3800);
      
      
    } else if (this.expandStatus==2) {
      this.expandStatus = 1;
      this.showFilters = true;
    } else {
      this.expandStatus = 1;
      this.showFilters = true;
    }
  }

}
