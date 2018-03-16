import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/auth.service';
import { AngularFirestore } from 'angularfire2/firestore';
import { FormGroup, FormBuilder, Validators, AbstractControl} from '@angular/forms';
import { map, take, debounceTime } from 'rxjs/operators';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


    registerForm: FormGroup;

    constructor(private afs: AngularFirestore,
                private fb: FormBuilder,
                public auth: AuthService,
                private router: Router) { }

    ngOnInit() {
      this.registerForm = this.fb.group({
        email:  ['', [
          Validators.required,
          Validators.email
        ]],
        password: ['', []
        ],
      });

    }

    // Use getters for cleaner HTML code
    get email() { return this.registerForm.get('email') }

    get password() { return this.registerForm.get('password') }

    login(user) {
      return this.auth.emailLogin(this.email.value, this.password.value).then((error) =>
      {if (error)
        this.router.navigate(['/'])
      else
        this.router.navigate(['/login'])})
    }

    resetPassword() {
      alert("If your email is valid, a password reset form will be emailed!")
      return this.auth.resetPassword(this.email.value);
    }
  }
