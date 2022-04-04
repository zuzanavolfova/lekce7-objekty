
const seznamZvirat = [
    {
        jmeno: 'Husa',
        foto: 'obrazky/husa.jpg'
    },
    {
        jmeno: 'Kocka',
        foto: 'obrazky/kocka.jpg'
    },
    {
        jmeno: 'Kun',
        foto: 'obrazky/kun.jpg'
    },
    {
        jmeno: 'Ovce',
        foto: 'obrazky/Ovce.jpg'
    },
    {
        jmeno: 'Pes',
        foto: 'obrazky/pes.jpg'
    }
];


seznamZvirat.forEach(vypisZvirat);
function vypisZvirat (seznamZvirat) {
// Vytvor obrazek zviratka krava s fotkou a popiskem.

// 1. Zacneme vytvorenim obalujiciho div element s tridou 'zvire'.

    let zvire = document.createElement ('div');
    zvire.className = 'zvire';


// 2. Nyni vytvor dva elementy pro obrazek a jmeno zvirete, ktere budou uvnitr naseho obalujiciho div elementu zvire.
    //2.1. Vytvor img element s tridou 'foto'. Jako src obrazku pridej hodnotu objektu krava.

    let fotoZvirete = document.createElement ('img');
    fotoZvirete.className = 'foto';
    fotoZvirete.src = seznamZvirat.foto;
    fotoZvirete.alt = seznamZvirat.jmeno;


    //2.2. Dale vytvor div element s tridou 'jmeno'. Jako text elementu zobraz hodnotu vlastnosti jmeno objektu krava.
    let jmenoZvirete = document.createElement ('span');
    jmenoZvirete.innerHTML = seznamZvirat.jmeno;
    jmenoZvirete.className = 'jmeno';


    //2.3. Zabal fotoZvire a jmenoZvirete do obalovaciho divu zvire, (psst zvire.appendChild)
zvire.appendChild(fotoZvirete);
zvire.appendChild(jmenoZvirete);


// 3. Nakonec pojdme nas kod zapojit do html stranky. Na html strance vyber existujici element s tridou farma.
// a vloz do nej obalujici element zvire (pssst appendChild)

  let farma = document.querySelector('.farma');
  farma.appendChild(zvire);
}


// for (let i =0; i < seznamZvirat.length; i++) {
// let zvire = document.createElement ('div');
// zvire.className = 'zvire';

// let fotoZvirete = document.createElement ('img');
// fotoZvirete.className = 'foto';
// fotoZvirete.src = seznamZvirat[i].foto;
// fotoZvirete.alt =seznamZvirat[i].jmeno;

// let jmenoZvirete = document.createElement ('span');
// jmenoZvirete.innerHTML = seznamZvirat[i].jmeno;
// jmenoZvirete.className = 'jmeno';


// zvire.appendChild(fotoZvirete);
// zvire.appendChild(jmenoZvirete);

// let farma = document.querySelector('.farma');
// farma.appendChild(zvire);
// }