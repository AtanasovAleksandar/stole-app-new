import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.page.html',
  styleUrls: ['./sell.page.scss'],
})
export class SellPage implements OnInit {
  public onCarListForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService
  ) { }

  // ionViewWillEnter() {
  //   this.menuCtrl.enable(false);
  // }

  ngOnInit() {
    this.onCarListForm = this.formBuilder.group({
      'model': [null, Validators.compose([
        Validators.required
      ])],
      'location': [null, Validators.compose([
        Validators.required
      ])],
      'year': [null, Validators.compose([
        Validators.required
      ])],
      'startDate': [null, Validators.compose([
        Validators.required
      ])],
      'endDate': [null, Validators.compose([
        Validators.required
      ])],
      'description': [null, Validators.compose([
        Validators.required
      ])]
    });
  }

  onPublish() {
    console.log(this.onCarListForm.value);
    this.loginService.registerUser(this.onCarListForm.value).subscribe();
  }


}
