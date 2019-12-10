// my lab dictionary
export const lab_dic = {
    "dot": `<style>   
    /* Create two columns/boxes that floats next to each other */
    nav {
          float: left;
          width: 40%;
          height: 150px;
          background:dimgrey;
          padding: 10px;
    }
    
    input {
          width: 50px;
          color: darkgray;
    }
    
    article {
          float: left;
          padding: 20px;
          width: 40%;
          background-color: #f1f1f1;
    }
            
    /* Clear floats after the columns */
    section:after {
          content: "";
          display: table;
          clear: both;
    }
    </style>
    
    <head>      
    <script src="/Users/levius/Desktop/EECS598/vscode_ext/helloworld/node_modules/mathjs/dist/math.js" type="text/javascript"></script>
    </head>
    
    <body>
    
    <h2>numpy.dot Lab</h2>
         
    <section>
    <nav>
    Type your input for Matrix A.
    <pre>
    Matrix A:
    <input type="number" id="A00" value="1"> <input type="number" id="A01" value="2">
    <input type="number" id="A10" value="3"> <input type="number" id="A11" value="4">
    <input type="number" id="A20" value="5"> <input type="number" id="A21" value="6">
    </pre>
    
    </nav>
    
    <nav style="background:gray;">
    Type your input for Matrix B.
    <pre>
    Matrix B:
    <input type="number" id="B00" value="1"> <input type="number" id="B01" value="2"> <input type="number" id="B02" value="3">
    <input type="number" id="B10" value="1"> <input type="number" id="B11" value="2"> <input type="number" id="B12" value="3">
    </pre>
    </nav>
    
    </section>
    <button onclick="displayResult()">Run</button>
    
    <pre id="result">
    
    </pre>
    <button onclick="clearColor()">Clear</button>
    
    <!-- <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/mathjs/5.0.0/math.js"></script> -->
    
    <script type="text/javascript">
    function clearColor(){
      document.getElementById("A00").style = "border: ";
      document.getElementById("A01").style = "border: ";
      document.getElementById("A10").style = "border: ";
      document.getElementById("A11").style = "border: ";
      document.getElementById("A20").style = "border: ";
      document.getElementById("A21").style = "border: ";
    
      document.getElementById("B00").style = "border: ";
      document.getElementById("B01").style = "border: ";
      document.getElementById("B02").style = "border: ";
      document.getElementById("B10").style = "border: ";
      document.getElementById("B11").style = "border: ";
      document.getElementById("B12").style = "border: ";
    }
    </script>
    
    <script type="text/javascript">
    function ShowBorder(a, b){
      document.getElementById("A"+a+"0").style = "border: solid red";
      document.getElementById("A"+a+"1").style = "border: solid red";
    
      document.getElementById("B0"+b).style = "border: solid blue";
      document.getElementById("B1"+b).style = "border: solid blue";
    }
    </script>
    
    <script type="text/javascript">
    function displayResult() {
      // use the location of your MathJax
      var A = math.matrix([[document.getElementById("A00").value, document.getElementById("A01").value],
                           [document.getElementById("A10").value, document.getElementById("A11").value],
                           [document.getElementById("A20").value, document.getElementById("A21").value]]);
      
      var B = math.matrix([[document.getElementById("B00").value, document.getElementById("B01").value, document.getElementById("B02").value], 
                           [document.getElementById("B10").value, document.getElementById("B11").value, document.getElementById("B12").value]])
      // get the result of dot product
      var Result = math.multiply(A, B); 
      // output the target html
      var Out_1 = '' +
      '<span style="color: darkred;">>>></span> A = np.array([[' + math.subset(A, math.index(0,0)) + ', ' + math.subset(A, math.index(0,1)) + '], [' +
      math.subset(A, math.index(1, 0)) + ', ' + math.subset(A, math.index(1, 1)) + '], [' +
      math.subset(A, math.index(2, 0)) + ', ' + math.subset(A, math.index(2, 1)) + ']])</br>' +
      '<span style="color: darkred;">>>></span> B = np.array([[' + 
      math.subset(B, math.index(0, 0)) + ', ' + math.subset(B, math.index(0, 1)) + ', ' + math.subset(B, math.index(0, 2)) + '], [' +
      math.subset(B, math.index(1, 0)) + ', ' + math.subset(B, math.index(1, 1)) + ', ' + math.subset(B, math.index(1, 2)) + ']])</br>' +
      '<span style="color: darkred;">>>></span> np.dot(A, B)</br>' + 
      'array([[' + math.subset(Result, math.index(0, 0)) + ', ' +  math.subset(Result, math.index(0, 1)) + ', ' + math.subset(Result, math.index(0, 2)) + '],</br>' +
      '       [' + math.subset(Result, math.index(1, 0)) + ', ' +  math.subset(Result, math.index(1, 1)) + ', ' + math.subset(Result, math.index(1, 2)) + '],</br>' +
      '       [' + math.subset(Result, math.index(2, 0)) + ', ' +  math.subset(Result, math.index(2, 1)) + ', ' + math.subset(Result, math.index(2, 2)) + ']])</br></br>';
    
      var Out_2 = 'Output Matrix:</br></br></br>' +
      '<span onclick="ShowBorder(0, 0)" style="border: solid purple; padding: 10px;">' + math.subset(Result, math.index(0, 0)) + '</span>' +
      '<span onclick="ShowBorder(0, 1)" style="border: solid purple; padding: 10px;">' + math.subset(Result, math.index(0, 1)) + '</span>' + 
      '<span onclick="ShowBorder(0, 2)" style="border: solid purple; padding: 10px;">' + math.subset(Result, math.index(0, 2)) + '</span></br></br></br>' + 
      '<span onclick="ShowBorder(1, 0)" style="border: solid purple; padding: 10px;">' + math.subset(Result, math.index(1, 0)) + '</span>' + 
      '<span onclick="ShowBorder(1, 1)" style="border: solid purple; padding: 10px;">' + math.subset(Result, math.index(1, 1)) + '</span>' +
      '<span onclick="ShowBorder(1, 2)" style="border: solid purple; padding: 10px;">' + math.subset(Result, math.index(1, 2)) + '</span></br></br></br>' + 
      '<span onclick="ShowBorder(2, 0)" style="border: solid purple; padding: 10px;">' + math.subset(Result, math.index(2, 0)) + '</span>' +
      '<span onclick="ShowBorder(2, 1)" style="border: solid purple; padding: 10px;">' + math.subset(Result, math.index(2, 1)) + '</span>' +
      '<span onclick="ShowBorder(2, 2)" style="border: solid purple; padding: 10px;">' + math.subset(Result, math.index(2, 2)) + '</span>';
      
      document.getElementById("result").innerHTML = Out_1 + Out_2;
    }
    </script>
    
    <script>
      displayResult();
    </script>
    
    </body>
    `,
    "sum": `<style>   
    /* Create two columns/boxes that floats next to each other */
    nav {
          float: left;
          width: 40%;
          height: 150px;
          background:dimgrey;
          padding: 10px;
    }
    
    input {
          width: 50px;
          color: darkgray;
    }
    
    article {
          float: left;
          padding: 20px;
          width: 40%;
          background-color: #f1f1f1;
    }
            
    /* Clear floats after the columns */
    section:after {
          content: "";
          display: table;
          clear: both;
    }
    </style>
    
    <head>      
    <script src="/Users/levius/Desktop/EECS598/vscode_ext/helloworld/node_modules/mathjs/dist/math.js" type="text/javascript"></script>
    </head>
    
    <body>
    
    <h2>numpy.sum Lab</h2>
         
    <section>
    <nav>
    Type your input for Matrix A.
    <pre>
    Matrix A:
    <input type="number" id="A00" value="1"> <input type="number" id="A01" value="2">
    <input type="number" id="A10" value="3"> <input type="number" id="A11" value="4">
    <input type="number" id="A20" value="5"> <input type="number" id="A21" value="6">
    axis = <input type="number" id="axis" value="0">
    </pre>
    
    </nav>
    
    </section>
    <button onclick="displayResult()">Run</button>
    
    <pre id="result">
    
    </pre>
    <button onclick="clearColor()">Clear</button>
    
    <!-- <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/mathjs/5.0.0/math.js"></script> -->
    
    <script type="text/javascript">
    function clearColor(){
      document.getElementById("A00").style = "border: ";
      document.getElementById("A01").style = "border: ";
      document.getElementById("A10").style = "border: ";
      document.getElementById("A11").style = "border: ";
      document.getElementById("A20").style = "border: ";
      document.getElementById("A21").style = "border: ";
    }
    </script>
    
    <script type="text/javascript">
    function ShowRow(a){
      document.getElementById("A"+a+"0").style = "border: solid red";
      document.getElementById("A"+a+"1").style = "border: solid red";
    }
    
    function ShowColumn(a){
      document.getElementById("A0"+a).style = "border: solid red";
      document.getElementById("A1"+a).style = "border: solid red";
      document.getElementById("A2"+a).style = "border: solid red";
    }
    
    function ShowAll(){
      document.getElementById("A00").style = "border: solid red";
      document.getElementById("A10").style = "border: solid red";
      document.getElementById("A20").style = "border: solid red";
      document.getElementById("A01").style = "border: solid red";
      document.getElementById("A11").style = "border: solid red";
      document.getElementById("A21").style = "border: solid red";
    }
    </script>
    
    <script type="text/javascript">
    function displayResult() {
      // use the location of your MathJax
      var A = math.matrix([[document.getElementById("A00").value, document.getElementById("A01").value],
                           [document.getElementById("A10").value, document.getElementById("A11").value],
                           [document.getElementById("A20").value, document.getElementById("A21").value]]);
      // get the axis
      var a00 = document.getElementById("A00").value;
      var a01 = document.getElementById("A01").value;
      var a10 = document.getElementById("A10").value;
      var a11 = document.getElementById("A11").value;
      var a20 = document.getElementById("A20").value;
      var a21 = document.getElementById("A21").value;
    
      var axis = document.getElementById("axis").value
    
      if (axis == 0){
        var col1 = math.sum(a00, a10, a20);
        var col2 = math.sum(a01, a11, a21);
        console.log(col1);
        console.log(col2);
        console.log(axis);
    
        var Out_1 = '' +
        '<span style="color: darkred;">>>></span> A = np.array([[' + math.subset(A, math.index(0,0)) + ', ' + math.subset(A, math.index(0,1)) + '], [' +
        math.subset(A, math.index(1, 0)) + ', ' + math.subset(A, math.index(1, 1)) + '], [' +
        math.subset(A, math.index(2, 0)) + ', ' + math.subset(A, math.index(2, 1)) + ']])</br>' +  
        '<span style="color: darkred;">>>></span> np.sum(A, axis=0)</br>' + 
        'array([' + col1 + ', ' + col2 + '])</br></br>';
    
        var Out_2 = 'Output Matrix:</br></br></br>' +
      '<span onclick="ShowColumn(0)" style="border: solid purple; padding: 10px;">' + col1 + '</span>' +
      '<span onclick="ShowColumn(1)" style="border: solid purple; padding: 10px;">' + col2 + '</span>';
    
        document.getElementById("result").innerHTML = Out_1 + Out_2;
      }
      else if (axis == 1){
        var row0 = math.sum(a00, a01);
        var row1 = math.sum(a10, a11);
        var row2 = math.sum(a20, a21);
        console.log(row0);
        console.log(row1);
        console.log(row2);
    
        var Out_1 = '' + 
        '<span style="color: darkred;">>>></span> A = np.array([[' + math.subset(A, math.index(0,0)) + ', ' + math.subset(A, math.index(0,1)) + '], [' +
        math.subset(A, math.index(1, 0)) + ', ' + math.subset(A, math.index(1, 1)) + '], [' +
        math.subset(A, math.index(2, 0)) + ', ' + math.subset(A, math.index(2, 1)) + ']])</br>' +  
        '<span style="color: darkred;">>>></span> np.sum(A, axis=1)</br>' + 
        'array([' + row0 + ', ' + row1 + ', ' + row2 + '])</br></br>';
    
        var Out_2 = 'Output Matrix:</br></br></br>' +
      '<span onclick="ShowRow(0)" style="border: solid purple; padding: 10px;">' + row0 + '</span>' +
      '<span onclick="ShowRow(1)" style="border: solid purple; padding: 10px;">' + row1 + '</span>' +
      '<span onclick="ShowRow(2)" style="border: solid purple; padding: 10px;">' + row2 + '</span>';
    
        document.getElementById("result").innerHTML = Out_1 + Out_2;
      }
      else{
        var r = math.sum(a00, a01, a10, a11, a20, a21);
        var Out_1 = '' + 
        '<span style="color: darkred;">>>></span> A = np.array([[' + math.subset(A, math.index(0,0)) + ', ' + math.subset(A, math.index(0,1)) + '], [' +
        math.subset(A, math.index(1, 0)) + ', ' + math.subset(A, math.index(1, 1)) + '], [' +
        math.subset(A, math.index(2, 0)) + ', ' + math.subset(A, math.index(2, 1)) + ']])</br>' +  
        '<span style="color: darkred;">>>></span> np.sum(A)</br>' + 
        'array([' + r + '])</br></br>';
    
        var Out_2 = 'Output Matrix:</br></br></br>' +
        '<span onclick="ShowAll()" style="border: solid purple; padding: 10px;">' + r + '</span>';
        document.getElementById("result").innerHTML = Out_1 + Out_2;
    
      }
    
      // output the target html
      /*
      var Out_1 = '' +
      '<span style="color: darkred;">>>></span> A = np.array([[' + math.subset(A, math.index(0,0)) + ', ' + math.subset(A, math.index(0,1)) + '], [' +
      math.subset(A, math.index(1, 0)) + ', ' + math.subset(A, math.index(1, 1)) + '], [' +
      math.subset(A, math.index(2, 0)) + ', ' + math.subset(A, math.index(2, 1)) + ']])</br>' +
      '<span style="color: darkred;">>>></span> B = np.array([[' + 
      math.subset(B, math.index(0, 0)) + ', ' + math.subset(B, math.index(0, 1)) + ', ' + math.subset(B, math.index(0, 2)) + '], [' +
      math.subset(B, math.index(1, 0)) + ', ' + math.subset(B, math.index(1, 1)) + ', ' + math.subset(B, math.index(1, 2)) + ']])</br>' +
      '<span style="color: darkred;">>>></span> np.dot(A, B)</br>' + 
      'array([[' + math.subset(Result, math.index(0, 0)) + ', ' +  math.subset(Result, math.index(0, 1)) + ', ' + math.subset(Result, math.index(0, 2)) + '],</br>' +
      '       [' + math.subset(Result, math.index(1, 0)) + ', ' +  math.subset(Result, math.index(1, 1)) + ', ' + math.subset(Result, math.index(1, 2)) + '],</br>' +
      '       [' + math.subset(Result, math.index(2, 0)) + ', ' +  math.subset(Result, math.index(2, 1)) + ', ' + math.subset(Result, math.index(2, 2)) + ']])</br></br>';
    
      var Out_2 = 'Output Matrix:</br></br></br>' +
      '<span onclick="ShowBorder(0, 0)" style="border: solid purple; padding: 10px;">' + math.subset(Result, math.index(0, 0)) + '</span>' +
      '<span onclick="ShowBorder(0, 1)" style="border: solid purple; padding: 10px;">' + math.subset(Result, math.index(0, 1)) + '</span>' + 
      '<span onclick="ShowBorder(0, 2)" style="border: solid purple; padding: 10px;">' + math.subset(Result, math.index(0, 2)) + '</span></br></br></br>' + 
      '<span onclick="ShowBorder(1, 0)" style="border: solid purple; padding: 10px;">' + math.subset(Result, math.index(1, 0)) + '</span>' + 
      '<span onclick="ShowBorder(1, 1)" style="border: solid purple; padding: 10px;">' + math.subset(Result, math.index(1, 1)) + '</span>' +
      '<span onclick="ShowBorder(1, 2)" style="border: solid purple; padding: 10px;">' + math.subset(Result, math.index(1, 2)) + '</span></br></br></br>' + 
      '<span onclick="ShowBorder(2, 0)" style="border: solid purple; padding: 10px;">' + math.subset(Result, math.index(2, 0)) + '</span>' +
      '<span onclick="ShowBorder(2, 1)" style="border: solid purple; padding: 10px;">' + math.subset(Result, math.index(2, 1)) + '</span>' +
      '<span onclick="ShowBorder(2, 2)" style="border: solid purple; padding: 10px;">' + math.subset(Result, math.index(2, 2)) + '</span>';
      
      document.getElementById("result").innerHTML = Out_1 + Out_2;
      */
    }
    </script>
    
    <script>
      displayResult();
    </script>
    
    </body>`
};