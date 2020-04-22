


    function myClick(){
        // let form = document.getElementById("popupContact");
        // form.style.display = "none";
        let form = document.querySelector("form");
    if (event.clientY >10) {
        
        form.style.display = "block";
    } else {
      
        form.style.display = "none";
    }
   }
   document.addEventListener('mousemove', myClick);