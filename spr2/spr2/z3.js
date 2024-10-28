let a = prompt("podaj liczbe");
let b = prompt("podaj liczbe");
if(isNaN(a) || isNaN(b)){
    document.write("to nie sa liczby");
}else{
    document.write("<br> pobrane liczby: "+ a + " i "+b)
    a=Math.abs(a);
    b=Math.abs(b);
    document.write("<br> wartosc absolutna: "+ a + " i "+b)
    a=Math.floor(a);
    b=Math.ceil(b);
    document.write("<br> zaokraglone liczby: "+ a + " i "+b)
    let c = Math.pow(a,b);
    document.write("<br> potęga tych liczb: "+c)
    let tab = new Array();
    for(let i=0;i<20;i++){
        tab[i] = c;
        c-=10;
    }
    document.write("<br> wypelniona tablica: "+tab);
    let s=tab.join(",")
    document.write("<br> string: "+s);
    for(let i=0;i<s.length;i++){
     s=s.replace(",",":");
     s=s.replace("1","");
    }
    
    document.write("<br> zmieniony string: "+s);
    document.write("<br> zolte 6 w stringu: ");
    for(let i=0;i<s.length;i++){
        if(s[i]==='6'){
            document.write(s[i].fontcolor("yellow"));
        }else{
            document.write(s[i]);
        }
       }
}