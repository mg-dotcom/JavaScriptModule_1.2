function minMedMax(num1,num2,num3){
    let result={}
    let min=num1
    if(min>num2){
        min=num2
    }else{
        min=num3
    }

    let max=num1
    if(max<num2){
        max=num2
    }else{
        max=num3
    }

    let med;
  if (num1 !== min && num1 !== max) {
    med = num1;
  } else if (num2 !== min && num2 !== max) {
    med = num2;
  } else {
    med = num3;
  }

    return result={min:min,med:med,max:max}

}
console.log(minMedMax(5, 2, 8))