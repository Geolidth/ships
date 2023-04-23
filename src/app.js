const tbody = document.querySelector("#tbody");
const host = 'http://localhost:3000/';
var ships = [];

function getShips() {
    let endpoint = 'ships';
    let url = host + endpoint;

    fetch(url)
        .then(response => response.json())
        .then(result => {
            console.log(result);
            ships = result;
            generateTbody();
        });
}
getShips();
console.log(ships);

function generateTbody() {
    ships.forEach((ship) => {
        let tr = document.createElement('tr');
        let tdName = document.createElement('td');
        let tdSize = document.createElement('td');
        let tdPrice = document.createElement('td');
        let tdUsers = document.createElement('td');
        let tdTrailer = document.createElement('td');

        tdName.textContent = ship.name;
        tdSize.textContent = ship.length;
        tdPrice.textContent = ship.price;
        tdUsers.textContent=ship.person;
        tdTrailer.textContent=ship.trailer;

        tbody.append(tr);
        tr.append(tdName);
        tr.append(tdSize);
        tr.append(tdPrice);
        tr.append(tdUsers);
        tr.append(tdTrailer);
    });
}
generateTbody();