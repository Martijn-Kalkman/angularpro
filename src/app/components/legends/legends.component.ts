import { Component, OnInit } from '@angular/core';
import { LegendsService } from '../../services/legends.service';
import { LegendDto } from '../../dto/legend.dto';

@Component({
  selector: 'app-legends',
  templateUrl: './legends.component.html',
})
export class LegendsComponent implements OnInit {
  legends: LegendDto[] = [];

  constructor(private readonly legendsService: LegendsService) {}

  ngOnInit(): void {
    this.legendsService.getLegends().then((legends) => {
      this.legends = legends;
    });
  }
}
