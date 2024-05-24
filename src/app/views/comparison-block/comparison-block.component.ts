import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedService } from '../../service/shared.service';

@Component({
  selector: 'app-comparison-block',
  standalone: true,
  imports: [NgFor, FormsModule, NgClass, NgIf],
  templateUrl: './comparison-block.component.html',
  styleUrl: './comparison-block.component.scss'
})
export class ComparisonBlockComponent implements OnInit {
  words = [
    {word: '', copied: false, equalsBase: false},
    {word: '', copied: false, equalsBase: false}
  ]
  allEqual = false;
  isCaseSensitive = false

  constructor(private service: SharedService) {}

  ngOnInit() {
    this.service.isCaseSensitive.subscribe({
      next: val => this.isCaseSensitive = val
    })
  }

  @HostListener('window:keyup', ['$event'])
  @HostListener('window:click', ['$event'])
  onEvent($event: any) {
    if ($event.target.classList[0] === 'word-tag') return
    this.words.forEach(obj => {
      if (this.isCaseSensitive) {
        if (obj.word.trim() === this.words[0].word.trim()) {
          obj.equalsBase = true
        } else obj.equalsBase = false
      } else {
        if (obj.word.trim().toLowerCase() === this.words[0].word.trim().toLowerCase()) {
          obj.equalsBase = true
        } else obj.equalsBase = false
      }
    })
  }

  addInput() {
    this.words.push({word: '', copied: false, equalsBase: false})
  }

  deleteInput(index: number) {
    this.words.splice(index, 1)
  }

  copy(index: number) {
    this.words[index].copied = true
    navigator.clipboard.writeText(this.words[index].word)
    setTimeout(() => {
      this.words[index].copied = false
    }, 800)
  }
}
