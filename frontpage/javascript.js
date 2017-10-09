

window.onload = function() {


  var pop1 = document.getElementById('add1pop');
  var btn1 = document.getElementById('add1');
  var close1 = document.getElementById('close1');

  btn1.onclick = function() {
    pop1.style.display='block';
  }

  close1.onclick = function() {
    pop1.style.display='none';
  }



var pop2 = document.getElementById('add2pop');
var btn2 = document.getElementById('add2');
var close2 = document.getElementById('close2');

btn2.onclick = function() {
  pop2.style.display='block';
}

close2.onclick = function() {
  pop2.style.display='none';
}


var addNew = document.getElementById('addanchor');
var closeAdd = document.getElementById('closeadd1');
var createAdd = document.getElementById('create1');

addNew.onclick = function() {
  createAdd.style.display='block';
}

closeAdd.onclick = function() {
  createAdd.style.display='none';
}



var pop3 = document.getElementById('add3pop');
var btn3 = document.getElementById('add3');
var close3 = document.getElementById('close3');

btn3.onclick = function() {
  pop3.style.display='block';
}

close3.onclick = function() {
  pop3.style.display='none';
}



var pop4 = document.getElementById('add4pop');
var btn4 = document.getElementById('add4');
var close4 = document.getElementById('close4');

btn4.onclick = function() {
  pop4.style.display='block';
}

close4.onclick = function() {
  pop4.style.display='none';
}


var pop5 = document.getElementById('add5pop');
var btn5 = document.getElementById('add5');
var close5 = document.getElementById('close5');

btn5.onclick = function() {
  pop5.style.display='block';
}

close5.onclick = function() {
  pop5.style.display='none';
}


var pop6 = document.getElementById('add6pop');
var btn6 = document.getElementById('add6');
var close6 = document.getElementById('close6');

btn6.onclick = function() {
  pop6.style.display='block';
}

close6.onclick = function() {
  pop6.style.display='none';
}


var pop7 = document.getElementById('add7pop');
var btn7 = document.getElementById('add7');
var close7 = document.getElementById('close7');

btn7.onclick = function() {
  pop7.style.display='block';
}

close7.onclick = function() {
  pop7.style.display='none';
}

var pop8 = document.getElementById('add8pop');
var btn8 = document.getElementById('add8');
var close8 = document.getElementById('close8');

btn8.onclick = function() {
  pop8.style.display='block';
}

close8.onclick = function() {
  pop8.style.display='none';
}


var pop9 = document.getElementById('add9pop');
var btn9 = document.getElementById('add9');
var close9 = document.getElementById('close9');

btn9.onclick = function() {
  pop9.style.display='block';
}

close9.onclick = function() {
  pop9.style.display='none';
}

//KÖP OCH BYT display
var kopAdds = document.getElementsByClassName('sale');
var kop = document.getElementById('kop');

kop.onchange = function(){

  if (kop.checked == true) {

  for (var i = 0; i < kopAdds.length; i++)
  kopAdds[i].style.display='block';

} else {
  for (var i = 0; i < kopAdds.length; i++)
  kopAdds[i].style.display='none';
}
}

var bytAdds = document.getElementsByClassName('exchange');
var byt = document.getElementById('byt');

byt.onchange = function() {
  if (byt.checked == true) {

  for (var i = 0; i < bytAdds.length; i++)
  bytAdds[i].style.display='block';

} else {
  for (var i = 0; i < bytAdds.length; i++)
  bytAdds[i].style.display='none';

}
}

var sendAdd = document.getElementById('skicka');
console.dir(document.getElementById('addnew'));

  sendAdd.onclick = function() {
  document.getElementById('create1').style.display='none';
  document.getElementById('addnew').style.display='block';
  var header = document.getElementById('addheader');
  var text = "";


  console.dir(document.getElementById('pris').value);

    text += header.value;

  document.getElementById('miniheader').innerHTML = text + '<br>pris ' + document.getElementById('pris').value + (' kr');

  }

  document.getElementById('loadimg').onchange = function() {
    var preview = document.getElementById('previewimg');
    var file = document.getElementById('loadimg').files[0];
    var reader = new FileReader();
    console.dir(preview);

    reader.addEventListener('load', function() {
      preview.src = reader.result;
    }, false);
    if (file) {
      reader.readAsDataURL(file);
    }
  }




};
