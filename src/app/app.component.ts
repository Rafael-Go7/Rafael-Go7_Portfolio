import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

import AOS from 'node_modules/aos/dist/aos.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Rafael-Go7_Portfolio';

constructor(public router: Router){}

ngOnInit(){
  AOS.init();   

}


}
