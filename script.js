function convert(){
    let val=Number(document.getElementById("input").value)
    let res=0
    if(val<50)
      res=val*0.75
      else if(val>50 && val<=100)
       res=(50*0.75) + (val-50)*1
       else if(val>100 && val<=200)
       res=(100*1) + (val-100)*1.30
       else
       res=(200*1.30) + (val-200)*1.50

    let result=document.getElementById("result")
    result.innerHTML="Rs."+ res 
}

