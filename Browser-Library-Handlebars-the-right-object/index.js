let structure = 
`<div class="card-template">
<h1>{{ firstName }} {{ lastName }}</h1>
<p><label class="color">Position: </label>{{ jobTitle }}</p>
<p><label class="color">Joined: </label>{{ startDate }}</p>
<p><label class="color">Birthday: </label>{{ birthday }}</p>
<p><label class="color">Reports to: </label>{{ manager.firstName }} {{ manager.lastName }}</p>
</div>`;

let structureTemplate = Handlebars.compile(structure);
let structureValues = structureTemplate(personalData);
const structureOutput = document.querySelector('#output');
structureOutput.innerHTML = structureValues;
