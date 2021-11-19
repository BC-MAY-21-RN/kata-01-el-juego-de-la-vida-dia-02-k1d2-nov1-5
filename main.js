var row = 4, columns = 8 , i, j, n = 0
var arrayCells
var resultArrayCell
var newArray

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

function checkCell(ramdomGame, arrayCells) {
  if(ramdomGame >= 0.5){
    arrayCells = new Celula(0,0)
  } else {
    arrayCells = new Celula(1,0)
  }
  return arrayCells
}

function createArrayCell(){
  arrayCells = new Array(rows);
  for (i = 0; i < arrayCells.length; i++) {
      arrayCells[i] = new Array(columns);
  }
} 

function lookNeighbors(EstatusCells) {
  for(i = 0; i < EstatusCells.length; i++)
    for(j = 0; j < EstatusCells[i].length; j++){
      n = searchNeighbors(EstatusCells, x, y)
    } 
  
}

function searchNeighbors(EstatusCells, x, y) {
    for (i = -1; i <= 1; i++) {
      for (j = -1; j <= 1; j++) {
        try {
          neighbors = 
        }
        catch (e){

        }

      }
     
    }
    return neighbors
  }

  function searchNeighborsLive(EstatusCells)

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
  




//Autores y coautores para el commit
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