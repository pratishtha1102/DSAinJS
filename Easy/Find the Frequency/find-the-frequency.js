//{ Driver Code Starts
//Initial Template for javascript

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();
});

function readLine() {
    return inputString[currentLine++];
}

function printList(res,n){
    let s="";
    for(let i=0;i<n;i++){
        s+=res[i];
        s+=" ";
    }
    console.log(s);
}


function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {
        let n = parseInt(readLine());
        let arr = new Array(n);
        let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        for(let i=0;i<n;i++){
            arr[i] = input_ar1[i];
        }
        let x = parseInt(readLine());
        let obj = new Solution();
        let res = obj.findFrequency(arr, n, x);
        console.log(res);
    }
}// }

// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number[]} v
 * @param {number} n
 * @param {number} x
 * @returns { number}
*/

class Solution{
    findFrequency(v, n, x){
        let counter = 0
        for (let i =0; i<n; i++){
            if (v[i] == x){
                counter = counter +1
            }
        }
        
        return counter
        
    }
}

