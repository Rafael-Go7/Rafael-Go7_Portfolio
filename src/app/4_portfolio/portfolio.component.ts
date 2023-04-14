import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit{
  skills_row1 = [{'img':'logo_1_Angular_white.svg',
                  'skillDescription':'Angular'
                },
                {'img':'logo_2_Typescript_white.svg',
                'skillDescription':'Typescript'
                },
                {'img':'logo_3_JavaScript_white.svg',
                'skillDescription':'Javascript'
                },
                {'img':'logo_4_Html_white.svg',
                  'skillDescription':'HTML'
                },
                {'img':'logo_5_Scrum_white.svg',
                  'skillDescription':'Scrum'
                }];

ngOnInit() {
}
}
