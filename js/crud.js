$(".onee").click(   function(){
    $(".one").slideToggle(400);
    $(".onee").animate({margin:"0px"},400);
    $(".two").slideUp(400);
    $(".twoo").animate({margin:"0px"},400);
    $(".three").slideUp(400);
    $(".threee").animate({margin:"0px"},400);
    $(".four").slideUp(400);
    $(".fourr").animate({margin:"0px"},400);
});
$(".twoo").click( function(){
    $(".two").slideToggle(400);
    $(".twoo").animate({margin:"0px"},400);
    $(".one").slideUp(400);
    $(".onee").animate({margin:"0px"},400);
    $(".three").slideUp(400);
    $(".threee").animate({margin:"0px"},400);
    $(".four").slideUp(400);
    $(".fourr").animate({margin:"0px"},400);
});
$(".threee").click( function(){
    $(".three").slideToggle(400);
    $(".threee").animate({margin:"0px"},400);
    $(".two").slideUp(400);
    $(".twoo").animate({margin:"0px"},400);
    $(".one").slideUp(400);
    $(".onee").animate({margin:"0px"},400);
    $(".four").slideUp(400);
    $(".fourr").animate({margin:"0px"},400);
});
$(".fourr").click(function(){
    $(".four").slideToggle(400);
    $(".fourr").animate({margin:"0px"},400);
    $(".two").slideUp(400);
    $(".twoo").animate({margin:"0px"},400);
    $(".three").slideUp(400);
    $(".threee").animate({margin:"0px"},400);
    $(".one").slideUp(400);
    $(".onee").animate({margin:"0px"},400);
});
$("textarea").keyup(function(){
    let length = $(this).val().length;
    if(length<= 100){
        let rena = 100 - length;
        $(".ch").html("<span class='text-danger me-1'>"+rena+""+"</span>Charachter Reamining");
    }
})
let oo =  $(".ua").innerWidth();
$(".gear").css("left" , +oo);


$(".gear").click(function(){
    if( $(".ua").css("left") == "0px" ){
        $(".ua").animate({ left: -oo  } ,500 );
        $(".gear").animate({left: 0} ,500);
    }else{
        $(".ua").animate({ left: 0} , 500);
        $(".gear").animate({left: +oo}, 500 );
    }
    
})

$(".ia").click(function(){
    let colorr = $(this).css("backgroundColor")
    $("h1").css("color" , colorr)
})

var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
    var now = new Date().getTime();

  // Find the distance between now and the count down date
    var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
    document.querySelector(".ap").innerHTML =  days + "d "; 
    document.querySelector(".aq").innerHTML =  hours + "h ";
    document.querySelector(".ax").innerHTML =  minutes + "m ";
    document.querySelector(".ac").innerHTML =  seconds + "s ";

  // If the count down is finished, write some text
    if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);























// /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{1,}$/

// let u = /(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])/


// console.log(u.test("iA0"));



// // let req = new XMLHttpRequest();
// // req.open("get"   , "https://jsonplaceholder.typicode.com/posts")

// let q = [];
// // req.send();
// // req.addEventListener("readystatechange"   ,   function(){


//     if( req.readyState == 4 && req.status == 200 ){
//         q =  JSON.parse(req.response);
//         diss();
//     }

// // })
// function diss(){
//     let w = "";
//     for(let i = 0 ; i <q.length ; i++){
//         w+=`<div>
//         <h2>${q[i].title}</h2>
//         <p>${q[i].body}</p>
//     </div>`
//     }
//     document.querySelector(".a").innerHTML = w
// }

// function one(){
//     console.log("hello one");
    
// }

// function two(){
//     console.log("hello two");
// }

// function three(x){
//     console.log("hello three");
//     x();
// }

// function four(x){
//     console.log("hello four");
//     x();
// }



// four(one)

// three(two);








































































// four
// one
// three
// two
