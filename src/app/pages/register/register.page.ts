import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, MenuController, LoadingController } from '@ionic/angular';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  public onRegisterForm: FormGroup;
  name: string;
  password: string;
  fullname: string;
  email: string;
  user: any = {'id': 0, 'fullname': '', 'password': this.password, 'email': ''};

  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public loadingCtrl: LoadingController,
    private formBuilder: FormBuilder,
    public loginService: LoginService
  ) { }

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

  

  ngOnInit() {
    // this.onRegisterForm = this.formBuilder.group({
    //   'fullname': ['', Validators.compose([
    //     Validators.required
    //   ])],
    //   'email': ['', Validators.compose([
    //     Validators.required
    //   ])],
    //   'password': ['', Validators.compose([
    //     Validators.required
    //   ])],
    //   'model': ['', Validators.compose([
    //     Validators.required
    //   ])],
    //   'imageUrl': ['', Validators.compose([
    //     Validators.required
    //   ])],
    //   'location': ['', Validators.compose([
    //     Validators.required
    //   ])],
    //   'description': ['', Validators.compose([
    //     Validators.required
    //   ])],
    //   'km': ['', Validators.compose([
    //     Validators.required
    //   ])],
    //   'price': ['', Validators.compose([
    //     Validators.required
    //   ])]
    // });
  }

  registerUser() {
    // this.user = {'fullname': this.fullname, 'password': this.password, 'email': this.email}
console.log(this.user)
    // let user = this.onRegisterForm.value;
    this.loginService.registerUser(this.user).subscribe(
      user => {
        console.log(user);
        this.navCtrl.navigateRoot('/');
      }
    );

  }

  async signUp() {
    const loader = await this.loadingCtrl.create({
      duration: 2000
    });

    loader.present();
    loader.onWillDismiss().then(() => {
      this.navCtrl.navigateRoot('/home-results');
    });
  }

  // // //
  goToLogin() {
    this.navCtrl.navigateRoot('/');
  }
}
