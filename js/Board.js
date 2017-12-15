

function randomInt(mini, maxi) {
    'use strict';
    var nb = mini + (maxi + 1 - mini) * Math.random();
    return Math.floor(nb);
}

Array.prototype.shuffle = function (n) {
    'use strict';
    if (!n)
        n = this.length;
    if (n > 1) {
        var i = randomInt(0, n - 1);
        var tmp = this[i];
        this[i] = this[n - 1];
        this[n - 1] = tmp;
        this.shuffle(n - 1);
    }
};


function Board() {
    'use strict';
    var tab = document.getElementById('grille');
    var i, j;
    var grille = [];
    for (i = 0; i < 9; i++) {
        grille[i] = [];
    }
    this.cartes = ["1CA", "1CO", "1P", "1T", "2CA", "2CO", "2P", "2T", "3CA", "3CO", "3P", "3T", "1CA", "1CO", "1P", "1T", "2CA", "2CO", "2P", "2T", "3CA", "3CO", "3P", "3T", "joker"];
    this.cartes.shuffle();
    alert(this.cartes);
    for (i = 0; i < 5; i += 1) {
        var tr = document.createElement('tr');

        for (j = 0; j < 5; j += 1) {
            var td = document.createElement('td');
            grille[i][j] = new Tile(i, j, this.cartes[((i + 1) * (j + 1))-1]);
            td.appendChild(grille[i][j].img);
            tr.appendChild(td);
        }
        tab.appendChild(tr);
    }

}

