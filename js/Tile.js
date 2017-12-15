/**
 * Created by Nico on 14/12/2017.
 */

function Tile(x,y,src,id) {
    'use strict';
    this.x = x;
    this.y = y;
    this.id = id;
    this.retourne = false;
    this.src = src;
    this.img = document.createElement("img");
    this.img.src = './img/dos.png';
    this.img.with = 110;
    this.img.height = 160;

}

Tile.prototype.setCoord = function (x, y) {
    'use strict';
    this.x = x;
    this.y = y;
};

Tile.prototype.display = function () {
    'use strict';
    if (this.retourne){
        this.img.src = './img/'+this.src+'.png'
    }
    else{
        this.img.src = './img/dos.png'
    }

};

Tile.prototype.flipTile = function () {
    'use strict';
    this.retourne = !this.retourne;
    this.display();
};
