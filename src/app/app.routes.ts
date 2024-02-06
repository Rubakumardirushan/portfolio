import { Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';

import { ProjectComponent } from './components/project/project.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
export const routes: Routes = [{ path: 'about', component: AboutComponent },{
  path:'skills', component:SkillsComponent
},{
  path:'contact',component:ContactComponent
},{
  path:'project',component:ProjectComponent
},{
  path:'',component:HomeComponent
}];
