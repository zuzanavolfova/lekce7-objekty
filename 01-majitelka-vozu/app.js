// Vytvoř objekt auto, který bude mít vlastnosti: znacka, barva, rokVyroby,..

let auto = {
    znacka: 'ford',
    barva: 'modra',
    rokVzroby: '2000'
}

// Přidej novou vlastnost (majitel a prirad ji svoje jmeno jako hodnotu)

auto.majitel = {};
auto.majitel.jmeno = 'zuzana';
auto.majitel.prijmeni = 'jajova'

// Přepiš značku na Škoda
auto.znacka = 'skoda'

// Vytvor tri promenne majitelka, znacka a spz a vloz do techto elementu text z objektu auto.
let majitelka = auto.majitel.jmeno + ' ' + auto.majitel.prijmeni;
let znacka = auto.znacka
auto.spz = '4z1 1234'
let spz = auto.spz