import { 
  Component, 
  OnInit, 
  ChangeDetectionStrategy,
  Input
} from '@angular/core';
import { FormGroup, Validators, FormBuilder, Form } from '@angular/forms';
import { MetadataService } from '@app/core/metadata/metadata.service';
import { AnalysesService } from '@app/features/analysis/services/analysis.service';

/*
* Component for creating the form which creates a boxplot
*/
@Component({
  selector: 'mev-boxplot',
  templateUrl: './boxplot.component.html',
  styleUrls: ['./boxplot.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class BoxplotComponent implements OnInit {

  @Input() workspaceId: string;

  submitted = false;
  isWaiting = false;
  inputForm: FormGroup;
  all_featuresets = [];
  exp_files = [];
  plotData = [];
  isLoaded = false;

  acceptable_resource_types = [
    'MTX',
    'I_MTX',
    'EXP_MTX',
    'RNASEQ_COUNT_MTX'
  ];

  constructor(
    private formBuilder: FormBuilder,
    private metadataService: MetadataService,
    private apiService: AnalysesService
  ) { }

  ngOnInit(): void {
    this.inputForm = this.formBuilder.group({
      'expMtx': ['', Validators.required],
      'featureSet': ['', Validators.required],
    })
    this.all_featuresets = this.metadataService.getCustomFeatureSets();
    this.apiService
      .getAvailableResourcesByParam(
      this.acceptable_resource_types,
      this.workspaceId
    )
    .subscribe(data => {
      this.exp_files = data;
      this.isLoaded = true;
    });
  }

  onSubmit() {
    this.submitted = true;
    this.isWaiting = true;
  }

  createPlot() {
    const resourceId = this.inputForm.value['expMtx'];
    const selectedFeatureSet = this.inputForm.value['featureSet'];
    const elements = selectedFeatureSet['elements'].map(obj => obj.id);
    const filters = {'__rowname__': '[in]:' + elements.join(',')}
    this.apiService
      .getResourceContent(
        resourceId,
        null,
        null,
        filters,
        {}
      )
      //.pipe(finalize(() => this.loadingSubject.next(false)))
      .subscribe(features => {
        this.plotData = features;
        this.isWaiting = false;
        });
  }

  /**
   * Convenience getter for easy access to form fields
   */
  get f() {
    return this.inputForm.controls;
  }

}
