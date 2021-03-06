import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Output,
  EventEmitter
} from '@angular/core';
import { AnalysesService } from '../../services/analysis.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Workspace } from '@app/features/workspace-manager/models/workspace';
import { Operation } from '../../models/operation';
import {
  MatTreeFlatDataSource,
  MatTreeFlattener
} from '@angular/material/tree';
import { FlatTreeControl } from '@angular/cdk/tree';

/**
 * Operation category with nested structure.
 * Each node has a name and an optional list of children.
 */
interface OperationCategoryNode {
  name: string;
  children?: Operation[];
}

/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

/**
 * Analyses Component
 * Used to display the list of available operations as a tree structure (the Tools tab)
 */
@Component({
  selector: 'mev-analyses',
  templateUrl: './analyses.component.html',
  styleUrls: ['./analyses.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class AnalysesComponent implements OnInit {
  workspaceId: string;
  workspace$: Observable<Workspace>;
  operations: Operation[];
  operationCategories: any[];
  selectedOperation: Operation;

  @Output() executedOperationId: EventEmitter<any> = new EventEmitter<any>();

  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level,
    node => node.expandable
  );

  private _transformer = (node: OperationCategoryNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      level: level,
      ...node
    };
  };

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    node => node.level,
    node => node.expandable,
    node => node.children
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;

  constructor(
    private route: ActivatedRoute,
    private apiService: AnalysesService
  ) {}

  /**
   * Initialize the datasource for the Operation Tree
   */
  ngOnInit(): void {
    this.workspaceId = this.route.snapshot.paramMap.get('workspaceId');
    this.workspace$ = this.apiService.getWorkspaceDetail(this.workspaceId);

    this.apiService.getOperations().subscribe(operations => {
      this.operations = operations;
    });

    this.apiService.getOperationCategories().subscribe(operationCategories => {
      this.selectedOperation = operationCategories[0].children[0]; // show the parameters for the 1st operation by default
      operationCategories.push(this.getPlottingOperationCategory());
      this.dataSource.data = operationCategories;
      this.treeControl.expand(this.treeControl.dataNodes[0]); // expand the 1st operation category by default
    });
  }

  /**
   * Add a 'fake' operation for plotting. It is a frontend-only operation to provide
   * view for the normalization methods
   * The user can select a numerical matrix and custom feature set to view a boxplot showing the
   * distribution of expressions
   */
  getPlottingOperationCategory() {
    const op = {
      name: 'Plotting',
      children: [
        {
          id: 'Plotting',
          name: 'Plot expressions',
          description: 'Output view for the normalization methods',
          mode: 'client',
          inputs: {
            input_matrix: {
              description:
                'The input matrix. For example, a gene expression matrix for a cohort of samples.',
              name: 'Input matrix:',
              required: true,
              spec: {
                attribute_type: 'DataResource',
                many: false,
                resource_types: ['MTX', 'I_MTX', 'EXP_MTX', 'RNASEQ_COUNT_MTX']
              }
            },
            features: {
              description: 'The genes/features to use in plotting',
              name: 'Plot genes/features by:',
              required: false,
              spec: {
                attribute_type: 'FeatureSet'
              }
            }
          }
        }
      ]
    };
    return op;
  }

  /**
   * Function is triggered when the user clicks on a specific operation in the Operation Tree
   */
  public showOperationDetails(operation) {
    this.selectedOperation = operation;
  }

  /**
   * Function is triggered when the user starts an analysis and emits a newly created executed operation id
   */
  public showExecutedOperationResult(data: any) {
    this.executedOperationId.emit(data);
  }
}
