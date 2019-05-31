import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  template:`<p class="alert-danger">
    This is a warning, you are in danger!
  </p>` ,
  styles: [`p {
  padding: 20px;
}
`]
})
export class WarningAlertComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
