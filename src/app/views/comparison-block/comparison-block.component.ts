import { NgClass, NgFor } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-comparison-block',
  standalone: true,
  imports: [NgFor, FormsModule, NgClass],
  templateUrl: './comparison-block.component.html',
  styleUrl: './comparison-block.component.scss'
})
export class ComparisonBlockComponent {
  words = [
    {word: '', copied: false},
    {word: '', copied: false}
  ]
  allEqual = false;

  @HostListener('keyup', ['$event'])
  onEvent($event: any) {
    this.allEqual = this.words.every(el => {
      return el.word.trim() === this.words[0].word.trim() ||
             (el.word === '' && this.words.length > 2)
    })
  }

  addInput() {
    this.words.push({word: '', copied: false})
  }

  copy(index: number) {
    this.words[index].copied = true
    setTimeout(() => {
      this.words[index].copied = false
    }, 1000)
  }

  test() {
    console.log(this.words)
  }
}
