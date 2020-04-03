updatePage()

setInterval(() => {
    updatePage()
}, 1800000);


function updatePage() {

    console.log("Details Reloded")
    fetch("http://127.0.0.1:5500/data.json")
        .then(response => response.json())
        .then(rsp => {
            var spn = document.getElementById('spinner')
            spn.innerHTML = "";
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