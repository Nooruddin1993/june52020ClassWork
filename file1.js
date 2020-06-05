// for loop works by iterating a set of instructiins a certain specified number of times
function a(){
    sum = 0;
    for(i=0; i<10 ;i++) {
        console.log("Hello Happy Summer!!!" +i);
        sum += i;
        if (i==5) {
            break;
        }
    }
return sum;
}
console.log("sum is", a());
