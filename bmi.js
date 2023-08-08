function bmi(){
    let weight = document.getElementById('weight');
    let height =document.getElementById('height');
    height.value = (height.value * 30)/100;
    final_result= (weight.value /( height.value * height.value)).toFixed(2);
    document.getElementById('result').innerText=final_result; 
    weight.value='';
    height.value='';


    if(final_result <= 18.5){
      document.getElementById('ans').innerHTML = "You are under weight";
    }
    else if(final_result >= 18.5 && final_result <= 24.9){
      document.getElementById('ans').innerHTML = "Your weight is normal"; 
    }
    else if(final_result >= 25 && final_result <= 29.4){
      document.getElementById('ans').innerHTML = "You are over weight";
    }
    else if(final_result >= 30 && final_result <= 35){
        document.getElementById('ans').innerHTML = "Obesity"; 
    }
    else{
      document.getElementById('ans').innerHTML = "Severe Obesity"; 
    }
}


