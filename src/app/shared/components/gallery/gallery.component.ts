import { Component, OnInit, OnDestroy } from '@angular/core';
import { Image } from '../../models/image';
import { ImageService } from '../../services/image.service';

import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { Subscription, Observable } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit, OnDestroy   {

  public imageList: Image[] = []
  public listSize: number = 20;

  watcher!: Subscription;
  media$!: Observable<MediaChange[]>;
  activeMediaQuery!: MediaChange;

  constructor(private ImageService: ImageService, private media: MediaObserver) {
    this.media$ = media.asObservable();
  }

  ngOnInit(): void {
    this.watcher = this.media$.subscribe(change => {
      this.activeMediaQuery = change[0];
      console.log(change[0])
    });
    this.imageList = this.ImageService.getImagemList(this.listSize);
  }

  ngOnDestroy(): void {
    this.watcher.unsubscribe();
  }

}
