document.getElementById('lang').addEventListener('click', function(){
   var option_Div = document.getElementById('lang-option');
   try{document.getElementById('option-lang').style.display = 'none';}catch{}
   if(option_Div.style.display == 'none') option_Div.style.display = 'block';
   else option_Div.style.display = 'none';
});