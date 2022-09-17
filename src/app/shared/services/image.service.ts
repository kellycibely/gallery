import { Injectable } from '@angular/core';
import { Image } from '../models/image';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  private API: string = 'https://picsum.photos/';

  constructor() { }

  private getImage(): Image {
    const width: string = (Math.random() * (2000 - 600 + 1) + 600).toFixed();
    const height: string = (Math.random() * (1000 - 300 + 1) + 300).toFixed();
    return {  src: this.API+`${width}/${height}/?radom`,
              width: Number(width),
              height: Number(height)
            };
  }

  public getImagemList(sizeList: number): Image[] {
    const images: Image[] = [];  
    for (let i = 0; i < sizeList; i++) {
        const image = this.getImage();
        image.alt = i;
        images.push(image);
      }

      return images;
  }
}
