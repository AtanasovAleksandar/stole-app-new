import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-rent',
  templateUrl: './rent.page.html',
  styleUrls: ['./rent.page.scss'],
})
export class RentPage implements OnInit {

  searchKey: string;
  array: any = [];
  cars: any = [];

  constructor(private service: LoginService) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.service.getUsers().subscribe(
      data => {
        console.log(data);
        this.array = data;
        this.getCars();
      }
    );
  }

  getCars() {
    
    for (let i = 0; i < this.array.length; i ++ ) {
      // let ol:any = Object.keys(this.array[i]);
      if (this.array[i].model !== undefined) {
        this.cars.push(this.array[i]);
      }
    }
    console.log(this.cars)
  }

}
