function getTrump(){

    let ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200){
           let trumpQuote = JSON.parse(this.responseText);
           document.getElementById("trumpquotes").innerHTML = trumpQuote.joke;
    
        } else if(this.readyState != 4){
            document.getElementById("trumpquotes").innerHTML = "LOADING";
        } else {
            document.getElementById("trumpquotes").innerHTML = "something went wrong"
        }
    }
    ajax.open("GET", "https://geek-jokes.sameerkumar.website/api?format=json", true);
    ajax.send();
    }
    
    document.getElementById("trumprefresh").addEventListener("click",getTrump);