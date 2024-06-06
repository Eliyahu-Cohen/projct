const SHAPE_TYPE = ["L","L_REV","DOG","DOG_REV","LINE","SOUARE","PLUS"];

function gatBaseShape(shapeType) {
    let BaseShape = {}
     BaseShape["DOG"] = [{col:0,row:0},{col:1,row:0},{col:0,row:1},{col:-1,row:1}]
     BaseShape["DOG_REV"] =[{ col: 0, row: 1 },{ col: 1, row: 1 },{ col: 0, row: 0 },{ col: 1, row: 2 }]
    BaseShape["L"] = [
          { col: 0, row: 0 },
          { col: 0, row: 1 },
          { col: 0, row: 2 },
          { col: -1, row: 2 }
        ]
     BaseShape["L_REV"] = [
          { col: 0, row: 0 },
          { col: 0, row: 1 },
          { col: 0, row: 2 },
          { col: 1, row: 2 }
        ]
    BaseShape["LINE"] = [
          { col: 0, row: 0 },
          { col: 0, row: 1 },
          { col: 0, row: 2 },
          { col: 0, row: 3 }
        ];
    BaseShape["SOUARE"] =  [
          { col: 0, row: 0 },
          { col: 1, row: 0 },
          { col: 0, row: 1 },
          { col: 1, row: 1 }
        ];
    BaseShape["PLUS"] = [
          { col: 0, row: 0 },
          { col: 0, row: 1 },
          { col: 0, row: 2 },
          { col: 1, row: 1 }
        ];
        return BaseShape[shapeType]
    }
      
    function RotateShape(baseShape,orietation) {
        rotatedShape = baseShape
    for(i = 0; i < orietation ; i++){
        rotatedShape = rotatedShape.map(sq => {return {col: -sq.row, row: sq.col }})
    }
    return rotatedShape
    }



function gatShape(shapeType,top,left,shape_orient) {
    baseShape = gatBaseShape(shapeType)
    rotatedShape = RotateShape(baseShape,shape_orient)
    shapeWithOffsat = rotatedShape.map(square =>{
        return {row: square.row + top, col: square.col + left}
    })
    return shapeWithOffsat

}