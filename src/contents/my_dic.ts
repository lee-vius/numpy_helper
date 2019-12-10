// my dictionary
export const my_dic = {
	"arange": `<body>
	<h1 style="font: 100;font-family: 'Courier New', Courier, monospace;">numpy.arange</h1>
	<p>
		 <span style="font-family: 'Courier New', Courier, monospace;">
			  numpy.arange(<i>[start, ]stop, [step, ]dtype=None</i>)</span>
		 <a href="https://docs.scipy.org/doc/numpy/reference/generated/numpy.arange.html?highlight=arange#numpy.arange"> Link to Documentation</a>
	</p>
	<p>
		 Return evenly spaced values within a given interval. </br>
		 Values are generated within the half-open interval [start, stop) (in other words, the interval including start but excluding stop). 
	<pre>
	Parameters:
			  start: <i>number, optional</i>
			  stop: <i>number</i>
			  step: <i>number, optional</i>
			  dtype: <i>dtype</i>
	Returns:
			  arange: <i>ndarray</i>
	</pre>
	</p>
	<p>
		 Example: </br></br>
		 <div style="background-color:dimgray;font-family: 'Courier New', Courier, monospace;"v>
		 <p> 
			  <pre>
	<span style="color: darkred;">>>></span> np.arange(3)
	array([0, 1, 2])
	<span style="color: darkred;">>>></span> np.arange(3.0)
	array([ 0.,  1.,  2.])
	<span style="color: darkred;">>>></span> np.arange(3,7)
	array([3, 4, 5, 6])
	<span style="color: darkred;">>>></span> np.arange(3,7,2)
	array([3, 5])
			  </pre> 
		 </p>
		 </div>
	</p>
</body>`,

	"array": `<body>
	<h1 style="font: 100;font-family: 'Courier New', Courier, monospace;">numpy.array</h1>
	<p>
		 <span style="font-family: 'Courier New', Courier, monospace;">
			  numpy.array(<i>object, dtype=None, copy=True, order='K', subok=False, ndmin=0</i>)</span>
		 <a href="https://numpy.org/devdocs/reference/generated/numpy.array.html?highlight=array#numpy.array"> Link to Documentation</a>
	</p>
	<p>
	Create an array
	<pre>
	Parameters:
			  object: <i> array_like</i>
			  dtype: <i>data-type, optional</i>
			  copy: <i>bool, optional</i>
			  order: <i>{'K','A','C','F'} , optional</i>
			  subok: <i>bool, optional</i>
			  ndmin: <i>int, optional</i>
	Returns:
			  out: <i>ndarray</i>
	</pre>
	</p>
	<p>
		 Example: </br></br>
		 Upcasting:
		 <div style="background-color:dimgray;font-family: 'Courier New', Courier, monospace;"v>
		 <p> 
			  <pre>
	<span style="color: darkred;">>>></span> np.array([1, 2, 3.0])
	array([ 1.,  2.,  3.])
			  </pre> 
		 </p>

		 </div>
		 Multiple dimension:
		 <div style="background-color:dimgray;font-family: 'Courier New', Courier, monospace;"v>
		 <p> 
			  <pre>
	<span style="color: darkred;">>>></span> np.array([[1, 2], [3, 4]])
	array([[1, 2],
		   [3, 4]])
			  </pre> 
		 </p>
		 </div>

	</div>
	Minimum dimensions 2:
	<div style="background-color:dimgray;font-family: 'Courier New', Courier, monospace;"v>
	<p> 
		 <pre>
	<span style="color: darkred;">>>></span> np.array([1, 2, 3], ndmin=2)
	array([[1, 2, 3]])
		 </pre> 
	</p>
	</div>

	Type provided:
	<div style="background-color:darkgray;font-family: 'Courier New', Courier, monospace;"v>
	<p> 
		 <pre>
	<span style="color: darkred;">>>></span> np.array([1, 2, 3], dtype=complex)
	array([ 1.+0.j,  2.+0.j,  3.+0.j])
		 </pre> 
	</p>
	</div>
	</p>
</body>`,

	"dot": `<body>
	<h1 style="font: 100;font-family: 'Courier New', Courier, monospace;">numpy.dot</h1>
	<p>
		 <span style="font-family: 'Courier New', Courier, monospace;">
			  numpy.dot(<i>a, b, out=None</i>)</span>
		 <a href="https://numpy.org/devdocs/reference/generated/numpy.dot.html?highlight=dot#numpy.dot"> Link to Documentation</a>
	</p>
	<p>
	Dot product of two arrays.
	<ul>
		 <li>If both a and b are 1-D arrays, it is inner product of vectors (without complex conjugation)</li>
		 <li>If both a and b are 2-D arrays, it is matrix multiplication</li>
	</ul>
	<pre>
	Parameters:
			  a: <i> array_like</i>
			  b: <i> array_like</i>
			  out: <i>ndarray, optional</i>
	Returns:
			  output: <i>ndarray</i>
	</pre>
	</p>
	<p>
		 Example: </br></br>
		 For 2D arrays
		 <div style="background-color:dimgray;font-family: 'Courier New', Courier, monospace;"v>
		 <p> 
			  <pre>
	<span style="color: darkred;">>>></span> a = [[1, 0], [0, 1]]
	<span style="color: darkred;">>>></span> b = [[4, 1], [2, 2]]
	<span style="color: darkred;">>>></span> np.dot(a, b)
	array([[4, 1],
		   [2, 2]])
			  </pre> 
		 </p>
		 </div>
	</p>
</body>`,

	"dtype": `<body>
	<h1 style="font: 100;font-family: 'Courier New', Courier, monospace;">numpy.dtype</h1>
	<p>
		 <span style="font-family: 'Courier New', Courier, monospace;">
			  numpy.dtype(<i>obj, align=False, copy=False</i>)</span>
		 <a href="https://docs.scipy.org/doc/numpy/reference/generated/numpy.dtype.html?highlight=dtype#numpy.dtype"> Link to Documentation</a>
	</p>
	<p>
	Create an array
	<pre>
	Parameters:
			  obj: Object to be converted to a data type object.
			  align: <i>bool, optional</i>
			  copy: <i>bool, optional</i>
	</pre>
	</p>
	<p>
		 Example: </br></br>
		 Using array-scalar type:
		 <div style="background-color:dimgray;font-family: 'Courier New', Courier, monospace;"v>
		 <p> 
			  <pre>
	<span style="color: darkred;">>>></span> np.dtype(np.int16)
	dtype('int16')
			  </pre> 
		 </p>

		 </div>
		 Structured type, one field name 'f1', containing int16:
		 <div style="background-color:dimgray;font-family: 'Courier New', Courier, monospace;"v>
		 <p> 
			  <pre>
	<span style="color: darkred;">>>></span> np.dtype([('f1', np.int16)])
	dtype([('f1', '&lti2')])
			  </pre> 
		 </p>
		 </div>
	</p>
</body>`,

	"mean": `<body>
	<h1 style="font: 100;font-family: 'Courier New', Courier, monospace;">numpy.mean</h1>
	<p>
		 <span style="font-family: 'Courier New', Courier, monospace;">
			  numpy.mean(<i>a, axis=None, dtype=None, out=None, keepdims=&ltno value&gt</i>)</span>
		 <a href="https://docs.scipy.org/doc/numpy/reference/generated/numpy.mean.html?highlight=mean#numpy.mean"> Link to Documentation</a>
	</p>
	<p>
		 Compute the arithmetic mean along the specified axis.
	<pre>
	Parameters:
			  a: <i>array_like</i>
			  axis: <i>None or int or tuple of ints, optional</i>
			  dtype: <i>dtype, optional</i>
			  out: <i>ndarray, optional</i>
			  keepdims: <i>bool, optional</i>
	Returns:
			  m: <i>ndarray</i>
	</pre>
	</p>
	<p>
		 Example: </br></br>
<div style="background-color:dimgrey;font-family: 'Courier New', Courier, monospace;"v>
<p> 
<pre>
	<span style="color: darkred;">>>></span> a = np.array([[1, 2], [3, 4]])
	<span style="color: darkred;">>>></span> np.mean(a)
	2.5
	<span style="color: darkred;">>>></span> nnp.mean(a, axis=0)
	array([2., 3.])
	<span style="color: darkred;">>>></span> np.mean(a, axis=1)
	array([1.5, 3.5])
</pre> 
</p>
</div>
In single precision, mean can be inaccurate:
<div style="background-color:dimgrey;font-family: 'Courier New', Courier, monospace;"v>
<p> 
<pre>
	<span style="color: darkred;">>>></span> a = np.zeros((2, 512*512), dtype=np.float32)
	<span style="color: darkred;">>>></span> a[0, :] = 1.0
	<span style="color: darkred;">>>></span> a[1, :] = 0.1
	<span style="color: darkred;">>>></span> np.mean(a)
	0.54999924
</pre> 
</p>
</div>
</p>

</body>`,

	"ndim": `<body>
	<h1 style="font: 100;font-family: 'Courier New', Courier, monospace;">numpy.broadcast.ndim</h1>
	<p>
		 <span style="font-family: 'Courier New', Courier, monospace;">
			  broadcast.ndim</span>
		 <a href="https://docs.scipy.org/doc/numpy/reference/generated/numpy.broadcast.ndim.html?highlight=ndim#numpy.broadcast.ndim"> Link to Documentation</a>
	</p>
	<p>
		 Number of dimensions of broadcasted result.
	</p>
	<p>
		 Example: </br></br>
		 <div style="background-color:dimgray;font-family: 'Courier New', Courier, monospace;"v>
		 <p> 
			  <pre>
	<span style="color: darkred;">>>></span> x = np.array([1, 2, 3])
	<span style="color: darkred;">>>></span> y = np.array([[4], [5], [6]])
	<span style="color: darkred;">>>></span> b = np.broadcast(x, y)
	<span style="color: darkred;">>>></span> b.ndim
	2
			  </pre> 
		 </p>
		 </div>
	</p>
</body>`, 

	"ones": `<body>
	<h1 style="font: 100;font-family: 'Courier New', Courier, monospace;">numpy.ones</h1>
	<p>
		 <span style="font-family: 'Courier New', Courier, monospace;">
			  numpy.ones(<i>shape, dtype=None, order='C'</i>)</span>
		 <a href="https://docs.scipy.org/doc/numpy/reference/generated/numpy.ones.html?highlight=ones#numpy.ones"> Link to Documentation</a>
	</p>
	<p>
		 Return a new array of given shape and type, filled with ones. 
	<pre>
	Parameters:
			  shape: <i>int or sequence of ints</i>
			  dtype: <i>data-type, optional</i>
			  order: <i>{'C', 'F'}, optional, default: C</i>
	Returns:
			  out: <i>ndarray</i>
	</pre>
	</p>
	<p>
		 Example: </br></br>
		 <div style="background-color:dimgray;font-family: 'Courier New', Courier, monospace;"v>
		 <p> 
			  <pre>
	<span style="color: darkred;">>>></span> np.ones(5)
	array([1., 1., 1., 1., 1.])
			  </pre> 
		 </p>
		 </div>

		 <div style="background-color:dimgray;font-family: 'Courier New', Courier, monospace;"v>
		 <p> 
			  <pre>
	<span style="color: darkred;">>>></span> np.ones((5,), dtype=int)
	array([1, 1, 1, 1, 1])
			  </pre> 
		 </p>
		 </div>

	</div>

	<div style="background-color:dimgray;font-family: 'Courier New', Courier, monospace;"v>
	<p> 
		 <pre>
	<span style="color: darkred;">>>></span> np.ones((2, 1))
	array([[1.],
		   [1.]])
		 </pre> 
	</p>
	</div>
	</p>
</body>`,

	"shape": `<body>
	<h1 style="font: 100;font-family: 'Courier New', Courier, monospace;">numpy.broadcast.shape</h1>
	<p>
		 <span style="font-family: 'Courier New', Courier, monospace;">
			  broadcast.shape</span>
		 <a href="https://docs.scipy.org/doc/numpy/reference/generated/numpy.broadcast.shape.html?highlight=ndim#numpy.broadcast.shape"> Link to Documentation</a>
	</p>
	<p>
		 Shape of broadcasted result.
	</p>
	<p>
		 Example: </br></br>
		 <div style="background-color:dimgray;font-family: 'Courier New', Courier, monospace;"v>
		 <p> 
			  <pre>
	<span style="color: darkred;">>>></span> x = np.array([1, 2, 3])
	<span style="color: darkred;">>>></span> y = np.array([[4], [5], [6]])
	<span style="color: darkred;">>>></span> b = np.broadcast(x, y)
	<span style="color: darkred;">>>></span> b.shape
	(3, 3)
			  </pre> 
		 </p>
		 </div>
	</p>
</body>`, 

	"size": `<body>
	<h1 style="font: 100;font-family: 'Courier New', Courier, monospace;">numpy.broadcast.size</h1>
	<p>
		 <span style="font-family: 'Courier New', Courier, monospace;">
			  broadcast.size</span>
		 <a href="https://docs.scipy.org/doc/numpy/reference/generated/numpy.broadcast.size.html?highlight=size#numpy.broadcast.size"> Link to Documentation</a>
	</p>
	<p>
		 Total size of broadcasted result.
	</p>
	<p>
		 Example: </br></br>
		 <div style="background-color:dimgray;font-family: 'Courier New', Courier, monospace;"v>
		 <p> 
			  <pre>
	<span style="color: darkred;">>>></span> x = np.array([1, 2, 3])
	<span style="color: darkred;">>>></span> y = np.array([[4], [5], [6]])
	<span style="color: darkred;">>>></span> b = np.broadcast(x, y)
	<span style="color: darkred;">>>></span> b.size
	9
			  </pre> 
		 </p>
		 </div>
	</p>
</body>`,

	"sum": `<body>
	<h1 style="font: 100;font-family: 'Courier New', Courier, monospace;">numpy.sum</h1>
	<p>
		 <span style="font-family: 'Courier New', Courier, monospace;">
			  numpy.sum(<i>a, axis=None, dtype=None, out=None, keepdims=&ltno value&gt, initial=&ltno value&gt, where=&ltno value&gt</i>)</span>
		 <a href="https://docs.scipy.org/doc/numpy/reference/generated/numpy.sum.html?highlight=sum#numpy.sum"> Link to Documentation</a>
	</p>
	<p>
		 Sum of array elements over a given axis.
	<pre>
	Parameters:
			  a: <i>array_like</i>
			  axis: <i>None or int or tuple of ints, optional</i>
			  dtype: <i>dtype, optional</i>
			  out: <i>ndarray, optional</i>
			  keepdims: <i>bool, optional</i>
			  initial: <i>scalar, optional</i>
			  where: <i>array_like of bool, optional</i>
	Returns:
			  sum_along_axis: <i>ndarray</i>
	</pre>
	</p>
	<p>
		 Example: </br></br>
<div style="background-color:dimgray;font-family: 'Courier New', Courier, monospace;"v>
<p> 
<pre>
	<span style="color: darkred;">>>></span> np.sum([0.5, 1.5])
	2.0
	<span style="color: darkred;">>>></span> np.sum([0.5, 0.7, 0.2, 1.5], dtype=np.int32)
	1
	<span style="color: darkred;">>>></span> np.sum([[0, 1], [0, 5]])
	6
	<span style="color: darkred;">>>></span> np.sum([[0, 1], [0, 5]], axis=0)
	array([1, 5])
</pre> 
</p>
</div>
You can also start the sum with a value other than zero:
<div style="background-color:dimgray;font-family: 'Courier New', Courier, monospace;"v>
<p> 
<pre>
	<span style="color: darkred;">>>></span> np.sum([10], initial=5)
	15
</pre> 
</p>
</div>
</p>

</body>`,

	"zeros": `<body>
	<h1 style="font: 100;font-family: 'Courier New', Courier, monospace;">numpy.zeros</h1>
	<p>
		 <span style="font-family: 'Courier New', Courier, monospace;">
			  numpy.zeros(<i>shape, dtype=float, order='C'</i>)</span>
		 <a href="https://docs.scipy.org/doc/numpy/reference/generated/numpy.zeros.html?highlight=zeros#numpy.zeros"> Link to Documentation</a>
	</p>
	<p>
		 Return a new array of given shape and type, filled with zeros.
	<pre>
	Parameters:
			  shape: <i>int or tuple of ints</i>
			  dtype: <i>data-type, optional</i>
			  order: <i>{'C', 'F'}, optional, default: C</i>
	Returns:
			  out: <i>ndarray</i>
	</pre>
	</p>
	<p>
		 Example: </br></br>
		 <div style="background-color:dimgray;font-family: 'Courier New', Courier, monospace;"v>
		 <p> 
			  <pre>
	<span style="color: darkred;">>>></span> np.zeros(5)
	array([ 0.,  0.,  0.,  0.,  0.])
			  </pre> 
		 </p>
		 </div>

		 <div style="background-color:dimgray;font-family: 'Courier New', Courier, monospace;"v>
		 <p> 
			  <pre>
	<span style="color: darkred;">>>></span> np.zeros((5,), dtype=int)
	array([0, 0, 0, 0, 0])
			  </pre> 
		 </p>
		 </div>

	</div>

	<div style="background-color:dimgray;font-family: 'Courier New', Courier, monospace;"v>
	<p> 
		 <pre>
	<span style="color: darkred;">>>></span> np.zeros((2, 1))
	array([[ 0.],
		   [ 0.]])
		 </pre> 
	</p>
	</div>

	<div style="background-color:dimgray;font-family: 'Courier New', Courier, monospace;"v>
		 <p> 
		 <pre>
	<span style="color: darkred;">>>></span> np.zeros((2,), dtype=[('x', 'i4'), ('y', 'i4')]) <i style="color: darkturquoise;"># custom dtype</i>
	array([(0, 0), (0, 0)],
		 dtype=[('x', '&lti4'), ('y', '&lti4')])
		 </pre> 
		 </p>
		 </div>
	</p>
</body>`
};