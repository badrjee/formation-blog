import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../aticle';

@Component({
  selector: 'blog-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

@Input() articles: Array<Article>

  constructor() { }

  ngOnInit() {
  }

}
