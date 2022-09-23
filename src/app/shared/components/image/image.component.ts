import { Component, Input, OnInit } from '@angular/core';
import { Image } from '../../models/image';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  @Input() imageObject!: Image;
  constructor() { }

  ngOnInit(): void {
  }

  getUrl() {
    return this.imageObject.alt === 0 ||(this.imageObject.alt && this.imageObject.alt <= 30) ? this.imageObject.src : ''
  }

}
