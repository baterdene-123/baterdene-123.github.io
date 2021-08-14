const button = document.querySelector("#btn");
const modalContainer = document.querySelector('.modalContainer');
const close = document.querySelector("#close");
const btnCancel = document.querySelector('.btn_cancel')
const boxes = document.querySelectorAll(".col");

boxes.forEach(function(box, index){
        box.addEventListener('click',function(e){
             if(e.target.classList.contains('col')){
                let imgURL = box.style.backgroundImage;
                modalOPen(imgURL);
             }
        });
});

function modalOPen(imgPath){
         modalContainer.classList.add('open');
         modalContainer.children[0].classList.add('openModal')
         modalContainer.children[0].children[1].style.backgroundImage = imgPath;

}

// class deer n style nemj uguh code
// button.addEventListener('click',function(){
//      modalContainer.classList.add('open');
//      modalContainer.children[0].classList.add('openModal')
// });

close.addEventListener('click',function(){
    modalContainer.classList.remove('open');
    modalContainer.children[0].classList.remove('openModal')
})

btnCancel.addEventListener('click',function(){
    modalContainer.classList.remove('open');
    modalContainer.children[0].classList.remove('openModal')
})
// mouse gadnah saaral hesegt darhad cancel daragdah global event
document.addEventListener('click',function(e){
    //nuhtsul shalgaad darval arilahgvv bh classaa bichne
    if(e.target.classList.contains('modalContainer')){
        modalContainer.classList.remove('open');
        modalContainer.children[0].classList.remove('openModal')
    };
    if(e.target.classList.contains('delete')){
        e.target.parentNode.remove();
    }    
});
// add image
