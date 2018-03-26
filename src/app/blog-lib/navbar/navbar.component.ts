import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'blog-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() title: string;
  @Output() onNavigate: EventEmitter<string>;

  constructor() {
    this.title = "Default Title...";
    this.onNavigate = new EventEmitter();
  }

  ngOnInit() {
  }

}
