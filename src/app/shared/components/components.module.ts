import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GalleryComponent } from './gallery/gallery.component';
import { GradientComponent } from './gradient/gradient.component';
import { FadeComponent } from './fade/fade.component';


@NgModule({
  declarations: [GalleryComponent, GradientComponent, FadeComponent],
  imports: [
    CommonModule
  ],
  exports: [GalleryComponent]
})
export class ComponentsModule { }
