import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Album } from './album';

@Injectable()
export class ProductService {
  albumInfo;

  private _albumUrl = '../assets/album.json'; 
  private _productService: any;

  constructor(private _http: Http) { }



  getAlbum(id:number):Observable<Album>{
  return this._http.get(this._albumUrl).map(response => <Album>response.json());
    //this._productService.getAlbum(1).subscribe(response => this.albumInfo = response);
  }
 
}
