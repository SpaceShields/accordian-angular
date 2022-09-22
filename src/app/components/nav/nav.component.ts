import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  showFilters: boolean = false;

  changeContent(){
    this.showFilters = !this.showFilters;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
