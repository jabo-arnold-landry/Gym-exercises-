# arrayToObject



## Task

    Write a function named arrayToObject that receives an array of strings as parameter and returns an object where each key is an item of the array and its value is the index of that item.
    If there are duplicate strings in the array, the value inside the object should be the index of it's first occurrence.

## Test Case

### Case one
```javascript
//Input:
["JavaScript","is","awesome"]

//Expected Output:
{"awesome":2,"JavaScript":0,"is":1}
```
### Case two
```javascript
//Input:
["My","name","is","Pava",".","What","is","your","name","?"]

//Expected Output:
{"name":1,"Pava":3,"is":2,"your":7,"My":0,"What":5,".":4,"?":9}
```

### Edge Case

```javascript
//Input:
["a","a","a","a","a","a","a","a","a","a"]

//Expected Output:
{"a":1}
```


        


