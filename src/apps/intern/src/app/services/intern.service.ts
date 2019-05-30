import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Image } from '../Models/IImage';
import { Constants } from '../constants/app.constants';

@Injectable({
  providedIn: 'root'
})
export class InternService {

  constructor(private httpClient: HttpClient) { }

  public getImages(): Promise<Image[]> {
    return this.httpClient.get<Image[]>(Constants.API.imagesGetAll).toPromise();
  }

  public getImage(name: string): Promise<Image> {
    return this.httpClient.get<Image>(Constants.API.imagesGet(name)).toPromise();
  }
}
