/*This is a template from an online site.
Feel free to explore the files it contains, 
but this is absolutely not required to be able to complete this exercise.
What you need is to create your own JavaScript file and make sure it is included in the `index.html` file.*/

/* Get the children of the element with id `wrapper` and print them to the console as a list.*/

const wrapper = document.getElementById('wrapper');
for (let i = 0; i < wrapper.children.length; i++) {
  console.log(wrapper.children[i].tagName);
}