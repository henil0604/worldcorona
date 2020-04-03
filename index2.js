updatePage()

setInterval(() => {
    updatePage()
}, 1800000);


function updatePage() {

    console.log("Details Reloded")
    fetch("https://coronavirus.app/get-places", {"credentials":"include","headers":{"accept":"*/*","accept-language":"en-US,en-IN;q=0.9,en;q=0.8,hi;q=0.7,gu;q=0.6","content-type":"application/json","if-none-match":"W/\"13454-QzRRvNs3MWKV5G8jw7SZ/0S/89Y\"","sec-fetch-dest":"empty","sec-fetch-mode":"cors","sec-fetch-site":"same-origin","x-aww":"kNYwqcAvdWOltBIxJlDg","x-date-req":"2020-04-03T13:19:51.950Z"},"referrer":"https://coronavirus.app/map","referrerPolicy":"no-referrer-when-downgrade","body":null,"method":"GET","mode":"cors"});
        .then(response => response.json())
        .then(rsp => {

            var spn = document.getElementById('spinner')
            spn.innerHTML = "";

            var length = document.getElementById('length')
            length.innerHTML = `Corona Details of ${rsp.data.length} States`

            // console.log(rsp);
            // console.log(rsp.data)
            rsp.data.forEach(element => {

                name = element.name
                cases = element.infected
                dead = element.dead
                pop = element.pop
                recovered = element.recovered

                i = -1

                var card = `
                        <div class="card my-2 mx-2" style="width: 18rem;">
                            <div class="card-body" id="card">
                                <h5 class="card-title">${name}</h5>
                                <p class="card-subtitle mb-2 text-muted" id="infected">Infected: ${cases}</p>
                                <p class="card-subtitle mb-2 text-muted" id="dead">Dead: ${dead}</p>
                                <p class="card-subtitle mb-2 text-muted" id="pop">Poplution: ${pop}</p>
                                <p class="card-subtitle mb-2 text-muted" id="rec">Recovered: ${recovered}</p>
                            </div>
                        </div>
                    `


                main = document.getElementById('main')
                main.innerHTML += card;
            });

        })

}


let search = document.getElementById('searchTxt')
search.addEventListener("input", myFunction)

function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('searchTxt');
    filter = input.value.toUpperCase();
    ul = document.getElementById("main");
    li = ul.getElementsByClassName('card')

    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("h5")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "block";
        } else {
            li[i].style.display = "none";
        }
    }
}
