window.__DEFAULT_CODE_ALGS={'C':function(chalInfo){if(!chalInfo)return'chalInfo required';var _ct=chalInfo.challenge_title.replace(/\s/g,'');var _pr=chalInfo.parameter_type.replace(/\s/g,'').split(',');var _functionLine='';var _callLine='';var arr1_type='';var arr2_type='';var ret_type='';var placeArray=!1;if(_pr[0]==='num'||_pr[0]==='num1'||_pr[0]==='num2'){arr1_type='int';ret_type='%d'}
if(_pr[0]==='str'||_pr[0]==='str1'||_pr[0]==='str2'||_pr[0]==='sen'){arr1_type='char';ret_type='%s'}
if(_pr[0]==='arr'||_pr[0]==='arr1'||_pr[0]==='arr2'){arr1_type='int';ret_type='%d';placeArray=!0}
if(_pr[0]=='strArr'){arr1_type='char *';ret_type='%s';placeArray=!0}
if(_pr.length>1){if(_pr[1]==='num'||_pr[1]==='num1'||_pr[1]==='num2'){arr2_type='int';ret_type='%d'}
if(_pr[1]==='str'||_pr[1]==='str1'||_pr[1]==='str2'||_pr[1]==='sen'){arr2_type='char';ret_type='%s'}
if(_pr[1]==='arr'||_pr[1]==='arr1'||_pr[1]==='arr2'){arr2_type='int';ret_type='%d';placeArray=!0}
if(_pr[1]=='strArr'){arr2_type='char *';ret_type='%s';placeArray=!0}}
if(_pr.length>1){_functionLine=`void ${_ct}(${arr1_type} ${_pr[0]}[], ${arr2_type} ${_pr[1]}[]) {`}else{_functionLine=`void ${_ct}(${arr1_type} ${_pr[0]}[]) {`}
if(placeArray){_callLine=`// keep this function call here
  /* Note: In C you first have to initialize an array and set 
     it equal to the stdin to test your code with arrays. */
     
  ${arr1_type} A[] = gets(stdin);
  ${_ct}(A);
  return 0;`}else{_callLine=`// keep this function call here
  ${_ct}(gets(stdin));
  return 0;`}
return `
#include <stdio.h> 
#include <string.h>

${_functionLine}
  
  // code goes here  
  printf("${ret_type}", ${placeArray ? (_pr[0] + '[0]') : _pr[0]});

}

int main(void) { 
   
  ${_callLine}
    
} 
    `},'Cpp':function(chalInfo){if(!chalInfo)return'chalInfo required';var _ct=chalInfo.challenge_title.replace(/\s/g,'');var _pr=chalInfo.parameter_type.replace(/\s/g,'').split(',');var _functionLine='';var _callLine='';var arr1_type='';var arr2_type='';var placeArray=!1;if(_pr[0]==='num'||_pr[0]==='num1'||_pr[0]==='num2'){arr1_type='int'}
if(_pr[0]==='str'||_pr[0]==='str1'||_pr[0]==='str2'||_pr[0]==='sen'){arr1_type='string'}
if(_pr[0]==='arr'||_pr[0]==='arr1'||_pr[0]==='arr2'){arr1_type='int';placeArray=!0}
if(_pr[0]=='strArr'){arr1_type='string';placeArray=!0}
if(_pr.length>1){if(_pr[1]==='num'||_pr[1]==='num1'||_pr[1]==='num2'){arr2_type='int'}
if(_pr[1]==='str'||_pr[1]==='str1'||_pr[1]==='str2'||_pr[1]==='sen'){arr2_type='string'}
if(_pr[1]==='arr'||_pr[1]==='arr1'||_pr[1]==='arr2'){arr2_type='int';placeArray=!0}
if(_pr[1]=='strArr'){arr2_type='string';placeArray=!0}}
if(_pr.length>1){_functionLine=`${arr1_type} ${_ct}(${arr1_type} ${_pr[0]}, ${arr2_type} ${_pr[1]}) {`}else{_functionLine=`${arr1_type} ${_ct}(${arr1_type} ${_pr[0]}${placeArray ? '[]' : ''}) {`}
if(placeArray){_callLine=`// keep this function call here
  /* Note: In C++ you first have to initialize an array and set 
     it equal to the stdin to test your code with arrays. */

  ${arr1_type} A[] = gets(stdin);
  cout << ${_ct}(A);
  return 0;`}else{_callLine=`// keep this function call here
  cout << ${_ct}(gets(stdin));
  return 0;`}
return `
#include <iostream>
#include <string>
using namespace std;

${_functionLine}
  
  // code goes here  
  return ${placeArray ? (_pr[0] + '[0]') : _pr[0]};

}

int main(void) { 
   
  ${_callLine}
    
} 
    `},'Csharp':function(chalInfo){if(!chalInfo)return'chalInfo required';var _ct=chalInfo.challenge_title.replace(/\s/g,'');var _pr=chalInfo.parameter_type.replace(/\s/g,'').split(',');var _functionLine='';var _callLine='';var arr1_type='';var arr2_type='';var ret_type='';var placeArray=!1;if(_pr[0]==='num'||_pr[0]==='num1'||_pr[0]==='num2'){arr1_type='int';ret_type='int'}
if(_pr[0]==='str'||_pr[0]==='str1'||_pr[0]==='str2'||_pr[0]==='sen'){arr1_type='string';ret_type='string'}
if(_pr[0]==='arr'||_pr[0]==='arr1'||_pr[0]==='arr2'){arr1_type='int[]';ret_type='int';placeArray=!0}
if(_pr[0]=='strArr'){arr1_type='string[]';ret_type='string';placeArray=!0}
if(_pr.length>1){if(_pr[1]==='num'||_pr[1]==='num1'||_pr[1]==='num2'){arr2_type='int';ret_type='int'}
if(_pr[1]==='str'||_pr[1]==='str1'||_pr[1]==='str2'||_pr[1]==='sen'){arr2_type='string';ret_type='string'}
if(_pr[1]==='arr'||_pr[1]==='arr1'||_pr[1]==='arr2'){arr2_type='int[]';ret_type='int';placeArray=!0}
if(_pr[1]=='strArr'){arr2_type='string[]';ret_type='string';placeArray=!0}}
if(_pr.length>1){_functionLine=`public static ${ret_type} ${_ct}(${arr1_type} ${_pr[0]}, ${arr2_type} ${_pr[1]}) {`}else{_functionLine=`public static ${ret_type} ${_ct}(${arr1_type} ${_pr[0]}) {`}
return `
using System;

class MainClass {

  ${_functionLine}

    // code goes here  
    return ${placeArray ? (_pr[0] + '[0]') : _pr[0]};

  }

  static void Main() {  
    // keep this function call here
    Console.WriteLine(${_ct}(Console.ReadLine()));
  } 

}
    `},'Clojure':function(chalInfo){if(!chalInfo)return'chalInfo required';var _ct=chalInfo.challenge_title.replace(/\s/g,'');var _pr=chalInfo.parameter_type.replace(/\s/g,'').split(',');var _functionLine='';if(_pr[0]==='str'){_pr[0]='strInput'}
if(_pr[1]==='str'){_pr[1]='strInput'}
if(_pr.length>1){_functionLine=`${_pr[0]}, ${_pr[1]}`}else{_functionLine=`${_pr[0]}`}
return `
(defn ${_ct} [${_functionLine}] (str ${_pr[0]}))
(println (${_ct} (read-line)))
    `},'Go':function(chalInfo){if(!chalInfo)return'chalInfo required';var _ct=chalInfo.challenge_title.replace(/\s/g,'');var _pr=chalInfo.parameter_type.replace(/\s/g,'').split(',');var _functionLine='';var _callLine='';var arr1_type='';var arr2_type='';var placeArray=!1;if(_pr[0]==='num'||_pr[0]==='num1'||_pr[0]==='num2'){arr1_type='int'}
if(_pr[0]==='str'||_pr[0]==='str1'||_pr[0]==='str2'||_pr[0]==='sen'){arr1_type='string'}
if(_pr[0]==='arr'||_pr[0]==='arr1'||_pr[0]==='arr2'){arr1_type='int';placeArray=!0}
if(_pr[0]=='strArr'){arr1_type='string';placeArray=!0}
if(_pr.length>1){if(_pr[1]==='num'||_pr[1]==='num1'||_pr[1]==='num2'){arr2_type='int'}
if(_pr[1]==='str'||_pr[1]==='str1'||_pr[1]==='str2'||_pr[1]==='sen'){arr2_type='string'}
if(_pr[1]==='arr'||_pr[1]==='arr1'||_pr[1]==='arr2'){arr2_type='int';placeArray=!0}
if(_pr[1]=='strArr'){arr2_type='string';placeArray=!0}}
if(_pr.length>1){_functionLine=`func ${_ct}(${_pr[0]} ${placeArray ? '[]' : ''}${arr1_type}, ${_pr[1]} ${placeArray ? '[]' : ''}${arr2_type}) ${arr1_type} {`}else{_functionLine=`func ${_ct}(${_pr[0]} ${placeArray ? '[]' : ''}${arr1_type}) ${arr1_type} {`}
return `
package main
import "fmt"

${_functionLine}
  
  // code goes here  
  return ${placeArray ? (_pr[0] + '[0]') : _pr[0]};

}

func main() {

  // do not modify below here, readline is our function
  // that properly reads in the input for you
  fmt.Println(${_ct}(readline()))

}
    `},'Java':function(chalInfo){if(!chalInfo)return'chalInfo required';var _ct=chalInfo.challenge_title.replace(/\s/g,'');var _pr=chalInfo.parameter_type.replace(/\s/g,'').split(',');var _functionLine='';var _callLine='';var arr1_type='';var arr2_type='';var ret_type='';var placeArray=!1;if(_pr[0]==='num'||_pr[0]==='num1'||_pr[0]==='num2'){arr1_type='int';ret_type='int'}
if(_pr[0]==='str'||_pr[0]==='str1'||_pr[0]==='str2'||_pr[0]==='sen'){arr1_type='String';ret_type='String'}
if(_pr[0]==='arr'||_pr[0]==='arr1'||_pr[0]==='arr2'){arr1_type='int[]';ret_type='int';placeArray=!0}
if(_pr[0]=='strArr'){arr1_type='String[]';ret_type='String';placeArray=!0}
if(_pr.length>1){if(_pr[1]==='num'||_pr[1]==='num1'||_pr[1]==='num2'){arr2_type='int';ret_type='int'}
if(_pr[1]==='str'||_pr[1]==='str1'||_pr[1]==='str2'||_pr[1]==='sen'){arr2_type='String';ret_type='String'}
if(_pr[1]==='arr'||_pr[1]==='arr1'||_pr[1]==='arr2'){arr2_type='int[]';ret_type='int';placeArray=!0}
if(_pr[1]=='strArr'){arr2_type='String[]';ret_type='String';placeArray=!0}}
if(_pr.length>1){_functionLine=`public static ${ret_type} ${_ct}(${arr1_type} ${_pr[0]}, ${arr2_type} ${_pr[1]}) {`}else{_functionLine=`public static ${ret_type} ${_ct}(${arr1_type} ${_pr[0]}) {`}
return `
import java.util.*; 
import java.io.*;

class Main {

  ${_functionLine}
    // code goes here  
    return ${placeArray ? (_pr[0] + '[0]') : _pr[0]};
  }

  public static void main (String[] args) {  
    // keep this function call here     
    Scanner s = new Scanner(System.in);
    System.out.print(${_ct}(s.nextLine())); 
  }

}
    `},'Kotlin':function(chalInfo){if(!chalInfo)return'chalInfo required';var _ct=chalInfo.challenge_title.replace(/\s/g,'');var _pr=chalInfo.parameter_type.replace(/\s/g,'').split(',');var _functionLine='';var _callLine='';var arr1_type='';var arr2_type='';var ret_type='';var placeArray=!1;if(_pr[0]==='num'||_pr[0]==='num1'||_pr[0]==='num2'){arr1_type='Int';ret_type='Int'}
if(_pr[0]==='str'||_pr[0]==='str1'||_pr[0]==='str2'||_pr[0]==='sen'){arr1_type='String';ret_type='String'}
if(_pr[0]==='arr'||_pr[0]==='arr1'||_pr[0]==='arr2'){arr1_type='Array<Int>';ret_type='Int';placeArray=!0}
if(_pr[0]=='strArr'){arr1_type='Array<String>';ret_type='String';placeArray=!0}
if(_pr.length>1){if(_pr[1]==='num'||_pr[1]==='num1'||_pr[1]==='num2'){arr2_type='Int';ret_type='Int'}
if(_pr[1]==='str'||_pr[1]==='str1'||_pr[1]==='str2'||_pr[1]==='sen'){arr2_type='String';ret_type='String'}
if(_pr[1]==='arr'||_pr[1]==='arr1'||_pr[1]==='arr2'){arr2_type='Array<Int>';ret_type='Int';placeArray=!0}
if(_pr[1]=='strArr'){arr2_type='Array<String>';ret_type='String';placeArray=!0}}
if(_pr.length>1){_functionLine=`fun ${_ct}(${_pr[0]}: ${arr1_type}, ${_pr[1]}: ${arr2_type}): ${ret_type} {`}else{_functionLine=`fun ${_ct}(${_pr[0]}: ${arr1_type}): ${ret_type} {`}
return `
${_functionLine}

  // code goes here  
  return ${placeArray ? (_pr[0] + '[0]') : _pr[0]};
  
}

fun main(args: Array<String>) {
  println(${_ct}(readLine()))
}
    `},'JavaScript':function(chalInfo){if(!chalInfo)return'chalInfo required';var _ct=chalInfo.challenge_title.replace(/\s/g,'');var _pr=chalInfo.parameter_type.replace(/\s/g,'').split(',');return `
function ${_ct}(${_pr}) { 

  // code goes here  
  return ${_pr[0]}; 

}
   
// keep this function call here 
console.log(${_ct}(readline()));
    `},'PHP':function(chalInfo){if(!chalInfo)return'chalInfo required';var _ct=chalInfo.challenge_title.replace(/\s/g,'');var _pr=chalInfo.parameter_type.replace(/\s/g,'').split(',');if(_pr.length>1){_pr[1]='$'+_pr[1]}
return `
<?php 

function ${_ct}($${_pr}) {

  // code goes here
  return $${_pr[0]};

}
   
// keep this function call here  
echo ${_ct}(fgets(fopen('php://stdin', 'r')));  

?>
    `},'Python':function(chalInfo){if(!chalInfo)return'chalInfo required';var _ct=chalInfo.challenge_title.replace(/\s/g,'');var _pr=chalInfo.parameter_type.replace(/\s/g,'').split(',');return `
def ${_ct}(${_pr}):

  # code goes here
  return ${_pr[0]}

# keep this function call here 
print ${_ct}(raw_input())
    `},'Python3':function(chalInfo){if(!chalInfo)return'chalInfo required';var _ct=chalInfo.challenge_title.replace(/\s/g,'');var _pr=chalInfo.parameter_type.replace(/\s/g,'').split(',');return `
def ${_ct}(${_pr}):

  # code goes here
  return ${_pr[0]}

# keep this function call here 
print(${_ct}(input()))
    `},'Ruby':function(chalInfo){if(!chalInfo)return'chalInfo required';var _ct=chalInfo.challenge_title.replace(/\s/g,'');var _pr=chalInfo.parameter_type.replace(/\s/g,'').split(',');return `
def ${_ct}(${_pr})

  # code goes here
  return ${_pr[0]}

end

# keep this function call here 
puts ${_ct}(STDIN.gets)
    `},'Swift':function(chalInfo){if(!chalInfo)return'chalInfo required';var _ct=chalInfo.challenge_title.replace(/\s/g,'');var _pr=chalInfo.parameter_type.replace(/\s/g,'').split(',');var _functionLine='';var _callLine='';var arr1_type='';var arr2_type='';var placeArray=!1;if(_pr[0]==='num'||_pr[0]==='num1'||_pr[0]==='num2'){arr1_type='Int'}
if(_pr[0]==='str'||_pr[0]==='str1'||_pr[0]==='str2'||_pr[0]==='sen'){arr1_type='String'}
if(_pr[0]==='arr'||_pr[0]==='arr1'||_pr[0]==='arr2'){arr1_type='Int';placeArray=!0}
if(_pr[0]=='strArr'){arr1_type='String';placeArray=!0}
if(_pr.length>1){if(_pr[1]==='num'||_pr[1]==='num1'||_pr[1]==='num2'){arr2_type='Int'}
if(_pr[1]==='str'||_pr[1]==='str1'||_pr[1]==='str2'||_pr[1]==='sen'){arr2_type='String'}
if(_pr[1]==='arr'||_pr[1]==='arr1'||_pr[1]==='arr2'){arr2_type='Int';placeArray=!0}
if(_pr[1]=='strArr'){arr2_type='String';placeArray=!0}}
if(_pr.length>1){_functionLine=`func ${_ct}(_ ${_pr[0]}: ${placeArray ? '[' + arr1_type + ']' : arr1_type}, _ ${_pr[1]}: ${placeArray ? '[' + arr2_type + ']' : arr2_type}) -> ${arr1_type} {`}else{_functionLine=`func ${_ct}(_ ${_pr[0]}: ${placeArray ? '[' + arr1_type + ']' : arr1_type}) -> ${arr1_type} {`}
return `
${_functionLine}

  // code goes here   
  // Note: feel free to modify the return type of this function 
  return ${placeArray ? (_pr[0] + '[0]') : _pr[0]}

}

// keep this function call here   
print(${_ct}(readLine(stripNewline: true)));
    `},'TypeScript':function(chalInfo){if(!chalInfo)return'chalInfo required';var _ct=chalInfo.challenge_title.replace(/\s/g,'');var _pr=chalInfo.parameter_type.replace(/\s/g,'').split(',');return `
function ${_ct}(${_pr}) { 

  // code goes here  
  return ${_pr[0]}; 

}
   
// keep this function call here 
// @ts-ignore
console.log(${_ct}(readline()));
    `},}