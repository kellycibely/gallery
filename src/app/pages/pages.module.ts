import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GalleryComponent} from "./gallery/gallery.component";
import {ComponentsModule} from "../shared/components/components.module";

@NgModule({
  declarations: [GalleryComponent],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports: [GalleryComponent]
})
export class PagesModule {
}
