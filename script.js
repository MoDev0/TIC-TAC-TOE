const gameBoard=(()=>{

    let matrix=[[0,0,0],
                [0,0,0],
                [0,0,0]
               ];
     
    const checkRows=(arr)=>{
        let j=0;
        for(let i=0;i<3;i++){ 
            if(arr[i][j]!=0&&arr[i][j]===arr[i][j+1]&&arr[i][j]===arr[i][j+2])
                return arr[i][j];

        }
        return false;
        


    };
    const checkCols=(arr)=>{
        let j=0;
        for(let i=0;i<3;i++){ 
            if(arr[j][i]!=0&&arr[j][i]===arr[j+1][i]&&arr[j][i]===arr[j+2][i])
                return arr[j][i];

        }
        return false;

    };

    const checkDiagonal=(arr)=>{
        let i=0;
        let j=2;
        if( arr[i][i]!=0&& arr[i][i]===arr[i+1][i+1]&&arr[i][i]===arr[i+2][i+2])
                return arr[i][i];


        if(arr[i][j]!=0&&arr[i][j]===arr[i+1][j-1]&&arr[i][j]===arr[i+2][j-2])
             return arr[i][j];

        return false;

    };

    const checkTie=(arr)=>{
        if(!checkWinner(arr))
        {
            for(let i=0;i<3;i++)
                for(let j=0;j<3;j++)
                    if(arr[i][j]===0)
                        {
                            return false;
                            
                        }

        }
        return true;   

    };

    const checkWinner=(arr)=>{
        let equalRow=checkRows(arr);
        let equalCol=checkCols(arr);
        let equalDiagonal=checkDiagonal(arr);

        if(equalRow)
            return equalRow;
        else if(equalCol)
            return equalCol;
        else if(equalDiagonal)
            return equalDiagonal;
        else 
        return false;




        



    };
    const isEmpty=(e)=>{

         return !(e.target.style.backgroundImage.length);//returns true if cell is empty(aka length===0)
        


    };
    return{matrix,isEmpty,checkWinner,checkTie};
})();

const player=(choice,turn)=>{
    const is_turn=turn;

    return{choice,is_turn};
    

};

let player1=player('x',true);
let player2=player('o',false);



     let matrix=[  [1,1,2],
                  [1,2,2],
                  [2,3,3]
       ];
       console.log(gameBoard.checkWinner(matrix))

        

        

let p1=document.querySelector('.p1');
let p2=document.querySelector('.p2');

let btn=document.createElement('button');
btn.textContent='Play again';
btn.addEventListener('click',()=>{
    window.location.reload();
})
let btnDiv=document.querySelector('.btnDiv');




const box=document.querySelector('.box-container');
let cells=document.querySelectorAll('.box-container div');
cells=Array.from(cells);
let indx=0;

cells.forEach(cell => {

    cell.addEventListener('click',(e)=>{

        indx=cells.indexOf(cell);
        
        if(player1.is_turn){
            if(gameBoard.isEmpty(e)){
                cell.style.backgroundRepeat='no-repeat';
                cell.style.backgroundImage="url('./css/img/x.svg')";
                // cell.style.backgroundSize="120px"
                gameBoard.matrix[Math.trunc(indx/3)][indx%3]='x';
                player1.is_turn=false;
                player2.is_turn=true;


            }
            if(gameBoard.checkWinner(gameBoard.matrix)==='x')
                {
                    p1.textContent='congrats player1 !';
                    p1.style.color='white'
                    btnDiv.appendChild(btn);

                }
    


            
        }
        else if(player2.is_turn){

            if(gameBoard.isEmpty(e)){
                cell.style.backgroundRepeat='no-repeat';
                cell.style.backgroundImage="url('./css/img/o.svg')";
                gameBoard.matrix[Math.trunc(indx/3)][indx%3]='o';
                player1.is_turn=true;
                player2.is_turn=false;

                

            }
            if(gameBoard.checkWinner(gameBoard.matrix)==='o')
                {
                    p2.textContent='congrats player2 !';
                    p2.style.color='white'
                    btnDiv.appendChild(btn);
                }
            
    

        }

 
        
         if(gameBoard.checkTie(gameBoard.matrix))
             btnDiv.appendChild(btn);

    })
    
 });
