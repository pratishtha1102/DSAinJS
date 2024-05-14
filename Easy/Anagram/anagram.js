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

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {
        let input_line = readLine().split(' ');
        let a = input_line[0];
        let b = input_line[1];
        let obj = new Solution();
        if(obj.isAnagram(a, b))
            console.log("YES");
        else
            console.log("NO");
    }
}

// } Driver Code Ends


//User function Template for javascript

/**
 * @param {string} a
 * @param {string} b
 * @returns {boolean}
*/
 
class Solution 
{
    isAnagram(a, b) {
        // Check if the lengths of the strings are equal
        if (a.length !== b.length) return false;

        // Remove spaces and convert to lowercase
        a = a.replace(/\s/g, '').toLowerCase();
        b = b.replace(/\s/g, '').toLowerCase();
        
        // Sort the characters in the strings and compare
        a = a.split('').sort().join('');
        b = b.split('').sort().join('');
        
        
        return a ==b
    }
}
