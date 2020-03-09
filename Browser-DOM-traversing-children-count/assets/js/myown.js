const childwrap = document.querySelector('wrapper');
console.log(childwrap);

const wrapper = document.getElementById('wrapper');
for (let i = 0; i < wrapper.children.length; i++) {
  console.log(wrapper.children[i].tagName);
}