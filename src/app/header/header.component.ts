import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isMobile = window.innerWidth <= 1023;

  constructor() { }

  ngOnInit() { }

  showMenu(){
    let navbar = document.getElementById('navbar');
    navbar.classList.remove('desktop-only');
    navbar.classList.remove('hide-menu');
    navbar.classList.add('show-menu');
  }
}
