import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [NgClass],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.scss'
})
export class TopBarComponent {
  status = new BehaviorSubject<boolean>(false)

  toggle() {
    this.status.next(!this.status.value)
  }
}
