$(document).ready(function (){

    var user = ''

$("#form").submit(function (event){
    event.preventDefault()

    var username = $("username").val()
   
    searchUser(username)
})

$("#username").change(function (){
    var username = $("#username").val()
    searchUser(username) //to refresh to new results
})

function searchUser(username) {
    $("#result").empty() //this is to refresh by deleting the old data n get in the new data

    $.get("https://api.github.com/search/users?q=" + username + "+in:user&per_page=100",function(data){
        console.log(data)

        data.items.forEach(item => {
            
            user = `<a target="_blank" href="${item.html_url}"><img class="img-thumbnail ml-4" width="100" height="100" src="${item.avatar_url}"/></a>`

            $("#result").append(user)
        });
    })
}

})