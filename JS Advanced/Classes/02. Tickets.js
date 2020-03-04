function solve (arr, str) {
    let ticketArr = [...arr];
    let result = [];

    class Ticket {
        constructor (destination, price, status) {
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
    }

    for (const ticket of ticketArr) {
        [dest, price, stat] = ticket.split('|');

        let newTicket = new Ticket(dest,price,stat);
        result.push(newTicket);
    }


    if(str === 'destination') {
        return result.sort((a,b) => a.destination.localeCompare(b.destination));
    }else if (str === 'status') {
        return result.sort((a,b) => a.status.localeCompare(b.status));
    }else if (str==='price') {
        return result.sort((a,b) => a.price -b.price);
    }

}

console.log(solve(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'status'));
