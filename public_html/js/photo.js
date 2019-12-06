var cpt=1;

var superphotodelamortquitue =document.getElementById("jeancloud");
superphotodelamortquitue.src = './images/'+cpt+'.svg';
console.log(superphotodelamortquitue);
superphotodelamortquitue.click(function(){
    cpt++;
    superphotodelamortquitue.src = './images/'+cpt+'.svg';
    console.log("bite");
})