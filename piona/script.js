const whiteButtons = document.querySelectorAll(".whiteButton");
const blackButtons = document.querySelectorAll(".blackButton");
const noteA = document.querySelector('#noteA')
const noteB = document.querySelector('#noteB')
const noteC = document.querySelector('#noteC')
const noteD = document.querySelector('#noteD')
const noteE = document.querySelector('#noteE')
const noteF = document.querySelector('#noteF')
const noteG = document.querySelector('#noteG')
const noteGb = document.querySelector('#noteGb')
const noteAb = document.querySelector('#noteAb')
const noteBb = document.querySelector('#noteBb')
const noteDb = document.querySelector('#noteDb')
const noteEb = document.querySelector('#noteEb')

// ene func n tovchluur keyboard usegee keyboard code oor tsagaan buttontoi holboson
document.addEventListener('keydown', function(e){
    whiteButtons.forEach(white =>{
        if(e.keyCode === 90 && white.id=== 'A'){
             white.classList.add('bg-gray-400');
             noteA.currentTime = 0;
             noteA.play();
        }

        if(e.keyCode === 88 && white.id=== 'B'){
            white.classList.add('bg-gray-400');
            noteB.currentTime = 0;
            noteB.play();
       }

       if(e.keyCode === 67 && white.id=== 'C'){
        white.classList.add('bg-gray-400');
        noteC.currentTime = 0;
        noteC.play();
       }
       if(e.keyCode === 86 && white.id=== 'D'){
            white.classList.add('bg-gray-400');
            noteD.currentTime = 0;
            noteD.play();
       }

       if(e.keyCode === 66 && white.id=== 'E'){
        white.classList.add('bg-gray-400');
        noteE.currentTime = 0;
        noteE.play();
       }

       if(e.keyCode === 78 && white.id=== 'F'){
        white.classList.add('bg-gray-400');
        noteF.currentTime = 0;
        noteF.play();
       }
       if(e.keyCode === 77 && white.id=== 'G'){
        white.classList.add('bg-gray-400');
        noteG.currentTime = 0;
        noteG.play();
       }
       if(e.keyCode === 188 && white.id=== 'Gb'){
        white.classList.add('bg-gray-400');
        noteGb.currentTime = 0;
        noteGb.play();
       }
       if(e.keyCode === 190 && white.id=== 'Db'){
        white.classList.add('bg-gray-400');
        noteDb.currentTime = 0;
        noteDb.play();
       }
       if(e.keyCode === 191 && white.id=== 'Bb'){
        white.classList.add('bg-gray-400');
        noteBb.currentTime = 0;
        noteBb.play();
       }
   console.log(e.keyCode);
    })
});
// ene func n daraad avhad arilna
document.addEventListener('keyup', function(){
    whiteButtons.forEach(white =>{
        white.classList.remove('bg-gray-400');
    })
})

// har tovchluur
document.addEventListener('keydown',function(e){
     blackButtons.forEach(black =>{
        if(e.keyCode === 65 && black.id === 'Ab'){
             black.classList.add('bg-gray-400');
             noteAb.currentTime = 0;
             noteAb.play();
        }
        if(e.keyCode === 83 && black.id === 'Bb'){
            black.classList.add('bg-gray-400');
            noteBb.currentTime = 0;
            noteBb.play();
       }
       if(e.keyCode === 68 && black.id === 'Db'){
        black.classList.add('bg-gray-400');
        noteDb.currentTime = 0;
        noteDb.play();
   }
   if(e.keyCode === 70 && black.id === 'Eb'){
    black.classList.add('bg-gray-400');
    noteEb.currentTime = 0;
    noteEb.play();
}
if(e.keyCode === 71 && black.id === 'Gb'){
    black.classList.add('bg-gray-400');
    noteGb.currentTime = 0;
    noteGb.play();
}
if(e.keyCode === 72 && black.id === 'A'){
    black.classList.add('bg-gray-400');
    noteA.currentTime = 0;
    noteA.play();
}
if(e.keyCode === 74 && black.id === 'E'){
    black.classList.add('bg-gray-400');
    noteE.currentTime = 0;
    noteE.play();
}
     })
})


//  end har daraad arilna
document.addEventListener('keyup', function(){
    blackButtons.forEach(black =>{
        black.classList.remove('bg-gray-400');
    })
});