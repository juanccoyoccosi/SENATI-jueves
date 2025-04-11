let a = 0, 
b = 1;

console.log(a); 
while (b <= 100) {
    console.log(b); 
    let temp = b; 
    b = a + b; 
    a = temp; 
}

if (b > 100) {
    console.log(b); 
}