import { Injectable } from '@angular/core';
import { LeeResult } from '../interfaces/lee-result.interface';
import { Point } from '../interfaces/point.interface';

@Injectable({
  providedIn: 'root'
})
export class LeeService {
  public findTheWay(grid: number[][], start: Point, finish: Point, power: number): LeeResult {
    const ax = start.x;
    const ay = start.y;
    const bx = finish.x;
    const by = finish.y;
    const dx = [1, 0, -1, 0];
    const dy = [0, 1, 0, -1];
    const path: LeeResult['path'] = []; // координаты пути
    const BLANK = -2;
    const S = grid.length;
    let d = 0;
    let x: number;
    let y: number;
    let k: number;
    let stop: boolean;

    do {
      stop = true;
      for ( y = 0; y < S; y++ ) {
        for ( x = 0; x < S; x++ ) {
          if ( grid[y][x] === d ) {
            for ( k = 0; k < 4; ++k ) { // смотрим вокруг
              const iy = y + dy[k];
              const ix = x + dx[k];
              if (iy >= 0 && iy < S &&
                ix >= 0 && ix < S &&
                grid[iy][ix] === BLANK) {
                stop = false;              // найдены непомеченные клетки
                grid[iy][ix] = d + 1;      // распространяем волну
              }
            }
          }
        }
      }
      d++;
      if (d > power) {
        stop = true;
      }
    } while (!stop && grid[by][bx] === BLANK);

    console.log(grid);

    if (grid[by][bx] === BLANK) {
      return {
        found: false,
        reason: d > power ? 'недостаточно мощности' : 'невозможно пройти к финишу'
      };  // путь не найден
    }

    // восстановление пути
    d = grid[by][bx];            // длина кратчайшего пути из (ax, ay) в (bx, by)
    x = bx;
    y = by;
    while ( d > 0 ) {
      path.push(x * S * S + y); // записываем ячейку (x * размер, y) в путь
      d--;
      for (k = 0; k < 4; ++k)
      {
        const iy = y + dy[k];
        const ix = x + dx[k];
        if ( iy >= 0 && iy < S &&
          ix >= 0 && ix < S &&
          grid[iy][ix] === d)
        {
          x = x + dx[k];
          y = y + dy[k];           // переходим в ячейку, которая на 1 ближе к старту
          break;
        }
      }
    }
    path.push(ax * S * S + ay);

    return {
      found: true,
      path
    };
  }
}
