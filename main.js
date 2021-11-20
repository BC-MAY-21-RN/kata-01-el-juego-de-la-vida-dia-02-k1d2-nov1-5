var row = 4, columns = 8 , i, j, n = 0
var arrayCells
var resultArrayCell
var newArray




//funcion que inicia el juego/simulacion
function playgame() {
    resultArrayCell = ''
    createArrayCell()
    for(i = 0; i < row; i++){
        for(j = 0; j < columns; j++){
          var ramdomGame = Math.random()
          arrayCells[i][j] = checkCell(ramdomGame, arrayCells[i][j])
          resultArrayCell +=  arrayCells[i][j].toString()
        } 
        resultArrayCell += '/n'
      }
      newArray = arrayCells
      return resultArrayCell
}

function play(){
  var resultGame = playgame()
  let numberOfGenerations = 5
  for( i = 0; i < numberOfGenerations; i++ ){
    console.log("generacion:" + (i+1))
    lookNeighbors(arrayCells)
    let showRes = showResult(newArray)
    console.log(showRes)
    arrayCells = newArray
  }
}

function getRows(){
  return rows
}

function getColumns(){
  return columns
}

function getArrayCell(){
  return resultArrayCell
}
function getNewArray(){
  return newArray
}

//checar si la celula esta viva o muerta
function checkCell(ramdomGame, arrayCells) {
  if(ramdomGame >= 0.5){
    arrayCells = new Celula(0,0)
  } else {
    arrayCells = new Celula(1,0)
  }
  return arrayCells
}

//crea
function createArrayCell(){
  arrayCells = new Array(rows);
  for (i = 0; i < arrayCells.length; i++) {
      arrayCells[i] = new Array(columns);
  }
} 

function lookNeighbors(EstatusCells) {
  for(i = 0; i < EstatusCells.length; i++)
    for(j = 0; j < EstatusCells[i].length; j++){
      n = searchNeighbors(EstatusCells, neighbors, x, y)
      EstatusCells[i][j].setNeighbors(neighbors)//set
      rulesC(EstatusCells[i][j], x, y)
    } 
  
}

function searchNeighbors(EstatusCells, neighbors, x, y) {
    for (i = -1; i <= 1; i++) {
      for (j = -1; j <= 1; j++) {
        try {
          neighbors = searchNeighborsLive(EstatusCells[x + i][y + j], EstatusCellS[x][y] ,neighbors)
        }
        catch (e){
          console.err('error')
        }
      }
    
    }
    return neighbors
  }

  function searchNeighborsLive(EstatusCells, EstatusCellS, neighbors){
    if (EstatusCells.getLife() == 1) {
      if(EstatusCellS.getLife() == 1 && i==0 && j==0){
          console.log('se conto solo');
      }else{
          neighbors++;
      }
  }
  return neighbors;
  }

  function rulesC(cell,rows,columns){
    if ((cell.getLife() == 1) && (cell.getNeighbors() < 2)) {
      newArray[rows][columns].setLife(0);         // Soledad
  } else if ((cell.getLife() == 1) && (cell.getNeighbors() > 3)) {
      newArray[rows][columns].setLife(0);         // Sobrepoblación
  } else if ((cell.getLife() == 0) && (cell.getNeighbors() == 3)) {
      newArray[rows][columns].setLife(1);         // Reproducción
  } else {
      newArray[rows][columns] = cell;
  }
  }

function showResult(array){
    resultNewArray = ''
    for ( i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length;  j++) {
            resultNewArray += arrayCells[i][j].toString()
        }
        resultNewArray += '\n'
    }
    return resultNewArray
}

function sumTd (x,y){
  return x + y
}

play();
let newcell = new Celula(0, 4)

class Celula {
    constructor(live, neighbors) {
      this.live = live
      this.neighbors = neighbors
    }
    // 1 = life, 0 = dead
    
    getLive() {
      return  this.live = live
    }
    setLive(live) {
      this.live = live
    } 
    
    getNeighbors() {
        return  this.neighbors = neighbors
    }

    setNeighbors(neighbors) {
        this.neighbors = neighbors
    }
    
    deadLive() {
      if(this.live == 0){
        return '.'
      } else{
        return '*'
      }
    }
}

module.exports = {
  play,
  playgame,
  lookNeighbors,
  rulesC,
  showResult,
  getRows,
  getColumns,
  getArrayCell,
  sumTd,
  getNewArray,
}




// Autores y coautores para el commit
// Co-authored-by: xManuel007  <maanuu.009@gmail.com>
// Co-authored-by: OsvaldoMDLM <osvaldo.benjamin31@gmail.com>
// Co-authored-by: richi0719   <ricardojuarezhernandez07@gmail.com>
// Co-authored-by: RichyVaca  <ric_vaca_9519@outlook.com>
// Co-authored-by:       <>



// ⠸⣷⣦⠤⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⣠⣤⠀⠀⠀
// ⠀⠙⣿⡄⠈⠑⢄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⠔⠊⠉⣿⡿⠁⠀⠀⠀
// ⠀⠀⠈⠣⡀⠀⠀⠑⢄⠀⠀⠀⠀⠀⠀⠀⠀⠀⡠⠊⠁⠀⠀⣰⠟⠀⠀⠀⣀⣀
// ⠀⠀⠀⠀⠈⠢⣄⠀⡈⠒⠊⠉⠁⠀⠈⠉⠑⠚⠀⠀⣀⠔⢊⣠⠤⠒⠊⠉⠀⡜
// ⠀⠀⠀⠀⠀⠀⠀⡽⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠩⡔⠊⠁⠀⠀⠀⠀⠀⠀⠇
// ⠀⠀⠀⠀⠀⠀⠀⡇⢠⡤⢄⠀⠀⠀⠀⠀⡠⢤⣄⠀⡇⠀⠀⠀⠀⠀⠀⠀⢰⠀
// ⠀⠀⠀⠀⠀⠀⢀⠇⠹⠿⠟⠀⠀⠤⠀⠀⠻⠿⠟⠀⣇⠀⠀⡀⠠⠄⠒⠊⠁⠀
// ⠀⠀⠀⠀⠀⠀⢸⣿⣿⡆⠀⠰⠤⠖⠦⠴⠀⢀⣶⣿⣿⠀⠙⢄⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⢻⣿⠃⠀⠀⠀⠀⠀⠀⠀⠈⠿⡿⠛⢄⠀⠀⠱⣄⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⢸⠈⠓⠦⠀⣀⣀⣀⠀⡠⠴⠊⠹⡞⣁⠤⠒⠉⠀⠀
// ⠀⠀⠀⠀⠀⠀⣠⠃⠀⠀⠀⠀⡌⠉⠉⡤⠀⠀⠀⠀⢻⠿⠆⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠰⠁⡀⠀⠀⠀⠀⢸⠀⢰⠃⠀⠀⠀⢠⠀⢣⠀⠀⠀⠀⠀
// ⠀⠀⠀⢶⣗⠧⡀⢳⠀⠀⠀⠀⢸⣀⣸⠀⠀⠀⢀⡜⠀⣸⢤⣶⠀
// ⠀⠀⠀⠈⠻⣿⣦⣈⣧⡀⠀⠀⢸⣿⣿⠀⠀⢀⣼⡀⣨⣿⡿⠁⠀
// ⠀⠀⠀⠀⠀⠈⠻⠿⠿⠓⠄⠤⠘⠉⠙⠤⢀⠾⠿⣿⠟⠋