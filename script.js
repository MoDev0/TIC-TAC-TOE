const gameBoard=(()=>{

    let matrix=[[0,0,0],
                [0,0,0],
                [0,0,0]
               ];
     
    const checkRows=(arr)=>{
        let j=0;
        for(let i=0;i<3;i++){ 
            if(arr[i][j]===arr[i][j+1]&&arr[i][j]===arr[i][j+2])
                return arr[i][j];

        }

    };

    const checkWinner=()=>{


    };
    const isEmpty=(e)=>{

         return !(e.target.style.backgroundImage.length);//returns true if cell is empty(aka length===0)
        


    };
    return{matrix,isEmpty,checkRows};
})();

const player=()=>{
    const is_turn=true;
    

};

        //  for(let i=0;i<3;i++)
        //  for(let j=0;j<3;j++)


        //  {
        //      console.log(matrix[i][j]);
        //  }      



        
   


// const displayController=(()=>{

// const createBox=()=>{
//     const container=document.createElement('div');
//     for(let i=0;i<9;i++){
//         const cell=



//     }

    
// }


// }

// )();
const box=document.querySelector('.box-container');
let cells=document.querySelectorAll('.box-container div');
cells=Array.from(cells);
let indx=0;

cells.forEach(cell => {

    cell.addEventListener('click',(e)=>{
        /*
        if(player1.is_turn){
            if(isCellEmpty){
                cell.style.backgroundRepeat='no-repeat';
                cell.style.backgroundImage="url('./css/img/x.svg')";
                gameBoard.checkWinner();

            }



            
        }
        */
        // if(gameBoard.isEmpty(e))
        // console.log('yes')


         indx=cells.indexOf(cell);



          gameBoard.matrix[Math.trunc(indx/3)][indx%3]='x';
         cell.style.backgroundRepeat='no-repeat';
         cell.style.backgroundImage="url('./css/img/n.svg')";
 
         

 


         

    })
    
 });
