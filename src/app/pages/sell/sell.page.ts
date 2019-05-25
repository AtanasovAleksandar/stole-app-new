import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.page.html',
  styleUrls: ['./sell.page.scss'],
})
export class SellPage implements OnInit {
  public onCarListForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  // ionViewWillEnter() {
  //   this.menuCtrl.enable(false);
  // }

  ngOnInit() {
    this.onCarListForm = this.formBuilder.group({
      'carName': [null, Validators.compose([
        Validators.required
      ])],
      'location': [null, Validators.compose([
        Validators.required
      ])],
      'year': [null, Validators.compose([
        Validators.required
      ])],
      'start-date': [null, Validators.compose([
        Validators.required
      ])],
      'end-date': [null, Validators.compose([
        Validators.required
      ])]
    });
  }
}
