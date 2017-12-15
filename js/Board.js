

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
    this.grille = [];
    for (i = 0; i < 5; i++) {
        this.grille[i] = [];
    }
    this.cartes = ["1CA", "1CO", "1P", "1T", "2CA", "2CO", "2P", "2T", "3CA", "3CO", "3P", "3T", "1CA", "1CO", "1P", "1T", "2CA", "2CO", "2P", "2T", "3CA", "3CO", "3P", "3T", "joker"];
    this.cartes.shuffle();
    for (i = 0; i < 5; i += 1) {
        var tr = document.createElement('tr');

        for (j = 0; j < 5; j += 1) {
            var td = document.createElement('td');
            var x = i;
            var y = j;
            this.grille[i][j] = new Tile(i, j, this.cartes[((i + 1) * (j + 1))-1],i+j*10);
            this.grille[i][j].setCoord(i,j);
            this.grille[i][j].img.addEventListener("click",function(evt){update(evt.target.id)});
            td.appendChild(this.grille[i][j].img);
            tr.appendChild(td);
        }
        tab.appendChild(tr);
    }

}


Board.prototype.update = function (id) {
    var i,j;
    console.log(this.grille);
    for(i = 0;i < 5;i++){
        for (j = 0; j < 5; j += 1){
            if (this.grille[i][j].id == id){
                alert(id+i);
                this.grille[i][j].flipTile()
            }
        }
    }
};

