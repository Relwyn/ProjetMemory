/**
 * Created by Nico on 15/12/2017.
 */
var B = new Board();
var nbclic = 0;
var id1,id2;
function update(id) {
    if (nbclic == 0){
        id1 = id;
        B.update(id,nbclic);
        nbclic +=1;
    }
    if (nbclic == 1 && id1!=id ){
        id2 = id;
        B.update(id,nbclic);
        nbclic +=1;
    }
    if (nbclic == 2 && id1!=id && id2!=id){
        B.verif(id1,id2);

        nbclic = 0;
    }

}