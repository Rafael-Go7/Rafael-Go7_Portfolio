import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';  // import router-links module

import AOS from 'node_modules/aos/dist/aos.js'; // import AOS module manually

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Rafael-Go7_Portfolio';

constructor(public router: Router){}    // important for the usage of router-links

ngOnInit(){
  AOS.init();   

}


}
