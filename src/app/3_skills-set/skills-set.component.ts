import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills-set',
  templateUrl: './skills-set.component.html',
  styleUrls: ['./skills-set.component.scss']
})
export class SkillsSetComponent implements OnInit{
  // let icons_IMG: Array<IMG>;
  icons_IMG = ['logo_1_Angular_white.svg',
               'logo_2_Typescript_white.svg',
               'logo_3_JavaScript_white.svg',
                'logo_4_Html_white.svg',
                'logo_5_Scrum_white.svg',
                'logo_6_Firebase_white.svg',
                'logo_7_git_white.svg',
                'logo_8_CSS_white.svg',
                'logo_9_API_white.svg',
                'logo_10_materialDesign_white.svg'];

ngOnInit() {

  this.generateIMGs();

}

generateIMGs(){
  for (let index = 0; index < icons_IMG.length; index++) {
    const logo_index = icons_IMG[index];
    
  }
}
}
