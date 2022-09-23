import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GalleryComponent} from "./gallery/gallery.component";
import {ComponentsModule} from "../shared/components/components.module";
import { PagesRoutingModule } from './pages-routing.module';

@NgModule({
  declarations: [GalleryComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    PagesRoutingModule
  ],
  exports: [GalleryComponent]
})
export class PagesModule {
}
