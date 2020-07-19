var arr = ['Girija','Bansal','Gullu','Jcob','Json','Papa','Mumma','Gandatashi'];
var len = arr.length;
var i;
for(i=0;i<len;i++){
    if(arr[i].charAt(0)=='j' || arr[i].charAt(0)=='J'){
        console.log('Goodbye'+' '+arr[i]);
    }
    else{
        console.log('Hello'+' '+arr[i]);
    }

    }
