import { Component, HostListener, OnInit } from '@angular/core';

@Component({
    selector: 'app-header',
    imports: [],
    templateUrl: './header.component.html',
    styleUrl: './header.component.css'
})

export class HeaderComponent implements OnInit {
  
  isClosed = false;

  ngOnInit() {
    this.checkScreenSize();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenSize();
  }

  toggleSidebar() {
    this.isClosed = !this.isClosed;
  }

  private checkScreenSize() {
    const screenWidth = window.innerWidth;
    this.isClosed = screenWidth < 640;
  }

}
