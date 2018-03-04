import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/auth.service';
import { AngularFirestore } from 'angularfire2/firestore';
import { FormGroup, FormBuilder, Validators, AbstractControl} from '@angular/forms';
import { map, take, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private afs: AngularFirestore, private fb: FormBuilder, public auth: AuthService) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      email:  ['', [
        Validators.required,
        Validators.email
      ]],
      username:  ['',
        Validators.required,
        CustomValidator.username(this.afs)
      ],
      password: ['', [
        Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
        Validators.minLength(6),
        Validators.maxLength(25),
        Validators.required
        ]
      ],
    });

  }

  // Use getters for cleaner HTML code
  get email() { return this.registerForm.get('email') }

  get password() { return this.registerForm.get('password') }

  get username() { return this.registerForm.get('username') }

  register() {
    return this.auth.emailSignUp(this.email.value, this.password.value)
  }
}


// interface Validator<T extends FormControl> {
//   (c:T): {[error: string]:any};
// }

export class CustomValidator {
  static username(afs: AngularFirestore) {
    return (control: AbstractControl) => {

      const username = control.value.toLowerCase();
      console.log("test if customs")
      return afs.collection('users', ref => ref.where('uid', '==', username) )

        .valueChanges().pipe(
          debounceTime(500),
          take(1),
          map(arr => arr.length ? { usernameAvailable: false } : null ),
        )
    }
  }

}
