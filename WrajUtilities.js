function posttoclip(elem) {
    try {
        let content = document.getElementById(elem).innerText;
        navigator.clipboard.writeText(content);
    }
    catch(err) {
        alert('Unable to copy.');
    }
}
function texttoclip(data){
    try {
        navigator.clipboard.writeText(data);
    }
    catch(err) {
        alert('Unable to copy.');
    }
}