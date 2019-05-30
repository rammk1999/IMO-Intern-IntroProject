import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { InternService } from 'src/app/services/intern.service';
import { Image } from '../../Models/IImage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  images: Image[];
  searchText: string;

  constructor(private internService: InternService, private router: Router) {}

  // the promise way
  async ngOnInit() {
    this.images = await this.internService.getImages();

    // the observable way
    // this.internService.getImages().subscribe((images: Image[]) => {
    //   this.images = images;
    //   console.log('images:', images);
    // });
  }

  public goToImage(name: string) {
    this.router.navigate(['/get'], { queryParams: {name}});
  }
}