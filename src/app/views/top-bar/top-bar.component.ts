import { DOCUMENT, NgClass } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { SharedService } from '../../service/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [NgClass],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.scss'
})
export class TopBarComponent implements OnInit {
  status = false
  aboutBtnText = 'about'

  constructor(private service: SharedService, @Inject(DOCUMENT) private document: Document, private router: Router) {}

  ngOnInit() {
    const localStorage = this.document.defaultView?.localStorage
    if (localStorage) {
      const localIsCaseSensitive = JSON.parse(localStorage.getItem('case-sensitive')!)
      if (localIsCaseSensitive) {
        this.status = localIsCaseSensitive
        this.service.isCaseSensitive.next(localIsCaseSensitive)
      } else {
        this.status = this.service.isCaseSensitive.value
      }
    }
    switch (this.router.url) {
      case '/home': {
        this.aboutBtnText = 'about'
        break;
      }
      case '/about': {
        this.aboutBtnText = 'back home'
        break;
      }
    }
  }

  toggle() {
    this.status = !this.status
    this.service.isCaseSensitive.next(this.status)
    this.updateLocalStorage()
  }

  updateLocalStorage() {
    localStorage.setItem('case-sensitive', JSON.stringify(this.status))
  }

  routeBetweenAboutAndHome() {
    switch (this.router.url) {
      case '/home': {
        this.router.navigateByUrl('/about')
        break;
      }
      case '/about': {
        this.router.navigateByUrl('/home')
        break;
      }
    }
  }
}
