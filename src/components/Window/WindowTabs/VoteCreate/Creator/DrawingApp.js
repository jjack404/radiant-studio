import UndoRedoManager, { Action } from './UndoRedoManager';

class DrawingApplication {
  constructor(canvas, gridCanvas, highlightCanvas) {
    this.canvas = canvas;
    this.gridCanvas = gridCanvas;
    this.highlightCanvas = highlightCanvas;
    this.ctx = canvas.getContext('2d', { willReadFrequently: true });
    this.gridCtx = gridCanvas.getContext('2d', { willReadFrequently: true });
    this.highlightCtx = highlightCanvas.getContext('2d');
    this.isDrawing = false;
    this.currentColor = '#0F0E0C';
    this.defaultCanvasColor = '#FCE184';
    this.gridVisible = false;
    this.pixelSize = this.canvas.width / 32;
    this.undoRedoManager = new UndoRedoManager();
    this.currentStroke = []; // To keep track of the current stroke
    this.lastPos = null; // To store the last position of the mouse

    this.initCanvas();
    this.initGridCanvas();
    this.attachEventListeners();
  }

  initCanvas() {
    this.canvas.width = 3200;
    this.canvas.height = 3200;
    this.fillCanvas(this.defaultCanvasColor);
    this.redrawNeckLines();
  }

  initGridCanvas() {
    this.gridCanvas.width = this.canvas.width;
    this.gridCanvas.height = this.canvas.height;
    this.gridCanvas.style.display = 'none';
    this.gridCanvas.style.pointerEvents = 'none';
  }

  fillCanvas(color) {
    this.ctx.fillStyle = color;
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    this.redrawNeckLines();
  }

  clearCanvas() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  redrawNeckLines() {
    this.ctx.fillStyle = '#0F0E0C';

    const leftNeckX = 10 * this.pixelSize;
    const rightNeckX = (32 - 16) * this.pixelSize;

    for (let i = 0; i < 7; i++) {
      this.ctx.fillRect(leftNeckX, this.canvas.height - this.pixelSize - (i * this.pixelSize), this.pixelSize, this.pixelSize);
    }

    for (let i = 0; i < 5; i++) {
      this.ctx.fillRect(rightNeckX, this.canvas.height - this.pixelSize - (i * this.pixelSize), this.pixelSize, this.pixelSize);
    }
  }

  toggleGrid() {
    this.gridVisible = !this.gridVisible;
    this.gridCanvas.style.display = this.gridVisible ? 'block' : 'none';
    if (this.gridVisible) {
      this.drawGrid();
    }
  }

  drawGrid() {
    const gridSize = this.pixelSize;
    this.gridCtx.clearRect(0, 0, this.gridCanvas.width, this.gridCanvas.height);
    this.gridCtx.strokeStyle = 'rgba(0, 0, 0, 0.2)';
    this.gridCtx.lineWidth = 10;

    for (let x = gridSize; x < this.gridCanvas.width; x += gridSize) {
      this.gridCtx.beginPath();
      this.gridCtx.moveTo(x, 0);
      this.gridCtx.lineTo(x, this.gridCanvas.height);
      this.gridCtx.stroke();
    }

    for (let y = gridSize; y < this.gridCanvas.height; y += gridSize) {
      this.gridCtx.beginPath();
      this.gridCtx.moveTo(0, y);
      this.gridCtx.lineTo(this.gridCanvas.width, y);
      this.gridCtx.stroke();
    }
  }

  getMousePosition(event) {
    const rect = this.canvas.getBoundingClientRect();
    const scaleX = this.canvas.width / rect.width;
    const scaleY = this.canvas.height / rect.height;

    const pos = {
      x: Math.floor((event.clientX - rect.left) * scaleX / this.pixelSize),
      y: Math.floor((event.clientY - rect.top) * scaleY / this.pixelSize)
    };

    // Log the position for debugging
    console.log(`Mouse position: (${pos.x}, ${pos.y})`);

    return pos;
  }

  attachEventListeners() {
    this.canvas.addEventListener('mousedown', this.startDrawing.bind(this));
    this.canvas.addEventListener('mousemove', this.keepDrawing.bind(this));
    this.canvas.addEventListener('mousemove', this.highlightCell.bind(this));
    this.canvas.addEventListener('mouseup', this.stopDrawing.bind(this));
    this.canvas.addEventListener('mouseleave', this.stopDrawing.bind(this));

    document.getElementById('clear-btn').addEventListener('click', this.clearCanvasWithUndo.bind(this));
    document.getElementById('show-grid-btn').addEventListener('click', this.toggleGrid.bind(this));

    document.querySelectorAll('#color-grid button').forEach(button => {
      button.addEventListener('click', (event) => {
        this.currentColor = event.target.style.backgroundColor;
        document.querySelectorAll('#color-grid button').forEach(btn => btn.classList.remove('selected'));
        event.target.classList.add('selected');
      });
    });

    document.getElementById('undo-btn').addEventListener('click', () => {
      this.undoRedoManager.undo(this.ctx);
    });

    document.getElementById('redo-btn').addEventListener('click', () => {
      this.undoRedoManager.redo(this.ctx);
    });

    document.getElementById('save-btn').addEventListener('click', this.saveCurrentDrawing.bind(this));

    // Log to confirm event listeners are attached
    console.log('Event listeners attached');
  }

  clearCanvasWithUndo() {
    this.undoRedoManager.addAction(new Action(this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height)));
    this.fillCanvas(this.defaultCanvasColor);
  }

  startDrawing(event) {
    this.isDrawing = true;
    this.undoRedoManager.addAction(new Action(this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height))); // Save the state before starting a new stroke
    this.currentStroke = []; // Start a new stroke
    this.lastPos = this.getMousePosition(event); // Store the initial position
    this.drawPixel(this.lastPos);

    // Log to confirm drawing start
    console.log(`Start drawing at: (${this.lastPos.x}, ${this.lastPos.y})`);
  }

  keepDrawing(event) {
    if (!this.isDrawing) return;
    const newPos = this.getMousePosition(event);
    this.drawLine(this.lastPos, newPos);
    this.lastPos = newPos; // Update the last position
  }

  stopDrawing() {
    if (!this.isDrawing) return;
    this.isDrawing = false;
    this.currentStroke = [];
    this.lastPos = null;

    // Log to confirm drawing stop
    console.log('Stop drawing');
  }

  drawPixel(pos) {
    const x = pos.x;
    const y = pos.y;

    if (this.currentStroke.some(p => p.x === x && p.y === y)) return; // Avoid duplicate points

    this.currentStroke.push({ x, y });
    this.ctx.fillStyle = this.currentColor;
    this.ctx.fillRect(x * this.pixelSize, y * this.pixelSize, this.pixelSize, this.pixelSize);

    // Log to confirm pixel drawing
    console.log(`Draw pixel at: (${x}, ${y})`);
  }

  drawLine(start, end) {
    const dx = Math.abs(end.x - start.x);
    const dy = Math.abs(end.y - start.y);
    const sx = (start.x < end.x) ? 1 : -1;
    const sy = (start.y < end.y) ? 1 : -1;
    let err = dx - dy;
    let x = start.x;
    let y = start.y;

    while (true) {
      this.drawPixel({ x, y });
      if (x === end.x && y === end.y) break;
      const e2 = 2 * err;
      if (e2 > -dy) {
        err -= dy;
        x += sx;
      }
      if (e2 < dx) {
        err += dx;
        y += sy;
      }
    }
  }

  highlightCell(event) {
    const pos = this.getMousePosition(event);
    this.clearHighlight();

    console.log(`Highlighting cell at: (${pos.x}, ${pos.y})`); // Add logging

    const pixelData = this.ctx.getImageData(pos.x * this.pixelSize, pos.y * this.pixelSize, 1, 1).data;
    const invertedColor = `rgb(${255 - pixelData[0]}, ${255 - pixelData[1]}, ${255 - pixelData[2]})`;

    this.highlightCtx.strokeStyle = invertedColor;
    this.highlightCtx.lineWidth = 10;
    this.highlightCtx.strokeRect(pos.x * this.pixelSize, pos.y * this.pixelSize, this.pixelSize, this.pixelSize);
  }

  clearHighlight() {
    this.highlightCtx.clearRect(0, 0, this.highlightCanvas.width, this.highlightCanvas.height);
  }

  saveCurrentDrawing() {
    const dataUrl = this.canvas.toDataURL('image/png');
    if (this.saveDrawing) {
      this.saveDrawing(dataUrl);
    }
  }
}

export default DrawingApplication;
