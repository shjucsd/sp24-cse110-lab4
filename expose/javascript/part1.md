1. 20
2. 20
3. 20
4. line 13 returns an error - "ReferenceError: result is not defined" because the let keyword allows the variable to be accessed only within the block it is defined so result is not accessible outside the if block, hence causing the error.
5. The code returns an error because const does not allow a value to be reassigned once it is declared. Hence it gives the "TypeError: Assignment to constant variable" error.
6. The code returns an error because it encounters error on line 9 due to reassignment of constant variable. It does not go to line 13 and even if it did, it would again throw error because the scope of const is same as let so the value of result won't be accessible outside if block.
