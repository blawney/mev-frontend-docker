import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'mev-workspace-plots',
  templateUrl: './mev-workspace-plot.component.html',
  styleUrls: ['./mev-workspace-plot.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MevWorkspacePlotComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
