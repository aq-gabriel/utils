/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

 const n = parseInt(readline()); // the number of temperatures to analyse
 var inputs = readline().split(' ');
 
 var result = 10000;
  
 for (let i = 0; i < inputs.length; i++) {
     if (inputs[i] == '') {
         result = 0
     }
 
     const iterator = parseInt(inputs[i]);// a temperature expressed as an integer ranging from -273 to 5526
     const vlr_abs = Math.abs(iterator)
     const vlr_abs_old = Math.abs(result)
    
     const findNegativeAndAbsoluteValue = inputs
         .filter(item => Math.abs(item) === vlr_abs ? item : '')
         .map(item => Math.abs(item))     
    
     const dulpicatedRemove = [...new Set(findNegativeAndAbsoluteValue)][0] 
 
     if (vlr_abs_old > vlr_abs) {
        result = findNegativeAndAbsoluteValue.length === 2 ? dulpicatedRemove : iterator
     }
 }
 // Write an answer using console.log()
 // To debug: console.error('Debug messages...');
 
 console.log(result);
 