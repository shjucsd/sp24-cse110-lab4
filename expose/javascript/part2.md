1. At line 12, the program will output 3 to the console because i is declared using var which allows it to be accessed outside the loop and can be updated as well. After running the loop, the last value it gets updated to 3 and since it does not satisfy the condition for the loop to continue, the loop ends with i = 3 which gets printed in the console. 
2. At line 13, the program will output 150 to the console because it is declared using var so it has universal access and reassignment is allowed. So the last value it gets assigned will be during the last iteration of the for loop, during which it gets evaluated to 150 (300 * (1 - 0.5)) and hence, line 13 prints it to the console. 
3. At line 14, the program will output 150 to the console because it is declared using var so it can be accessed anywhere and reassingment is allowed. So the value it gets assigned during the last iteration will be the final price of the last element of the list which is 150 (Math.round(150*100) / 100) and hence it gets printed to the console. 
4. The function will return an array with the final prices after applying the discount i.e., [ 50, 100, 150 ] . Since everything is declared using var, all the values will be updated and pushed into discounted array. This array will be returned by the function. 
5. At line 12, the code causes an error "ReferenceError: i is not defined" because the let keyword allows the variable to be accessed only within the block it is defined so i is not accessible outside the for block, hence causing the error.
6. At line 13, the code will cause error - "ReferenceError: discountedPrice is not defined" because the let keyword allows the variable to be accessed only within the block it is defined, so discountedPrice is not accessible outside the for block, hence causing the error.
7. At line 14, the program will output 150 to the console, because it is declared using let inside the function, and line 14 is inside the function so it is still accessible and since let allows reassignment, its value will be the one it got assigned during the last iteration of the loop which is 150.
8. The function will return an array with the final prices after applying the discount i.e., [ 50, 100, 150 ]. Since everything is declared using let keyword, reassignment is allowed so it updates everything correctly in the loop and returns the array with final prices after the discount is applied.
9. At line 11, the code will cause error because it is declared using let and the scope of i is limited to the for block so it cannot be accessed outside. 
10. At line 12, the program will output 3 to the console because it was decared using const and evaluates to 3 which the length of the input array. Since it was declared inside the function, it is still accessible and gets printed to the console. 
11. The function will return the array with the price which was discounted i.e., [ 50, 100, 150 ] because even though the array is declared using const, const allows array to be modified but not reassigned, so just pushing into the array does not cause error. Similarly, for discountedPrice, since we are redeclaring it in every iteration hence it does not count as reassignment and does not cause error. Hence, all the discount values get correctly pushed into the array which is returned. 
12. A. student.name B. student['Grad Year'] C. student.greeting() D. student['Favorite Teacher'].name E. student.courseLoad[0]
13. A. '32' since integers map to their exact spring representation
B. 1 since string is converted to number
C. 3 since null becomes 0 
D. '3null' since null is a string 'null' now
E. 4 since true maps to 1
F. 0 since both null and false map to 0
G. '3undefined' since undefined becomes a string
H.  NaN since undefined maps to NaN so it does not proceed with the subtraction
14. A. true since string '2' becomes a number 2
B. false since it compares two strings lexicographically letter-by-letter and here the ASCII value of '2' is greater than '1' so it evaluates to false
C. true since with regular equality check string '2' becomes a number 2
D. false since struct equality immediately returns false if the operands are of different types
E. false since true maps to 1 
F. true since Boolean(2) maps to true as it is a non-zero number
15. == is the regular equality operator which converts operands of different types to numbers for comparison and returns boolean based on the equality of the converted operands whereas === is the strict equality operator which checks for equality without type conversion and returns false if operands are of different types without any attempt to convert. 
16. (in part2-question16.js)
17. The result will be [2,4,6]. When we call the function modifyArray, it has two parameters - the array and callback which is doSomething function. While iterating over the array we call the callback (doSomething) function which in this case doubles the number it is provided with, so now we can use the doubled value to push into the new array. This happens with each element of the input array and hence the returned array contains the doubled value of each element in the input array. 
18. (in part2-question18.js)
19. 1
    4
    3
    2
    