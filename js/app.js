const mainContainer = document.querySelector(".main-container");
const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row.seat:not(.occupied)");
const count = document.getElementById("count");
const total = document.getElementById("total");
const destination = document.getElementById("destination");

//Update Selected count total
function updateSelectedCount(){
    const selectedSeats = document.querySelector('.row .seat.selected');
    const selectedSeatsCount = selectedSeats.clientHeight;
    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice;
}

const ticketPrice = parseInt(destination.value);
container.addEventListener('click', (e)=>{
    if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')){
        e.target.classList.toggle("selected");
        updateSelectedCount();
    }
});