import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-edin-button',
  templateUrl: './edin-button.component.html',
  styleUrls: ['./edin-button.component.scss'],
})
export class EdinButtonComponent implements OnInit {
  @Input('textbutton') Textbuttoninput:any;

  constructor() {

    this.Textbuttoninput;
   }

  ngOnInit() {}

}
