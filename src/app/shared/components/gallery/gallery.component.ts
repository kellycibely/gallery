import { Component, OnInit, OnDestroy, ViewChild, ViewChildren, ElementRef, QueryList, AfterViewInit } from '@angular/core';
import { Image } from '../../models/image';
import { ImageService } from '../../services/image.service';

import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit, AfterViewInit, OnDestroy   {

  @ViewChild('scroll', {static: false}) scroll!: ElementRef;
  private observer!: IntersectionObserver;

  public imageList: Image[] = []
  public listSize: number = 50;
  public fullHDWidth: number = 1080;
  public fullHDHeight: number = 720;
  public mqAlias: string = ''
  public toScroll: boolean = true;

  private watcher!: Subscription;
  private media$!: Observable<MediaChange[]>;
  private activeMediaQuery!: MediaChange;

  constructor(private ImageService: ImageService, private media: MediaObserver) {
    this.media$ = media.asObservable();
    this.watcher = this.media$.subscribe(change => {
      this.activeMediaQuery = change[0];
      this.mqAlias = this.activeMediaQuery.mqAlias;
    });
  }

  ngOnInit(): void {
    this.imageList = this.ImageService.getImagemList(this.listSize);
  }

  ngAfterViewInit(): void {
    this.generateObserver();
  }

  generateObserver() {
    let options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    }
    this.observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        this.toScroll = true;
        setTimeout(() => {
          this.ImageService.getImagemList(20).forEach(image => {
            this.imageList.push(image);
          })
        }, 2000)
      } else {
        this.toScroll = false;
      }
    }, options);

    this.observer.observe(this.scroll.nativeElement);
  }

  ngOnDestroy(): void {
    this.watcher.unsubscribe();
  }

}
