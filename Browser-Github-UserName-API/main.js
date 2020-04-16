// GitHub API => https://api.github.com/users/

const userInput = document.querySelector('#user-input');
const form = document.querySelector('form');
const container = document.querySelector('.container');
const profileContainer = document.querySelector('.profile-container');
const userName = document.querySelector('.name');
const userBio = document.querySelector('.bio');
const userLocation = document.querySelector('.location');
const userFollowers = document.querySelector('.followers');
const userRepositories = document.querySelector('.repositories');
const profileImage = document.querySelector('#profile-img');


const gitHubData = async () => {
    try {
        let gitHubReposResponse = await fetch(`https://api.github.com/users/${userInput.value}/repos`);
        let gitHubProfileResponse = await fetch(`https://api.github.com/users/${userInput.value}`);
        let convertedReposData = await gitHubReposResponse.json();
        let convertedProfileData = await gitHubProfileResponse.json();

        convertedReposData.map(repo => {
            // console.log(repo);
            profileContainer.style.display = 'flex';
            container.style.display = 'flex';
            userName.innerText = convertedProfileData.login;
            userBio.innerText = convertedProfileData.bio;
            userLocation.innerText = convertedProfileData.location;
            userFollowers.innerText = convertedProfileData.followers;
            userRepositories.innerText = userInput.value;
            const item = document.createElement('div');
            item.classList.add('repo');
            const link = document.createElement('a');
            link.classList.add('link');
            link.setAttribute('href', `https://github.com/${userInput.value}/${repo.name}`);
            link.appendChild(item);
            const title = document.createElement('h3');
            title.classList.add('title');
            title.appendChild(document.createTextNode(repo.name));
            const description = document.createElement('p');
            description.classList.add('description');
            description.appendChild(document.createTextNode(repo.description));
            item.append(title, description);
            container.appendChild(link);
            profileImage.src = repo.owner.avatar_url;
            window.setTimeout(() => {
                userInput.value = '';
            }, 0);
        })
    } catch(err){
        console.log(err);
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (userInput.value === '') {
        alert('Please, enter username')
    } else {
        container.innerHTML = '';
        gitHubData();
    }
})