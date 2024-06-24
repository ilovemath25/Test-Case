import subprocess, os, json
from flask import Flask, render_template, jsonify, request
app = Flask(__name__)
@app.route('/')
def main():return render_template('main.html')
@app.route('/test')
def test():return render_template('test.html')
@app.route('/upload', methods = ['POST'])
def run_code():
   result = []
   type = request.form.get('type')
   io = request.form.get('io')
   file = request.files['file']
   test_cases = json.loads(io)
   os.makedirs('upload', exist_ok=True)
   file_path = os.path.join('upload', file.filename)
   file.save(file_path)
   print(f"File successfully saved to {file_path}")
   if(file.filename.endswith('.c')) and (type=="C"):
      subprocess.run(["gcc",file_path,"-o","test"])
      for test_case in test_cases:
         input_data = test_case['input']
         expected_output = test_case['output']
         actual_output = subprocess.run(["./test"], input=input_data,capture_output=True, text=True)
         actual_output = actual_output.stdout.strip()
         result.append({
            "input": input_data,
            "expected_output": expected_output,
            "actual_output": actual_output,
            "pass": actual_output == expected_output.strip()
         })
      os.remove(file_path)
      os.remove('test.exe')
   if(file.filename.endswith('.py') and (type=="Python")):
      for test_case in test_cases:
         input_data = test_case['input']
         expected_output = test_case['output']
         actual_output = subprocess.run(["python",file_path], input=input_data,capture_output=True, text=True)
         actual_output = actual_output.stdout.strip()
         result.append({
            "input": input_data,
            "expected_output": expected_output,
            "actual_output": actual_output,
            "pass": actual_output == expected_output.strip()
         })
      os.remove(file_path)
   return jsonify(result), 200
@app.route('/result')
def result():return render_template('result.html',result=result)
if __name__=='__main__':app.run(debug=True, use_reloader=False)