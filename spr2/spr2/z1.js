let r = Math.floor(Math.random()*19+10)
let tab = new Array();
for(let i=0;i<r;i++){
    tab[i] = Math.floor(Math.random()*9+1);
    document.write(tab[i]+" ");
}
tab.push(22,33);
let s = 0;
for(let i=0;i<tab.length;i++){
    s+=tab[i];
}
document.write("<br>"+ tab);
document.write("<br>"+ s);
s = Math.sqrt(s);
s = s.toFixed(2);
document.write("<br>"+ s);