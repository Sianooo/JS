let a = prompt("podaj zdanie");
for(let i=0;i<a.length;i++){
    if(i===0 || i===a.length-1){
        if(!isNaN(a[i])){
            document.write(a[i].fontcolor("red").fontsize(7).sup())
        }else{
            document.write(a[i].fontcolor("red").fontsize(7))
        }
        
    }else{
        if(!isNaN(a[i])){
            document.write(a[i].fontcolor("green").fontsize(1).sup())
        }else{
            document.write(a[i].fontcolor("green").fontsize(1))
        }
        
    }
}

