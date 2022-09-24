import {Injectable} from '@angular/core';
import {MediaObserver} from "@angular/flex-layout";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WindowService {


  private media$: any;
  private watcher: any;
  private _activeMediaQuery$ = new BehaviorSubject<{}>({});
  private _mqAlias$ = new BehaviorSubject<any>('md');

  constructor(private media: MediaObserver) {
    this.media$ = media.asObservable();
    this.watcher = this.media$.subscribe((change: any[]) => {
      this.activeMediaQuery$ = change[0];
      this.mqAlias$ = change[0].mqAlias;
    });
  }

  get activeMediaQuery$(): BehaviorSubject<{}> {
    return this._activeMediaQuery$;
  }

  get mqAlias$(): BehaviorSubject<string> {
    return this._mqAlias$;
  }

  set mqAlias$(value) {
    this._mqAlias$.next(value);
  }

  set activeMediaQuery$(value) {
    this._activeMediaQuery$.next(value);
  }

}
