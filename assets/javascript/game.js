
$(document).ready(function(){
    var targetNumber= (Math.floor(Math.random()*(120-19)) +1);
    console.log("target number is: " + targetNumber);
    var userTotal=0;
    console.log("userTotal is: " + userTotal);
    var winCounter=0;
    var loseCounter=0;
    var num1= Math.floor(Math.random()*11 + 1);
    var num2= Math.floor(Math.random()*11 + 1);
    var num3= Math.floor(Math.random()*11 + 1);
    var num4= Math.floor(Math.random()*11 + 1);

    $("#crystalOne").attr("value",num1);
    $("#crystalTwo").attr("value",num2);
    $("#crystalThree").attr("value",num3);
    $("#crystalFour").attr("value",num4);

    console.log("num 1: " + num1);
    console.log("num 2: " + num2);
    console.log("num 2: " + num3);
    console.log("num 2: " + num4);

    $("#target").html(targetNumber);

    $(".crystal").on("click", function(){
        var value = +$(this).attr("value");
        userTotal = userTotal + value;
        console.log("New usertotal= " + userTotal);
        $("#totalScore").html(userTotal);
        
        if(userTotal == targetNumber){
            won();
        } else if (userTotal > targetNumber){
            lost();
        }
    });
   

// $("#target").html(targetNumber);
    function won(){
        alert("YOU WON");
            userTotal=0;
            winCounter ++;
            render();
            reset();
           
    };

    function lost(){
        userTotal=0;
        alert("YOU LOSE");
        loseCounter ++;
        reset();
        render();
        

    };

    function render(){
         $("#target").html(targetNumber);
         $("#win").html(winCounter);
         $("#lose").html(loseCounter);
    }


    function reset(){
        userTotal = 0;
        $("#totalScore").html(userTotal);
        targetNumber= (Math.floor(Math.random()*(120-19)) +1);
        num1= Math.floor(Math.random()*11 + 1);
        num2= Math.floor(Math.random()*11 + 1);
        num3= Math.floor(Math.random()*11 + 1);
        num4= Math.floor(Math.random()*11 + 1);
        
    };

    $("#reset").on("click", function(){
        reset();

    });

});