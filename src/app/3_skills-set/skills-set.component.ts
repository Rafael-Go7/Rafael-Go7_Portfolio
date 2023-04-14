import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills-set',
  templateUrl: './skills-set.component.html',
  styleUrls: ['./skills-set.component.scss']
})
export class SkillsSetComponent implements OnInit{
  // skills_row1 = [{'img':'logo_1_Angular_white.svg',
  //               'skillDescription':'Angular'
  //             },
  //             {'img':'logo_2_Typescript_white.svg',
  //             'skillDescription':'Typescript'
  //           },
  //             {'img':'logo_3_JavaScript_white.svg',
  //             'skillDescription':'Javascript'
  //           },
  //             {'img':'logo_4_Html_white.svg',
  //               'skillDescription':'HTML'
  //           },
  //             {'img':'logo_5_Scrum_white.svg',
  //               'skillDescription':'Scrum'
  //             }];

  // skills_row2 = [{'img':'logo_6_Firebase_white.svg',
  //             'skillDescription':'Firebase'
  //           },
  //             {'img':'logo_7_git_white.svg',
  //               'skillDescription':'Git'
  //           },
  //             {'img':'logo_8_CSS_white.svg',
  //               'skillDescription':'CSS'
  //           },
  //             {'img':'logo_9_API_white.svg',
  //               'skillDescription':'API'
  //           },
  //             {'img':'logo_10_materialDesign_white.svg',
  //               'skillDescription':'Material Design'
  //             }];

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
            },
            {'img':'logo_6_Firebase_white.svg',
            'skillDescription':'Firebase'
          },
            {'img':'logo_7_git_white.svg',
              'skillDescription':'Git'
          },
            {'img':'logo_8_CSS_white.svg',
              'skillDescription':'CSS'
          },
            {'img':'logo_9_API_white.svg',
              'skillDescription':'API'
          },
            {'img':'logo_10_materialDesign_white.svg',
              'skillDescription':'Material Design'
            }];

ngOnInit() {
  // this.generateIMGs();
}

// generateIMGs(){
//   for (let index = 0; index < this.icons_IMG.length; index++) {
//     const logo_index = this.icons_IMG[index];
//   }
// }

}
