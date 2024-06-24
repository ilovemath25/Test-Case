document.getElementById('select-lang').addEventListener('click', function(){
   var optionDiv = document.getElementById('option-lang');
   document.getElementById('lang-option').style.display = 'none';
   if(optionDiv.style.display == 'none') optionDiv.style.display = 'block';
   else optionDiv.style.display = 'none';
});
document.querySelectorAll('.option-lang p').forEach(function(option){
   option.addEventListener('click', function(){
      var selectedLang = this.textContent;
      var optionDiv = document.getElementById('option-lang');
      document.querySelector('.select-lang p').textContent = selectedLang;
      document.querySelector('.select-lang p').style.color = "black";
      optionDiv.style.display = 'none';
   });
});
document.getElementById('start').addEventListener('click',function(){
   var selectLang = document.querySelector('.select-lang p').textContent;
   if((selectLang==='Python')||(selectLang==='C')){
      document.querySelector('.loading').style.display = 'flex';
      localStorage.setItem('lang',selectLang);
      window.location.href = '/test';
      document.querySelector('.loading').style.display = 'none';
   }
});