import { AuthService } from './../_services/auth.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @Output() cancelRegister = new EventEmitter();
  model: any = {};

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  register(): void {
    this.auth.register(this.model).subscribe(() => {
      console.log('registration successfully');
    }, e => {
      console.log(e);
    });
  }

  cancel(): void {
    this.cancelRegister.emit(false);
  }

}
