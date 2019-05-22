import { Component, OnInit } from '@angular/core';
import { BlogState } from '../store/blog/blog.reducer';
import { Store, select } from '@ngrx/store';
import { SelectLogIn } from '../store/blog/blog.selector';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
