(function(){
    function Countdown(){
        this.count = 10;
        this.countdown = function(){
            if(this.count<0) return 0;
            return Math.max(--this.count,0);
        }
        this.countup = function(){
            if(this.count < 0) this.count = 0;
            return this.count++;
        }
        this.time = function(){
            let secs = this.countdown();
            let min = Math.floor(secs/60);
            let sec = secs - min*60;
            return ("0"+min+"").substr(min.toString().length-1,2) + ":" + ("0"+sec+"").substr(sec.toString().length-1,2) + "";
        }
    }
    
    function Timer(){
       let iTimer = null;
        this.start = function(fnc, n){
            if(iTimer != null) this.stop();
            iTimer = setInterval(fnc,n)
        }
        this.stop = function(){
            clearInterval(iTimer);
            iTimer = null;
        }
    }
    
    function addLeadingZero(n){
        return ("0"+n+"").substr(n.toString().length-1,2)
    }
    
   let message = [
        {count:60 * 25, msg:"Work", "img":"http://www.clipartkid.com/images/129/work-party-call-st-george-s-park-saturday-21-march-st-george-s-bpHkR9-clipart.png"},
        {count:60 * 5, msg:"Rest", "img":"https://d30y9cdsu7xlg0.cloudfront.net/png/29957-200.png"}
    ],
        msg = 0,
        countdown1 = new Countdown(),
        timer1 = new Timer();
        
    countdown1.count = message[0].count;
    
    $("#workmin, #worksec").click(function(){
        let vmin = $("#workmin").val(),
            vsec = $("#worksec").val();
        message[0].count = vmin * 60 + vsec * 1 - 0;
        if(msg == 0){
            $("#min").text(addLeadingZero(vmin));
            $("#sec").text(addLeadingZero(vsec));
            countdown1.count = message[0].count;
        }
    });
    
    $("#restmin, #restsec").click(function(){
       let vmin = $("#restmin").val(),
            vsec = $("#restsec").val();
        message[1].count = vmin * 60 + vsec * 1 - 0
        if(msg == 1){
            $("#min").text(addLeadingZero(vmin));
            $("#sec").text(addLeadingZero(vsec));
            countdown1.count = message[1].count;
        }
    });
    
    function action(){
        let w  = countdown1.time().split(":");
        $("#min").text(w[0]);
        $("#sec").text(w[1]);
        $("#message").text( message[msg].msg);
        if($("#pedoimg").attr("src") != message[msg].img){
            $("#pedoimg").fadeOut("slow", function(){
                $("#pedoimg").attr("src", message[msg].img).fadeIn("slow");
            });
        }
        if(countdown1.count<1) {
            timer1.stop();
            msg = ++msg % message.length;
            countdown1.count = message[msg].count + 1;
            timer1.start(action, 1000);
        }
    }
    
    $(".watchrow").click(function(){
        window['tog'] = !window['tog'];
        if(tog) timer1.start(action, 1000)
        else {
            timer1.stop();
        }
    });
})();