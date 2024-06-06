squareSize = 20;
canvas = document.getElementById('baseanvas');
ctx = canvas.getContext('2d');

function drawBoard() {
    ctx.beginPath();
    ctx.rect(0,0,BoardSize.cols*squareSize,BoardSize.rows*squareSize);
    ctx.stroke()
}
function clearBoard() {
    ctx.beginPath()
    ctx.fillStyle = 'whitesmoke'
    ctx.fillRect(0,0,BoardSize.cols* squareSize,BoardSize.rows * squareSize)
}

function drawGrud() {
    startPoint = {};
    endPoint = {};
    startPoint.col = 0;
    endPoint.col = BoardSize.cols;
    for (i = 0 ; i<BoardSize.rows; i++){
        startPoint.row = i;
        endPoint.row = i;
        drawLine(startPoint,endPoint)
    }
    startPoint.row = 0;
    endPoint.row = BoardSize.rows;
    for (i = 0 ; i<BoardSize.cols; i++){
        startPoint.col = i;
        endPoint.col = i;
        drawLine(startPoint,endPoint)
    }
}

function drawLine(startPoint,endPoint) {
    ctx.beginPath();
    ctx.moveTo(startPoint.col*squareSize,startPoint.row*squareSize);
    ctx.lineTo(endPoint.col*squareSize,endPoint.row*squareSize);
    ctx.stroke();
}

function fillSquare(square) {
ctx.beginPath()
ctx.fillStyle = 'blue';
ctx.fillRect(square.col * squareSize,square.row * squareSize,squareSize,squareSize)
}

  