import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef, HostListener,
  ViewChild
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { mapValidator } from '../../validators/map.validator';
import { Cell, CellType } from '../../interfaces/cell.interface';
import { Point } from '../../interfaces/point.interface';
import { LeeService } from '../../services/lee.service';
import { LeeResult } from '../../interfaces/lee-result.interface';

@Component({
  selector: 'app-main-task',
  templateUrl: './main-task.component.html',
  styleUrls: ['./main-task.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainTaskComponent implements AfterViewInit {
  @ViewChild('mapWrapper') private readonly mapWrapper: ElementRef | undefined;
  cellType = CellType;
  form: FormGroup;
  viewMap: Cell[][];
  leeMap: number[][];
  leeResult: LeeResult;
  size = 0;
  length = 0;
  start: Point;
  finish: Point;

  @HostListener('window:resize')
  onResize(): any {
    this.resize();
  }
  constructor(private _cdr: ChangeDetectorRef, private _lee: LeeService) {
    this.form = new FormGroup({
      field: new FormControl('s.##...#.#..#..t', [
        Validators.required,
        Validators.minLength(4),
        mapValidator() // валидатор по функцие
      ]),
      power: new FormControl('5', [
        Validators.required,
        Validators.min(1)
      ])
    });
  }

  ngAfterViewInit(): void {
    this.resize();
  }

  resize(): void {
    this.size = this.viewMap ? this.mapWrapper?.nativeElement.clientWidth / this.viewMap.length : 0;
    this._cdr.detectChanges();
  }

  check(): void {
    if (this.form.valid) {
      this.makeMaps(this.form.get('field').value);
      this.leeResult = this._lee.findTheWay(this.leeMap, this.start, this.finish, this.form.get('power').value);
      this.resize();
      if (!this.leeResult.found) {
        alert(this.leeResult.reason);
      }
    }
  }

  makeMaps(value: string): void {
    this.length = value.length;
    this.leeMap = [];
    this.viewMap = [];
    const rowLength = Math.sqrt(value.length);
    for (let i = 0; i < rowLength; i++) {
      this.leeMap.push([]);
      this.viewMap.push([]);
      for (let j = 0; j < rowLength; j++) {
        this.leeMap[i].push(value[i * rowLength + j] === '#' ? -1 : -2);
        switch (value[i * rowLength + j]) {
          case '.':
            this.viewMap[i].push({
              type: CellType.space,
            });
            break;
          case '#':
            this.viewMap[i].push({
              type: CellType.wall,
            });
            break;
          case 's':
          case 'S':
            this.viewMap[i].push({
              type: CellType.start,
            });
            this.leeMap[i][j] = 0; // начинаем тут
            this.start = {x: i, y: j};
            break;
          case 't':
          case 'T':
            this.viewMap[i].push({
              type: CellType.finish,
            });
            this.finish = {x: i, y: j};
            break;
        }
      }
    }
  }
}
