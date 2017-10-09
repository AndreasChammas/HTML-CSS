var i = 0;
var images = [];
var time = 1600;

images[0] = 'images/cafe.jpg';
images[1] = 'images/computer.jpg';
images[2] = 'images/library.jpg';
images[3] = 'images/students.jpg';

function changeImg(){
    document.slide.src = images[i];
    
    if(i < images.length - 1){
      i++;
        
    } else{
      i = 0;
    }
    
    setTimeout("changeImg()", time);
}

window.onload = changeImg;