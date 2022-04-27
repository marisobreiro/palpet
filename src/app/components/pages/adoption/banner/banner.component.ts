import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

    @Output() showMessage: EventEmitter<any> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  handleClick() {
      this.showMessage.emit();
  }

}
