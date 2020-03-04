function solve() {
    const eastPattern = /east.*?(\d{2})[^,]*?,[^,]*?(\d{6})/im;
    const northPattern = /north.*?(\d{2})[^,]*?,[^,]*?(\d{6})/mig;

    let key = document.querySelector('#string').value;
    let text = document.querySelector('#text').value;
    let result = document.querySelector('#result');

    let eastCoordinates = text.match(eastPattern);

    let northCoordinates = text.match(northPattern);
    northCoordinates = northCoordinates.pop();
    northCoordinates = northPattern.exec(northCoordinates);
    let massage = text.match(`${key}(.+)${key}`)[1];

    let northCoordinateP = document.createElement('p');
    northCoordinateP.innerHTML = `${northCoordinates[1]}.${northCoordinates[2]} N`;

    let eastCoordinateP = document.createElement('p');
    eastCoordinateP.innerHTML = `${eastCoordinates[1]}.${eastCoordinates[2]} E`;

    let massageP = document.createElement('p');
    massageP.innerHTML = `Message: ${massage}`;

    result.appendChild(northCoordinateP);
    result.appendChild(eastCoordinateP);
    result.appendChild(massageP);
}