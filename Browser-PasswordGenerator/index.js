var site, salt;
var text, password;
// The function to run all the useful code
function generate(){
    //Step 1
site = document.getElementById('site_url').value;
    //Step 2
salt = document.getElementById('keyword').value;
    //Step 3
text = site + salt + 'Practicum Rules';
    //Step 4
password = md5(text);
    //Step 5
document.getElementById('pass_text').innerHTML=password;
}