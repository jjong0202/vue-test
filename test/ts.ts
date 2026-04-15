type Shape =
  | { kind: 'circle', radius: number }
  | { kind: 'square', side: number }

function area(shape: Shape): number {
  switch (shape.kind) {
    case 'circle':
      return Math.PI * shape.radius ** 2
    case 'square':
      return shape.side ** 2
  }
}
area({kind: 'circle', radius: 2 })