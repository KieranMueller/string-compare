import { Component } from '@angular/core';
import { TopBarComponent } from '../top-bar/top-bar.component';
import { ComparisonBlockComponent } from '../comparison-block/comparison-block.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TopBarComponent, ComparisonBlockComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
