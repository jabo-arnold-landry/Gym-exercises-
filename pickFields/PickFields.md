# pickFields

## Task

   Write a function named pickFields that receives 2 parameters:

 - **data** an object - data
 - **fields** an Array of strings - fields

The function should return a new object 
that contains all properties of data whose name is present in the fields array.

## Test Case

### Case one
```javascript
//Input:
data = {"color":"blue","name":"Earth","solarSistem":"Milky Way"}
fields = ["name","color"]
//Expected Output:
{"color":"blue","name":"Earth"}
```
### Case two
```javascript
//Input:
data = {"year":1995,"name":"JavaScript","inventor":"Brendan Eich"}
fields = ["job","age","name"]

//Expected Output:
{"name":"JavaScript"}
```


        


