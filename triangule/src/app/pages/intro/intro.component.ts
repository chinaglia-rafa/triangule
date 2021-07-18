import { Component, OnInit } from '@angular/core';
import { slideInAnimation } from 'src/app/animations';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
  animations: [
    slideInAnimation
  ]
})
export class IntroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
