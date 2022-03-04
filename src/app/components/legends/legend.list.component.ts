import { Component, OnInit } from '@angular/core';
import { LegendsService } from '../../services/legends.service';
import { LegendDto } from '../../dto/legend.dto';

@Component({
  selector: 'app-legends',
  templateUrl: './legend.list.component.html',
})
export class LegendListComponent implements OnInit {
  legends: LegendDto[] = [];

  selectedLegend?: LegendDto;

  constructor(private readonly legendsService: LegendsService) {}

  ngOnInit(): void {
    this.legendsService.getLegends().then((legends) => {
      this.legends = legends;
    });
  }

  selectLegend(legend: LegendDto) {
    this.selectedLegend = legend;
  }

  toevoegenLegend() {
    this.selectedLegend = {};
  }
}
