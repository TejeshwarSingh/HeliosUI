import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReqLogService {
  constructor(protected http: HttpClient) {}
  skip = 0  ;
  url  = '';
  getList(page: number, pagesize: number, where?: String): Observable<any> {
    
    this.skip = page * pagesize;
    
    this.url = `http://localhost:3020/rest-api-req-log?skip=${this.skip}&take=${pagesize}&order={"logId": "DESC"}`;

    if (where) {
      this.url += '&where=' + where;
    }
    return this.http.get<any>(
      this.url
    );
  }
}
