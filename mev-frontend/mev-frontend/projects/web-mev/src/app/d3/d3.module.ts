import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScatterPlotComponent } from './components/scatter-plot/scatter-plot.component';
import { SharedModule } from '@app/shared/shared.module';
import { AddSampleSetComponent } from './components/dialogs/add-sample-set/add-sample-set.component';
import { Deseq2Component } from './components/deseq2/deseq2.component';
import { LimmaComponent } from './components/limma/limma.component';
import { HclComponent } from './components/hcl/hcl.component';
import { DownloadButtonComponent } from './components/download-button/download-button.component';
import { GseaComponent } from './components/gsea/gsea/gsea.component';
import { RugPlotComponent } from './components/rug-plot/rug-plot/rug-plot.component';
import { KmeansComponent } from './components/kmeans/kmeans/kmeans.component';
import { D3BoxPlotComponent } from './components/box-plotting/box-plotting.component';
import { DifferentialExpressionComponent } from './components/differential_expression/differential_expression.component';
import { EdgerComponent } from './components/edger/edger.component';
import { RnaSeqNormalizationComponent } from './components/rnaseq-normalization/rnaseq-normalization.component';
import { BoxplotComponent } from './components/boxplot/boxplot.component';
import { HeatmapComponent } from './components/heatmap/heatmap.component';

@NgModule({
  declarations: [
    ScatterPlotComponent,
    AddSampleSetComponent,
    Deseq2Component,
    LimmaComponent,
    HclComponent,
    DownloadButtonComponent,
    GseaComponent,
    RugPlotComponent,
    KmeansComponent,
    D3BoxPlotComponent,
    DifferentialExpressionComponent,
    EdgerComponent,
    RnaSeqNormalizationComponent,
    BoxplotComponent,
    HeatmapComponent
  ],
  imports: [CommonModule, SharedModule],
  exports: [
    ScatterPlotComponent,
    Deseq2Component,
    LimmaComponent,
    HclComponent,
    GseaComponent,
    RugPlotComponent,
    KmeansComponent,
    D3BoxPlotComponent,
    EdgerComponent,
    RnaSeqNormalizationComponent,
    BoxplotComponent,
    HeatmapComponent
  ]
})
export class D3Module {}
