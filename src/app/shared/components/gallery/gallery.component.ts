import { Component, OnInit, OnDestroy } from '@angular/core';
import { Image } from '../../models/image';
import { ImageService } from '../../services/image.service';

import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit, OnDestroy   {

  public imageList: Image[] = []
  public listSize: number = 50;

  watcher!: Subscription;
  media$!: Observable<MediaChange[]>;
  activeMediaQuery!: MediaChange;
  mqAlias: string = ''

  constructor(private ImageService: ImageService, private media: MediaObserver) {
    this.media$ = media.asObservable();
    this.watcher = this.media$.subscribe(change => {
      this.activeMediaQuery = change[0];
      this.mqAlias = this.activeMediaQuery.mqAlias;
      console.log(change[0].mqAlias)
    });
  }

  ngOnInit(): void {
    
    this.imageList = this.ImageService.getImagemList(this.listSize);
  }

  ngOnDestroy(): void {
    this.watcher.unsubscribe();
  }

}
