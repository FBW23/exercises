// const persons = {
//     people: [
//       "Yehuda Katz",
//       "Alan Johnson",
//       "Charles Jolley"
//     ]
//   };
  
  
  
  // COMPILING the template
  const template = Handlebars.compile("{{name}}" + `: Fan Page`);
  
  // execute the compiled template and print the output to the console
  const textH1 = (template({
    name: "Pink Floyd",
    
  }));
  
  document.querySelector('h1').append(textH1);
  

  
  document.addEventListener("DOMContentLoaded", function () {
  
    // Define our data object
    const context= {
      "name": "Pink Floyd",
    };
    
    const anyName = {
      music: [
        "Dark Side of The Moon",
        "Confortable Numb",
        "Hey You",
       
      ]
    };
  
  
    // Grab the template script
   
    const thePersonalScript = document.querySelector("#band-template").innerHTML;
    
  
    // Compile the template
   
    const thePersonal = Handlebars.compile(thePersonalScript);
    
  
    // Pass our data to the template
    
    const theCompiledHits = thePersonal(context);
    const theCompiledUl = thePersonal(anyName);
  
  
    // Add the compiled html to the page
    
    document.querySelector('.hits').innerHTML = theCompiledHits;
    document.querySelector('.music-list').innerHTML = theCompiledUl;
  
  });