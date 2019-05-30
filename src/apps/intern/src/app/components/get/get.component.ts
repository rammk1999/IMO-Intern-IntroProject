import { Component, OnInit } from '@angular/core';
import { InternService } from 'src/app/services/intern.service';
import { Image } from 'src/app/Models/IImage';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { async } from 'q';

@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.css']
})
export class GetComponent implements OnInit {

  image: Image;

  constructor(private internService: InternService, private activatedRoute: ActivatedRoute) { }

  async ngOnInit() {
    this.activatedRoute.queryParams.subscribe(async (params: Params) => {
      const name = params['name']
      this.image = await this.internService.getImage(name);
    });
  }

}
