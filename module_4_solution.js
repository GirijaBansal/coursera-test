var arr = ['Yaakov','John','Jen','Jason','Paul','Frank','Larry','Paula','Laura','Jim'];
var len = arr.length;
var i;
for(i=0;i<len;i++){
    if(arr[i].charAt(0)=='j' || arr[i].charAt(0)=='J'){
        console.log('Good Bye'+' '+arr[i]);
    }
    else{
        console.log('Hello'+' '+arr[i]);
    }

    }
