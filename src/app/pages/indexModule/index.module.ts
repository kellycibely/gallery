import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IndexRoutingModule} from './index-routing.module';
import {GalleryComponent} from "./gallery/gallery.component";
import {ComponentsModule} from "../../shared/components/components.module";
import {IndexComponent} from "./index/index.component";

@NgModule({
  declarations: [GalleryComponent, IndexComponent],
  imports: [
    CommonModule,
    IndexRoutingModule,
    ComponentsModule
  ],
  exports: [
    GalleryComponent,
    IndexComponent
  ]
})
export class IndexModule {
}
