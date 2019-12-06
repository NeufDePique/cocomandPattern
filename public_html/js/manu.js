document.addEventListener("DOMContentLoaded", function(_e) {

    var p = ['Il suffit de traverser la rue pour trouver un travail !',
            'Si j\'étais chômeur, je n\'attendrais pas tout de l\'autre, j\'essaierais de me battre d\'abord',
            'L\'espérance c\'est le premier risque, c\'est le risque des risques.',
            'Vous n\'allez pas me faire peur avec votre t-shirt, la meilleure façon de se payer un costard c\'est de travailler.',
        ];

    var size = p.length;

    var manu = document.getElementById('imgManu');

    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    };

    manu.addEventListener("click", function(e){
        var c = document.getElementById('theConseil');
        c.innerHTML = "<p>" + p[getRandomInt(size)] + "</p>";
    });

});
