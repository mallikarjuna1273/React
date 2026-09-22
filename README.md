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