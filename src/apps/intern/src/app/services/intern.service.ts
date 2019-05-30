import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Image } from '../Models/IImage';
import { Constants } from '../constants/app.constants';
import { constants } from 'os';

@Injectable({
  providedIn: 'root'
})
export class InternService {

  constructor(private httpClient: HttpClient) { }

  public getImages(): Observable<Image[]> {
    return this.httpClient.get<Image[]>(Constants.API.imagesGetAll);
  }
}
