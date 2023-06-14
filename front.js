conta = 10+20;
console.log(conta);
console.log("Eu passei o piru no pedro " + conta + " vezes");
var n = 10;
for(let i=0; i<n; i++){

    console.log("Eu passei o piru no pedro " + i + " vezes");

}

$(document).ready(function()
{
    $("#texto1").html("To mec mec life!!!: " + conta);
    $.get("http://127.0.0.1:3000/tudo", function(resultado)
    {
            $("texto2").html(resultado);
    });

});

