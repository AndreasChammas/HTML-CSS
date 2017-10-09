window.onload = function() {


      var pop = document.getElementById('myPop');

      var btn = document.getElementById('myBtn');

      var span = document.getElementsByClassName('close')[0];


      btn.onclick = function() {
        pop.style.display = "block";
      }


      span.onclick = function() {
        pop.style.display = "none";
      }


      window.onclick = function(event) {
        if (event.target == pop) {
          pop.style.display = "none";
        }
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
    }
  