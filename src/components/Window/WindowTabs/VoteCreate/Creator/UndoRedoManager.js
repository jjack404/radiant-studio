// src/UndoRedoManager.js
class Action {
    constructor(imageData) {
      this.imageData = imageData;
    }
  }
  
  class UndoRedoManager {
    constructor() {
      this.undoStack = [];
      this.redoStack = [];
    }
  
    addAction(action) {
      this.undoStack.push(action);
      this.redoStack = []; // Clear the redo stack
    }
  
    undo(ctx) {
      if (this.undoStack.length > 0) {
        const action = this.undoStack.pop();
        this.redoStack.push(new Action(ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height)));
        ctx.putImageData(action.imageData, 0, 0);
      }
    }
  
    redo(ctx) {
      if (this.redoStack.length > 0) {
        const action = this.redoStack.pop();
        this.undoStack.push(new Action(ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height)));
        ctx.putImageData(action.imageData, 0, 0);
      }
    }
  }
  
  export default UndoRedoManager;
  export { Action };
  