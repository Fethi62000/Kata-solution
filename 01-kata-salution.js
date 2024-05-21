"use strict";

/*
# Looping a triangle

Write a loop that makes seven calls to console.log to output the following triangle:

```js
#
##
###
####
#####
######
#######
```

It may be useful to know that you can find the length of a string by writing.length after it.

```js
let abc = "abc";
console.log(abc.length);
// → 3
```
*/


let triangle = 0;

while (triangle < 8) {
    console.log("#");
    console.log("##");
    console.log("###");
    console.log("####");
    console.log("#####");
    console.log("######");
    console.log("#######");
}

let i = 0;

for (; i < 8; ++i) {
    alert(i);
}

