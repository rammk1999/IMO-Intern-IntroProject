import { Component, OnInit } from '@angular/core';
import { InternService } from 'src/app/services/intern.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  images: Image[];

  constructor(private internService: InternService) {}

  // the promise way
  async ngOnInit() {
    const images = await this.internService.getImages().toPromise();
    console.log('images:', images);

    // console.log('initialiing my request');
    // this.internService.getImages().subscribe().add((images: Image[]) => {
    //   this.images = images;
    //   console.log('images', images);
    //   this.internService.sendImages(images).subscribe(() => {
    //   });
    //   });
    // };

    // the observable way
    // this.internService.getImages().subscribe((images: Image[]) => {
    //   this.images = images;
    //   console.log('images:', images);
    // });
  }
}