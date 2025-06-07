function render(namey, painting) {
    const name = document.getElementById(namey + '1');
    const year = document.getElementById(namey + '2');
    const desc = document.getElementById(namey + '3');

    const p = document.createElement('p');
    p.innerHTML = painting.name;

    const p2 = document.createElement('p');
    p2.innerHTML = painting.year;

    const p3 = document.createElement('p');
    p3.innerHTML = painting.description;

    name.appendChild(p);
    year.appendChild(p2);
    desc.appendChild(p3);
}

fetch('/db/file.json')
    .then(response => {
        if (!response.ok) {
            return "Error";
        }
        return response.json();
    })
    .then(data => {
        data.paintings.forEach(painting => {
            if (painting.id == 1) {

                render("a", painting);

            } else if (painting.id == 2) {
                render("o", painting);

            } else if (painting.id == 3) {

                render("n", painting);

            } else if (painting.id == 4) {

                render("l", painting);

            } else if (painting.id == 5) {

                render("r", painting);
            }

        });
    });

    var modal = document.getElementById("buyTicket");

// Get the button that opens the modal
var btn = document.getElementById("buyTicketButton");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}