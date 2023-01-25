import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/internal/operators/map';

@Injectable({
  providedIn: 'root',
})
export class EmailServiceService {
  private api: string = 'https://mailthis.to/jbDepWeb';

  constructor(private http: HttpClient) {}

  sendEmail(input: any) {
    return this.http.post(this.api, input, { responseType: 'text' }).pipe(
      map(
        (response: any) => {
          console.log(response);

          if (response) return response;
        },
        (error: any) => {
          console.log(error);

          return error;
        }
      )
    );
  }
}
