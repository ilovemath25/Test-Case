var selectLang = document.querySelector('.select-lang p');
selectLang.textContent = localStorage.getItem('lang');
function adjustTextareaHeight(textarea1, textarea2) {
   textarea1.style.height = '20px';
   textarea2.style.height = '20px';
   let newHeight = Math.max(textarea1.scrollHeight, textarea2.scrollHeight) + 10;
   textarea1.style.height = newHeight + 'px';
   textarea2.style.height = newHeight + 'px';
}
document.querySelector('textarea[name="input1"]').addEventListener("input",function(){
   adjustTextareaHeight(this, document.querySelector('textarea[name="output1"]'));
})
document.querySelector('textarea[name="output1"]').addEventListener("input",function(){
   adjustTextareaHeight(this, document.querySelector('textarea[name="input1"]'));
})
var index = 2;
document.addEventListener('DOMContentLoaded', function(){
   const tableData = JSON.parse(localStorage.getItem('table'));
   index = (localStorage.getItem('index') ? parseInt(localStorage.getItem('index')) : 2);
   // console.log(tableData);
   if (tableData) {
      const table = document.getElementById('test-case-table');
      table.innerHTML = '';
      tableData.forEach((test, i) => {
         const row1 = table.insertRow();
         const cell1 = row1.insertCell(0);
         const cell2 = row1.insertCell(1);
         cell1.classList.add('head');
         cell2.classList.add('head');
         cell1.innerText = `${translations[Lang].table[0]} ${i + 1}`;
         cell2.innerText = `${translations[Lang].table[1]} ${i + 1}`;
         const row2 = table.insertRow();
         const cell3 = row2.insertCell(0);
         const cell4 = row2.insertCell(1);
         cell3.innerHTML = `<textarea name="input${i + 1}" required>${test.input}</textarea>`;
         cell4.innerHTML = `<textarea name="output${i + 1}" required>${test.output}</textarea>`;
         const newInputTextarea = cell3.querySelector('textarea');
         const newOutputTextarea = cell4.querySelector('textarea');
         newInputTextarea.addEventListener("input", function(){
            adjustTextareaHeight(newInputTextarea, newOutputTextarea);
         });
         newOutputTextarea.addEventListener("input", function(){
            adjustTextareaHeight(newOutputTextarea, newInputTextarea);
         });
         adjustTextareaHeight(newInputTextarea, newOutputTextarea);
      });
      const addMoreRow = table.insertRow();
      const addMoreCell = addMoreRow.insertCell(0);
      addMoreCell.colSpan = 2;
      addMoreCell.classList.add('adder');
      addMoreCell.id = 'adder';
      addMoreCell.innerText = translations[Lang].table[2];
      addMoreCell.addEventListener('click', function(){
         if(index <= 10){
            var newRow1 = table.insertRow(table.rows.length - 1);
            var cell1 = newRow1.insertCell(0);
            var cell2 = newRow1.insertCell(1);
            cell1.classList.add('head');
            cell1.innerHTML = `<td>${translations[Lang].table[0]} ${index}</td>`;
            cell2.classList.add('head');
            cell2.innerHTML = `<td>${translations[Lang].table[1]} ${index}</td>`;
            var newRow2 = table.insertRow(table.rows.length - 1);
            var cell3 = newRow2.insertCell(0);
            var cell4 = newRow2.insertCell(1);
            cell3.innerHTML = '<textarea name="input'+index+'"></textarea>';
            cell4.innerHTML = '<textarea name="output'+index+'"></textarea>';
            var newInputTextarea = cell3.querySelector('textarea');
            var newOutputTextarea = cell4.querySelector('textarea');
            newInputTextarea.addEventListener("input", function(){
                  adjustTextareaHeight(newInputTextarea, newOutputTextarea);
            });
            newOutputTextarea.addEventListener("input", function(){
                  adjustTextareaHeight(newOutputTextarea, newInputTextarea);
            });
            index+=1;
         }
      });
   }
});
function clear_all(){
   console.log('clear');
   localStorage.removeItem("table");
   localStorage.removeItem("index");
   window.location.reload();
}
document.getElementById('adder').addEventListener('click', function(){
   if(index<=10){
      const table = document.getElementById('test-case-table');
      const newRow1 = table.insertRow(table.rows.length - 1);
      const cell1 = newRow1.insertCell(0);
      const cell2 = newRow1.insertCell(1);
      cell1.classList.add('head');
      cell1.innerHTML = `<td>${translations[Lang].table[0]} ${index}</td>`;
      cell2.classList.add('head');
      cell2.innerHTML = `<td>${translations[Lang].table[1]} ${index}</td>`;
      const newRow2 = table.insertRow(table.rows.length - 1);
      const cell3 = newRow2.insertCell(0);
      const cell4 = newRow2.insertCell(1);
      cell3.innerHTML = '<textarea name="input'+index+'"></textarea>';
      cell4.innerHTML = '<textarea name="output'+index+'"></textarea>';
      const newInputTextarea = cell3.querySelector('textarea');
      const newOutputTextarea = cell4.querySelector('textarea');
      newInputTextarea.addEventListener("input", function(){
         adjustTextareaHeight(newInputTextarea, newOutputTextarea);
      });
      newOutputTextarea.addEventListener("input", function(){
         adjustTextareaHeight(newOutputTextarea, newInputTextarea);
      });
      index+=1;
   }
});
async function send_to_python(){
   var io = [];
   for(let i=1;i<index;i++){
      const input = document.querySelector('textarea[name="input' + i + '"]').value;
      const output = document.querySelector('textarea[name="output' + i + '"]').value;
      io.push({ input: input, output: output });
   }
   localStorage.setItem("table",JSON.stringify(io));
   localStorage.setItem("index",index);
   const file = document.querySelector('.upload input[type="file"]').files[0];
   if(!file){
      alert(translations[Lang].pleaseUploadFile);
      return;
   }
   const extension = {'Python': 'py', 'C':'c'};
   if(file.name.split('.').pop().toLowerCase()!==extension[selectLang.textContent]){
      const fileTypeMismatchMsg = translations[Lang].fileTypeMismatch.replace('${extension}', extension[selectLang.textContent]);
      alert(fileTypeMismatchMsg);
      return;
   }
   var formData = new FormData();
   formData.append('type', selectLang.textContent)
   formData.append('io', JSON.stringify(io));
   formData.append('file', file);
   try{
      const response = await fetch('/upload',{
         method: 'POST',
         body: formData
      });
      if(!response.ok){
         const errorText = await response.text();
         throw new Error(`Server error: ${errorText}`);
      }
      const result = await response.text();
      console.log(result);
      localStorage.setItem('testResults', result);
      localStorage.setItem('index', index);
      window.location.href = '/result';
   }
   catch(error){
      console.error('Error:', error);
      alert('Upload failed: ' + error.message);
   }
}
document.getElementById('input-file').addEventListener('change', function() {
   var fileName = this.files[0] ? this.files[0].name : translations[Lang].upload[2];
   document.getElementById('no-file-chosen').textContent = fileName;
});