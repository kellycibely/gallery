import { Component, OnInit, OnDestroy, ViewChild, ViewChildren, ElementRef, QueryList, AfterViewInit, DoCheck, IterableDiffers, IterableDiffer } from '@angular/core';
import { Image } from '../../../shared/models/image';
import { ImageService } from '../../../core/services/image.service';

import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit, AfterViewInit, DoCheck, OnDestroy   {

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
  differ: any;

  constructor(private iterableDiffers: IterableDiffers, private ImageService: ImageService, private media: MediaObserver) {
    this.media$ = media.asObservable();
    this.watcher = this.media$.subscribe(change => {
      this.activeMediaQuery = change[0];
      this.mqAlias = this.activeMediaQuery.mqAlias;
    });
    this.differ = iterableDiffers.find([]).create(undefined);
  }

  ngOnInit(): void {
    this.imageList = this.ImageService.getImagemList(this.listSize);
  }

  ngAfterViewInit(): void {
    this.generateObserver();
    this.IntersectionImages();
  }

  ngDoCheck() {
    const change = this.differ.diff(this.imageList);
    if (change) {
      this.IntersectionImages();
    }
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

  IntersectionImages() {
    if ("IntersectionObserver" in window) {
      setTimeout(() => {
        const lazyloadImages = document.querySelectorAll("div.lazy");
        const imageObserver = new IntersectionObserver(function(entries, observer) {
          entries.forEach(function(entry) {
            if (entry.isIntersecting) {
              const imageContainer = entry.target;
              const appImage = imageContainer.querySelector('app-image')!.querySelector('img');
              appImage!.src = appImage!.dataset['src'] as string;
              imageContainer!.classList.remove("lazy");
              appImage!.classList.remove("lazy");
              imageObserver.unobserve(imageContainer);
            }
          });
        });

        lazyloadImages.forEach((image) => {
          imageObserver.observe(image);
        });
      }, 1000);

    }
  }

   getBase64StringFromDataURL(dataURL: any){
    dataURL.replace('data:', '').replace(/^.+,/, '');
   }

  ngOnDestroy(): void {
    this.watcher.unsubscribe();
  }

}
