'use strict'

document.getElementById('btn').addEventListener('click', function(){
    const text = document.getElementById('text').value.trim();
    const email = document.getElementById('email').value.trim();
    const ideas = document.getElementById('ideas').value.trim();

    if (text === "" || email === "" || ideas === "") {
        document.getElementById('message').style.display = "none";
    }
    else {
        document.getElementById("message").style.display = 'block';
        setTimeout(function() {
            location.reload();
        }, 5000);
    }
});


