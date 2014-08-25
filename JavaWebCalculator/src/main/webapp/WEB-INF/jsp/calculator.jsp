<%-- 
    Document   : calculator
    Created on : Aug 25, 2014, 10:36:03 AM
    Author     : Kyle
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
	<head>
		<title>Calculator</title>
		<link rel="stylesheet" href="resources/css/style.css" />
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.0/jquery.min.js"></script>
		<script src="script.js"></script>
	</head>
	<body>
		<div id="calculator">
			<div id="total">
			</div>
			<div id="operators">
				<a>+</a>
				<a>-</a>
				<a>/</a>
				<a>*</a>
				<a>=</a>
			</div>
			<div id="numbers">
				<a>1</a>
				<a>2</a>
				<a>3</a>
				<a>4</a>
				<a>5</a>
				<a>6</a>
				<a>7</a>
				<a>8</a>
				<a>9</a>
				<a id="clear">C</a>
				<a>0</a>
				<a id="clearall">AC</a>
			</div>
		</div>
	</body>
</html>