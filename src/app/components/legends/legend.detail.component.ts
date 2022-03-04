import { Component, Input } from '@angular/core';
import { LegendDto } from '../../dto/legend.dto';

@Component({
  selector: 'app-legend-detail',
  templateUrl: './legend.detail.component.html',
})
export class LegendDetailComponent {
  @Input() legend!: LegendDto;
}
