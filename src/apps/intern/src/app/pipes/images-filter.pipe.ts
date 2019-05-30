import { Pipe, PipeTransform } from '@angular/core';
import { Image } from '../models/IImage';
@Pipe({
  name: 'imageFilter'
})
export class ImageFilterPipe implements PipeTransform {
  public transform(images: Image[], searchText: string): any[] {
    if (!images) {
      return [];
    }
    if (!searchText) {
      return images;
    }

    searchText = searchText.toLowerCase();
    return images.filter((image: Image) => {
      return image.name.toLowerCase().includes(searchText);
    });
  }
}