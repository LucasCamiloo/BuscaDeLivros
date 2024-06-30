

function zero() {

    document.getElementById("modalp").innerHTML = document.getElementById("0p").innerHTML;

}
function um() {

    document.getElementById("modalp").innerHTML = document.getElementById("1p").innerHTML;
}
function dois() {

    document.getElementById("modalp").innerHTML = document.getElementById("2p").innerHTML;
}
function tres() {

    document.getElementById("modalp").innerHTML = document.getElementById("3p").innerHTML;
}
function quatro() {

    document.getElementById("modalp").innerHTML = document.getElementById("4p").innerHTML;
}
function cinco() {
    document.getElementById("modalp").innerHTML = document.getElementById("5p").innerHTML;
}
function seis() {

    document.getElementById("modalp").innerHTML = document.getElementById("6p").innerHTML;
}
function sete() {

    document.getElementById("modalp").innerHTML = document.getElementById("7p").innerHTML;
}
function oito() {

    document.getElementById("modalp").innerHTML = document.getElementById("8p").innerHTML;
}
function nove() {

    document.getElementById("modalp").innerHTML = document.getElementById("9p").innerHTML;
}




console.log(asa);
function Limpar() {

    window.location.reload();
}
function Busca() {

    var x = document.getElementById("div");
    x.style.display = "block";

    let valor = document.getElementById("textinput").value;
    let resposta =
        "https://www.googleapis.com/books/v1/volumes?q=" +
        valor +
        "&callback=handleResponse";

    document.getElementById("resposta").setAttribute("src", resposta);
}

function handleResponse(response) {
    for (var i = 0; i < response.items.length; i++) {
        var item = response.items[i];

        document.getElementById(i.toString() + "t").innerHTML +=


            item.volumeInfo.title

            ;

        document.getElementById(i.toString() + "m").innerHTML +=


            "<br> AUTOR: ".bold() +
            item.volumeInfo.authors
            ;

        document.getElementById(i.toString() + "p").innerHTML +=

            "TITULO: ".bold() +
            item.volumeInfo.title +
            "<br> AUTOR: ".bold() +
            item.volumeInfo.authors
            ;
       
        var r = i + 1;
        var asa;

        try {
            document.getElementById(i.toString() + "d").innerHTML = "Descrição: ".bold() + item.volumeInfo.description + "<br>";

        } catch (error) {
            document.getElementById(i.toString() + "d").innerHTML = "sem descrição" + "<br>";
        }


        // document.getElementById(i.toString() + "f").innerHTML += item.volumeInfo.imageLinks.thumbnail;
        try {
            console.log(item.volumeInfo.imageLinks.thumbnail);
            document.getElementById(i.toString() + "f").setAttribute("src", item.volumeInfo.imageLinks.thumbnail);
        } catch (error) {
            document.getElementById(i.toString() + "f").setAttribute("src", 'nofoto.png');
        }


        try {
            document.getElementById(i.toString()).setAttribute("src", item.volumeInfo.imageLinks.thumbnail);
        } catch (error) {
            document.getElementById(i.toString()).setAttribute("src", 'nofoto.png');
        }
        document.getElementById("resul").innerHTML = "resultados " + r;
    }


}