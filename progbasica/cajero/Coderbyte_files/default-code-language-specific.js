window.__DEFAULT_CODE_LANG_SPECIFIC={'Node.js Print Files':function(chalInfo){return `
const fs = require('fs');
const exec = require('child_process').exec; 

// create file called newfile.txt
// code goes here...

// then print contents of directory according to instructions above
// code goes here...

console.log(null);
    `},'Node.js REST GET Simple':function(chalInfo){return `
const https = require('https');

https.get('https://coderbyte.com/api/challenges/json/rest-get-simple', (resp) => {
  
  let data = '';

  // parse json data here...
  
  console.log(resp);

});
    `},'Node.js JSON Cleaning':function(chalInfo){return `
const https = require('https');

https.get('https://coderbyte.com/api/challenges/json/json-cleaning', (resp) => {
  
  let data = '';

  // parse json data here...
  
  console.log(resp);

});
    `},'Node.js Age Counting':function(chalInfo){return `
const https = require('https');

https.get('https://coderbyte.com/api/challenges/json/age-counting', (resp) => {
  
  let data = '';

  // parse json data here...
  
  console.log(resp);

});
    `},'Ruby REST GET Simple':function(chalInfo){return `
require 'net/http'
require 'uri'

uri = URI('https://coderbyte.com/api/challenges/json/rest-get-simple')
response = Net::HTTP.get(uri)
puts response
    `},'Ruby JSON Cleaning':function(chalInfo){return `
require 'net/http'
require 'uri'

uri = URI('https://coderbyte.com/api/challenges/json/json-cleaning')
response = Net::HTTP.get(uri)
puts response
    `},'Ruby Age Counting':function(chalInfo){return `
require 'net/http'
require 'uri'

uri = URI('https://coderbyte.com/api/challenges/json/age-counting')
response = Net::HTTP.get(uri)
puts response
    `},'PHP JSON Cleaning':function(chalInfo){return `
<?php 

  $ch = curl_init('https://coderbyte.com/api/challenges/json/json-cleaning');
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
  curl_setopt($ch, CURLOPT_HEADER, 0);
  $data = curl_exec($ch);
  curl_close($ch);

  print_r(json_decode($data, true));

?>`},'PHP Age Counting':function(chalInfo){return `
<?php 

  $ch = curl_init('https://coderbyte.com/api/challenges/json/age-counting');
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
  curl_setopt($ch, CURLOPT_HEADER, 0);
  $data = curl_exec($ch);
  curl_close($ch);

  print_r(json_decode($data, true));

?>`},'Java Print Files':function(chalInfo){return `
import java.util.*; 
import java.io.*;

class Main {  
  public static void main (String[] args) { 
    System.out.println("hello world");
  }   
}
    `},'Java REST GET Simple':function(chalInfo){return `
import java.util.*; 
import java.io.*;
import java.net.*;

class Main {  
  public static void main (String[] args) { 
    System.setProperty("http.agent", "Chrome");
    try { 
      URL url = new URL("https://coderbyte.com/api/challenges/json/rest-get-simple");
      try {
        URLConnection connection = url.openConnection();
        InputStream inputStream = connection.getInputStream();
        System.out.println(inputStream);
      } catch (IOException ioEx) {
        System.out.println(ioEx);
      }
    } catch (MalformedURLException malEx) {
      System.out.println(malEx);
    }
  }   
}
    `},'Java Age Counting':function(chalInfo){return `
import java.util.*; 
import java.io.*;
import java.net.*;

class Main {  
  public static void main (String[] args) { 
    System.setProperty("http.agent", "Chrome");
    try { 
      URL url = new URL("https://coderbyte.com/api/challenges/json/age-counting");
      try {
        URLConnection connection = url.openConnection();
        InputStream inputStream = connection.getInputStream();
        System.out.println(inputStream);
      } catch (IOException ioEx) {
        System.out.println(ioEx);
      }
    } catch (MalformedURLException malEx) {
      System.out.println(malEx);
    }
  }   
}
    `},'Csharp JSON Cleaning':function(chalInfo){return `
using System;  
using System.IO;  
using System.Net; 

class MainClass {
  
  static void Main() {  
    
    WebRequest request = WebRequest.Create("https://coderbyte.com/api/challenges/json/json-cleaning");
    WebResponse response = request.GetResponse();
    
    Console.WriteLine(response);
    response.Close();
    
  } 
   
}
    `},'Csharp Age Counting':function(chalInfo){return `
using System;  
using System.IO;  
using System.Net; 

class MainClass {
  
  static void Main() {  
    
    WebRequest request = WebRequest.Create("https://coderbyte.com/api/challenges/json/age-counting");
    WebResponse response = request.GetResponse();
    
    Console.WriteLine(response);
    response.Close();
    
  } 
   
}
    `},'Python Age Counting':function(chalInfo){return `
import requests
import numpy as np
import pandas as pd

r = requests.get('https://coderbyte.com/api/challenges/json/age-counting')
print len(r.json()['data'])
    `},'Python S3 Get File':function(chalInfo){return `
import requests
import boto3

s3 = boto3.client('s3')
print s3
    `},'Python S3 Get Contents':function(chalInfo){return `
import requests
import boto3

s3 = boto3.client('s3')
print s3
    `},}