import { AlertifyService } from './../_services/alertify.service';
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

  constructor(private auth: AuthService, private alertify: AlertifyService) { }

  ngOnInit(): void {
  }

  register(): void {
    this.auth.register(this.model).subscribe(() => {
      this.alertify.success('registration successfully');
    }, e => {
      this.alertify.error(e);
    });
  }

  cancel(): void {
    this.cancelRegister.emit(false);
  }

}
