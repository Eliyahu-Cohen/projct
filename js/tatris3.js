function GenerateNewShp() {
    newShape = {
        ShapeType: SHAPE_TYPE[Math.floor( Math.random() * SHAPE_TYPE.length)],
        top: 0,
        left: BoardSize.cols/2 -1,
        shapeOrient: 0
    }
    newShape.squareArr = gatShape(newShape.ShapeType, newShape.top,newShape.left,newShape.shapeOrient)
    return newShape;
}
function DrawFillingShpe() {
    curShape.squareArr.forEach(square => {fillSquare(square)});
    
}
function InitOccupiedSquares() {
    const retval = [];
    for (let i = 0; i < BoardSize.rows; i++) {
        const boardRow = Array(BoardSize.cols).fill(false);
        retval.push(boardRow);
    }
    return retval
}

function DrawFrame() {
clearBoard()
drawBoard();
drawGrud()
DrawFillingShpe()
drawOccupiedSquares()
}

  
function IsSquareOccupied(square) {
    if(square.row >= BoardSize.rows || square.col < 0 || square.col >= BoardSize.cols){
        return true;
    }
    if(square.row < 0){
        return false;
    }
    return OccupiedSquares[square.row][square.col]
}
function IsShapeOccupied (shape){
    return shape.some(square => IsSquareOccupied(square))

}
function AddFallingShapeToOccupiedSquares() {
    curShape.squareArr.forEach(shapeSquare => {
        if(shapeSquare.row < 0){
            clearInterval(intervalId)
            console.log("Game Over!")
            return 
        }else{
           OccupiedSquares[shapeSquare.row][shapeSquare.col] = true;}
    });
  }

  function RemoveFullLine() {
    fullLines  = []
    for(i=0;i<OccupiedSquares.length;i++){
        if (OccupiedSquares[i].every(square => square) ) {
            fullLines.push(i)
        }
    }
    while(fullLines.length > 0){
        for(i=fullLines[0];i>0;i--){
            OccupiedSquares[i] =  OccupiedSquares[i - 1]  
        }
        OccupiedSquares[0] = Array(BoardSize.cols).fill(false)
        fullLines.shift()
    }
    
  }
  function drawOccupiedSquares() {
    for (let i = 0; i < OccupiedSquares.length; i++) {
      for (let j = 0; j < OccupiedSquares[i].length; j++) {
        if (OccupiedSquares[i][j]) {
          fillSquare({ row: i, col: j });
        }
      }
    }
  }
  
  

function MainLoop() {
DrawFrame()

movedDownShape = gatShape(curShape.ShapeType,curShape.top +1,curShape.left,curShape.shapeOrient)
if(IsShapeOccupied(movedDownShape)){
   AddFallingShapeToOccupiedSquares()
   RemoveFullLine()
   curShape = GenerateNewShp()
}else{
curShape.squareArr = movedDownShape    
curShape.top++;
}
}
document.addEventListener('keydown', (e) => {
    switch (e.key) {
      case 'ArrowLeft':
        e.preventDefault();
        movedLeftShape = gatShape(curShape.ShapeType, curShape.top, curShape.left - 1,curShape.shapeOrient);
        if (!IsShapeOccupied(movedLeftShape)) {
            curShape.squareArr = movedLeftShape;
          curShape.left--;
        }
        break;
  
      case 'ArrowRight':
        e.preventDefault();
        movedRightShape = gatShape(curShape.ShapeType, curShape.top, curShape.left + 1,curShape.shapeOrient);
        if (!IsShapeOccupied(movedRightShape)) {
            curShape.squareArr = movedRightShape;
          curShape.left++;
        }
        break;
        case 'ArrowUp':
        e.preventDefault();
        rotitadShape = gatShape(curShape.ShapeType, curShape.top, curShape.left,(curShape.shapeOrient+1)%4);
        if (!IsShapeOccupied(rotitadShape)) {
            curShape.squareArr = rotitadShape;
          curShape.shapeOrient = (curShape.shapeOrient+1)%4;

        }
        break;

    }
  });
  
const BoardSize = {rows: 20,cols: 10};
curShape = GenerateNewShp()
OccupiedSquares = InitOccupiedSquares()
let intervalId = setInterval(MainLoop,300)

