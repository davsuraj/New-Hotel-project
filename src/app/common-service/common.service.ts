import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }
  private linkNameSource = new BehaviorSubject<string>('Dashboard');
  currentLinkName = this.linkNameSource.asObservable();

  changeLinkName(name: string) {
    this.linkNameSource.next(name);
  } 
  
}
