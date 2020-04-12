import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  API = 'http://localhost:5000';
  title = 'Hitting API';

  constructor(private http: HttpClient) {}


  ngOnInit() {
    this.getDataFromExpress();
  }

  getDataFromExpress() {
    this.http.get(this.API)
      .subscribe((data: any) => {
        console.log('DATA:'+data)
        this.title = data.msg
      })
  }
}
