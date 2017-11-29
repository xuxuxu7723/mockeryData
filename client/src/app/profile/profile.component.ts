import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {UserService} from "../_service/index";
import {SessionService} from "../_service/session.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
  error: string;

  constructor(private userService: UserService, private sessionService: SessionService) {
  }

  ngOnInit() {
    this.profileForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      username: new FormControl('', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(10)])),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
      confirmedPassword: new FormControl('', Validators.required)
    }, this.formGroupValidator);
    this.profileForm.patchValue(this.sessionService.getUser());
  }

  formGroupValidator(formGroup: FormGroup) {
    const res = {pswNotMatch: false};
    // check password equality
    if (formGroup.controls['password'].value != formGroup.controls['confirmedPassword'].value) {
      res.pswNotMatch = true;
    }
    return !res.pswNotMatch ? null : res;
  }

  update(updateUser) {
    delete updateUser.confirmedPassword;
    this.userService.updateUser(this.sessionService.getUser().id, updateUser)
      .subscribe(
        data => {
          alert("Profile updated!")
        },
        error => {
          console.log(error);
          this.error = error._body;
        });
  }


}