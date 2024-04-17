export type CanvasState = 
  {
     mode : CanvasMode.None | CanvasMode.Inserting |CanvasMode.Pencil |
      CanvasMode.SelectionNet | CanvasMode.Translating | CanvasMode.Pressing | CanvasMode.Resizing

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