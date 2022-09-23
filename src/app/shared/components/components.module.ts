import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {GradientComponent} from './gradient/gradient.component';
import {FadeComponent} from './fade/fade.component';
import {TopnavComponent} from './topnav/topnav.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {ImageComponent} from './image/image.component';

@NgModule({
  declarations: [GradientComponent, FadeComponent, TopnavComponent, ImageComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
  ],
  exports: [
    TopnavComponent,
    FadeComponent,
    GradientComponent,
    ImageComponent,
  ]
})
export class ComponentsModule {
}
