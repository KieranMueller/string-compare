import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  isCaseSensitive = new BehaviorSubject<boolean>(false)

  constructor() { }
}
