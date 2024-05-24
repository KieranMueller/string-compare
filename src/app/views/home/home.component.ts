import { Component } from '@angular/core';
import { TopBarComponent } from '../top-bar/top-bar.component';
import { ComparisonBlockComponent } from '../comparison-block/comparison-block.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TopBarComponent, ComparisonBlockComponent, NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  blocks = ['']

  addComparisonBlock() {
    this.blocks.push('')
  }
}
