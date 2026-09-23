# React
   
   # React is a Library to create and manage view part of the application

   # in React if we want to create a h1 tag, we need to write like this
      # React.createElement("h1", {}, "hello i'm from react") 
      # here React.createElement return an object inside object the three parameters will appear in props object

   # if we want create a siblings we need to write like this
      # React.createElement("div", {}, [
        React.createElement("h1", {}, "i'm h1 tag"),
        React.createElement("h2, {}, "i'm h2 tag")
      ])

   # render method actually convert that object into html format and send it to the DOM 


   # Folder Structure explanation

   # node_modules => collection of libraries

   # package.json => it's the npm configuration file & it will not show the exact version that is used by project

   # package.lock.json  => it will track exact version that's downloaded in the application

   # we have twi types of js versions one is "commonjs another one is "module" , by default type is "commonjs" only

   # common.js => need to import like this ,  const React = require('react')

   # module/ejs => need to import like this , import React from 'react'

   # jsx won't execute javaScript code blindly , before execute it will sanitize the code and it will prevents XSS (cross site scripting) issue

   # npx => is for executing

   # npm for installing libraries , npm is a centralized library it has large amount of libraries

   # 