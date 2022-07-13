
function mutation(arr) {

    let txt1 = arr[0].toLowerCase();
    let txt2 = arr[1].toLowerCase();
    let counter = 0;
    
    for (let x = 0; x < txt2.length; x++) {
      if(txt1.includes(txt2[x])){
        counter++;
      }
    }
  
    if (txt2.length === counter) {
      return true;
    } else {
        return false;
    }
     
  }
  
  console.log(mutation(["hello", "hey"]));