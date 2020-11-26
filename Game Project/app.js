function AttackOnWater() {
   
    var txtNumber = document.getElementById("scoreHP2");
    var newNumber = parseInt(txtNumber.innerHTML) - (Math.floor(Math.random() * 6) + 3) ;
    if (newNumber >= 0) {
   txtNumber.innerHTML = newNumber;
    } else alert('Wizard 1 wins!');
    }
  
  
  function MagicOnWater() {
     
    var txtNumber = document.getElementById("scoreHP2");
    //
    var txtNumber2 = document.getElementById("scoreMP1");
    //
    var newNumber = parseInt(txtNumber.innerHTML) - (Math.floor(Math.random() * 10) + 1) ;
    if (newNumber >= 0) {
   txtNumber.innerHTML = newNumber;
    } else alert('Wizard 1 wins!');
    //
    var newNumber2 = parseInt(txtNumber2.innerHTML) - (Math.floor(Math.random() * 10) + 1) ;
    if (newNumber2 >= 0) {
   txtNumber2.innerHTML = newNumber2;
    } else alert('Wizard 1 is out of magic!');
    //
    }
  
  //AntiMagicOnWater
  
  function AntiMagicOnWater() {
     
    var txtNumber = document.getElementById("scoreHP1");
    //
    var txtNumber2 = document.getElementById("scoreMP1");
    //
    var txtNumber3 = document.getElementById("scoreMP2");
    //
    var newNumber = parseInt(txtNumber.innerHTML) - (Math.floor(Math.random() * 6) + 3) ;
    if (newNumber >= 0) {
   txtNumber.innerHTML = newNumber;
    } else alert('Wizard 2 wins!');
    //
    var newNumber2 = parseInt(txtNumber2.innerHTML) - (Math.floor(Math.random() * 6) + 3) ;
    if (newNumber2 >= 0) {
   txtNumber2.innerHTML = newNumber2;
    } else alert('Wizard 1 is out of magic!');
    //
    var newNumber3 = parseInt(txtNumber3.innerHTML) - 10;
    if (newNumber3 >= 0) {
   txtNumber3.innerHTML = newNumber3;
    } else if (newNumber3 <= 10) {
      txtNumber3.innerHTML = 0 ;
      alert('Wizard 2 is out of magic!');
    } else return newNumber3;
    //
    }
  
  //
  
  
  
  function AttackOnFire() {
     
    var txtNumber = document.getElementById("scoreHP1");
    var newNumber = parseInt(txtNumber.innerHTML) - (Math.floor(Math.random() * 6) + 3) ;
    if (newNumber >= 0) {
   txtNumber.innerHTML = newNumber;
    } else alert('Wizard 2 wins!');
    }
  
  // 
  
  function MagicOnFire() {
     
    var txtNumber = document.getElementById("scoreHP1");
    //
    var txtNumber2 = document.getElementById("scoreMP2");
    //
    var newNumber = parseInt(txtNumber.innerHTML) - (Math.floor(Math.random() * 10) + 1) ;
    if (newNumber >= 0) {
   txtNumber.innerHTML = newNumber;
    } else alert('Wizard 2 wins!');
    //
    var newNumber2 = parseInt(txtNumber2.innerHTML) - (Math.floor(Math.random() * 10) + 1) ;
    if (newNumber2 >= 0) {
   txtNumber2.innerHTML = newNumber2;
    } else alert('Wizard 2 is out of magic!');
    //
    }
  
  //AntiMagicOnWater
  
  function AntiMagicOnWater() {
     
    var txtNumber = document.getElementById("scoreHP2");
    //
    var txtNumber2 = document.getElementById("scoreMP2");
    //
    var txtNumber3 = document.getElementById("scoreMP1");
    //
    var newNumber = parseInt(txtNumber.innerHTML) - (Math.floor(Math.random() * 6) + 3) ;
    if (newNumber >= 0) {
   txtNumber.innerHTML = newNumber;
    } else alert('Wizard 1 wins!');
    //
    var newNumber2 = parseInt(txtNumber2.innerHTML) - (Math.floor(Math.random() * 6) + 3) ;
    if (newNumber2 >= 0) {
   txtNumber2.innerHTML = newNumber2;
    } else alert('Wizard 2 is out of magic!');
    //
    var newNumber3 = parseInt(txtNumber3.innerHTML) - 10;
    if (newNumber3 >= 0) {
   txtNumber3.innerHTML = newNumber3;
    } else if (newNumber3 <= 10) {
      txtNumber3.innerHTML = 0 ;
      alert('Wizard 1 is out of magic!');
    } else return newNumber3;
    //
    }
  
  //