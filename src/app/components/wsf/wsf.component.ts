import { Component, Input } from '@angular/core';
import { CellType } from '../../interfaces/cell.interface';

@Component({
  selector: 'app-wsf',
  templateUrl: './wsf.component.html',
  styleUrls: ['./wsf.component.scss']
})
export class WsfComponent {
  cellType = CellType;
  @Input() draw: boolean;
  @Input() type: CellType;
}
