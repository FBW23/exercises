


  
  
  
  
  const template = Handlebars.compile("{{Bandname}} ");
  
  
  const data = (template({
    Bandname: "Ghost",
    
  }));
  
  
  
  document.querySelector('body').append(data);
  
  
  
  document.addEventListener("DOMContentLoaded", function () {
  
   
    const context = {
      "bandName": "Ghost",
      "country": "Sweden",
      "albums": "8",
     
    };
    
    const anyName = {
      song: [
        "Elizabeth",
        "Cirice",
        "Year Zero",
        "Square Hammer",
        "Ghouleh",
        "Ritual"
      ]
    };
  
  
    
    const theTemplateScript = document.querySelector("#address-template").innerHTML;
    const thePersonalScript = document.querySelector("#personal-template").innerHTML;
    const theUlScript = document.querySelector("#ul-template").innerHTML;
  
    // Compile the template
    const theTemplate = Handlebars.compile(theTemplateScript);
    const thePersonal = Handlebars.compile(thePersonalScript);
    const theUl = Handlebars.compile(theUlScript);
  
    // Pass our data to the template
    const theCompiledHtml = theTemplate(context);
    const theCompiledPersonal = thePersonal(context);
    const theCompiledUl = theUl(anyName);
  
  
    // Add the compiled html to the page
    document.querySelector('.content-placeholder').innerHTML = theCompiledHtml;
    document.querySelector('.personal-placeholder').innerHTML = theCompiledPersonal;
    document.querySelector('.ul-placeholder').innerHTML = theCompiledUl;
  
  });


