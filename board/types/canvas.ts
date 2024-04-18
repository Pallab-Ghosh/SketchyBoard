
export type Color = {
   r: number,
   g: number,
   b:number
  }

export type Camera = { 
    x: number,
    y: number
  }

export enum LayerType {
  Rectangle ,
  Ellipse ,
  Path ,
  Text ,
  Note
};


export type RectangleLayer = {
   type : LayerType.Rectangle ,
   x : number ,
   y : number ,
   height : number ,
   width : number ,
   fill : Color,
   value ?: string
}

export type EllipseLayer = {
  type : LayerType.Ellipse ,
  x : number ,
  y : number ,
  height : number ,
  width : number ,
  fill : Color,
  value ?: string
}

export type PathLayer = {
  type : LayerType.Path ,
  x : number ,
  y : number ,
  height : number ,
  width : number ,
  fill : Color,
  points: number[][],
  value ?: string
}

export type TextLayer = {
  type : LayerType.Text ,
  x : number ,
  y : number ,
  height : number ,
  width : number ,
  fill : Color,
  value ?: string
}


export type NoteLayer = {
  type : LayerType.Note ,
  x : number ,
  y : number ,
  height : number ,
  width : number ,
  fill : Color,
  value ?: string
}

export type Point = { 
  x: number,
  y: number
}


export type XYWH = { 
  x: number,
  y: number,
  height : number ,
  width : number ,
}

export enum Side {
   Top = 1 ,
   Bottom = 2,
   Left = 4 ,
   Right = 8
}


export type CanvasState = 
    {
     mode : CanvasMode.None 
    }

  | {
    mode : CanvasMode.Inserting,
    layertype : LayerType.Text | LayerType.Ellipse | LayerType.Rectangle | LayerType.Note
    }

  | {
    mode :CanvasMode.Pencil 
    }

  | {
    mode: CanvasMode.Pressing,
    origin :Point
    }

  | {
      mode : CanvasMode.Translating
      current: Point 
    }

  | {
        mode : CanvasMode.Resizing,
        initialBounds : XYWH,
        corner: Side
    }

  | {
      mode : CanvasMode.SelectionNet
      origin: Point,
      current?: Point
    }





export enum CanvasMode {
    None,
    Inserting,
    SelectionNet,
    Translating,
    Pencil,
    Pressing,
    Resizing
}