import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  isCaseSensitive = new BehaviorSubject<boolean>(false)

  constructor() { }
}
