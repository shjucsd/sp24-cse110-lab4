1. The bug was that the program was taking values in the form of strings, so the addition of num1 and num2 leads to concatenation of the string values instead of the normal arithmetic addition.
2. I would fix the bug by using the parseInt() function on num1 and num2 in calculateSum so that it converts the input numbers into integers and then calculateSum performs the arithmetic addition of the input values to return result. 