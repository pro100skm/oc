export enum Direction {
  up,
  up_right,
  up_left,
  down,
  down_right,
  down_left,
  right,
  left
}
export interface Cell {
  type: CellType;
  direction?: Direction;
}

export enum CellType {
  wall = 'wall',
  start = 'start',
  finish = 'finish',
  space = 'space'
}
