import { Component } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  api: string;
  environment: string;

  constructor() {
    this.api = environment.api;
    this.environment = environment.name;
    console.log(this.environment);
    console.log(this.api);
  }

}
