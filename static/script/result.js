function adjustTextareaHeight(textarea1, textarea2) {
   textarea1.style.height = '20px';
   textarea2.style.height = '20px';
   let newHeight = Math.max(textarea1.scrollHeight, textarea2.scrollHeight) + 10;
   textarea1.style.height = newHeight + 'px';
   textarea2.style.height = newHeight + 'px';
}
document.addEventListener('DOMContentLoaded', function() {
   const result_string = localStorage.getItem('testResults');
   const result = JSON.parse(result_string);
   if (result) {
      const table = document.getElementById('test-case-table');
      result.forEach((test, index) => {
         const row1 = table.insertRow();
         const cell1 = row1.insertCell(0);
         const cell2 = row1.insertCell(1);
         cell1.classList.add('head');
         cell2.classList.add('head');
         cell1.innerText = `${translations[Lang].table[0]} ${index + 1}`;
         cell2.innerText = `${translations[Lang].table[1]} ${index + 1}`;
         const row2 = table.insertRow();
         const cell3 = row2.insertCell(0);
         const cell4 = row2.insertCell(1);
         cell3.innerHTML = `<textarea readonly>${test.input}</textarea>`;
         cell4.innerHTML = `<textarea readonly>${test.actual_output}</textarea>`;
         const newInputTextarea = cell3.querySelector('textarea');
         const newOutputTextarea = cell4.querySelector('textarea');
         adjustTextareaHeight(newInputTextarea, newOutputTextarea);
         adjustTextareaHeight(newOutputTextarea, newInputTextarea);
         if (test.pass) {
            cell3.querySelector('textarea').style.backgroundColor = '#99ff99';
            cell4.querySelector('textarea').style.backgroundColor = '#99ff99';
            cell3.style.backgroundColor = '#99ff99';
            cell4.style.backgroundColor = '#99ff99';
            const newInputTextarea = cell3.querySelector('textarea');
            const newOutputTextarea = cell4.querySelector('textarea');
            adjustTextareaHeight(newInputTextarea, newOutputTextarea);
            adjustTextareaHeight(newOutputTextarea, newInputTextarea);
        } else {
            cell3.querySelector('textarea').style.backgroundColor = '#ffb3b3';
            cell4.querySelector('textarea').style.backgroundColor = '#ffb3b3';
            cell3.style.backgroundColor = '#ffb3b3';
            cell4.style.backgroundColor = '#ffb3b3';
            const newInputTextarea = cell3.querySelector('textarea');
            const newOutputTextarea = cell4.querySelector('textarea');
            adjustTextareaHeight(newInputTextarea, newOutputTextarea);
            adjustTextareaHeight(newOutputTextarea, newInputTextarea);
            const row3 = table.insertRow();
            const cell5 = row3.insertCell(0);
            const row4 = table.insertRow();
            const cell6 = row4.insertCell(0);
            cell5.colSpan = 2;
            cell5.classList.add('head');
            cell5.innerHTML = translations[Lang].table[3];
            cell6.colSpan = 2;
            cell6.innerHTML = `<textarea readonly style="background-color: #ffffe6;">${test.expected_output}</textarea>`;
            cell6.style.backgroundColor = '#ffffe6';
            const ExpectedOutput = cell6.querySelector('textarea');
            adjustTextareaHeight(ExpectedOutput, ExpectedOutput);
         }
      });
   }
});