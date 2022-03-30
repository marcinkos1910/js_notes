// Szymon
// 1. Odfiltruj stacje, które wyświetlają brak danych na jakimkolwiek czujniku.
// 2. Ze wszystkich stacji ustal dominujący kierunek wiatru.
// 3. Wyświetl same temperatury stacji, które zarejestrowały ciśnienie powyżej 1030.
const data = [
    {
      id_stacji: "12295",
      stacja: "Bia\u0142ystok",
      data_pomiaru: "2022-03-11",
      godzina_pomiaru: "19",
      temperatura: "-4.7",
      predkosc_wiatru: "1",
      kierunek_wiatru: "270",
      wilgotnosc_wzgledna: "66.8",
      suma_opadu: "0",
      cisnienie: "1036.4",
    },
    {
      id_stacji: "12600",
      stacja: "Bielsko Bia\u0142a",
      data_pomiaru: "2022-03-11",
      godzina_pomiaru: "19",
      temperatura: "-2.2",
      predkosc_wiatru: "3",
      kierunek_wiatru: "70",
      wilgotnosc_wzgledna: "42.8",
      suma_opadu: "0",
      cisnienie: "1034.3",
    },
    {
      id_stacji: "12235",
      stacja: "Chojnice",
      data_pomiaru: "2022-03-11",
      godzina_pomiaru: "19",
      temperatura: "-0.4",
      predkosc_wiatru: "3",
      kierunek_wiatru: "150",
      wilgotnosc_wzgledna: "42.7",
      suma_opadu: "0",
      cisnienie: "1034.4",
    },
    {
      id_stacji: "12550",
      stacja: "Cz\u0119stochowa",
      data_pomiaru: "2022-03-11",
      godzina_pomiaru: "19",
      temperatura: "-1.4",
      predkosc_wiatru: "1",
      kierunek_wiatru: "90",
      wilgotnosc_wzgledna: "32.9",
      suma_opadu: "0",
      cisnienie: "1034.9",
    },
    {
      id_stacji: "12160",
      stacja: "Elbl\u0105g",
      data_pomiaru: "2022-03-11",
      godzina_pomiaru: "19",
      temperatura: "0",
      predkosc_wiatru: "3",
      kierunek_wiatru: "180",
      wilgotnosc_wzgledna: "37.6",
      suma_opadu: "0",
      cisnienie: "1034.9",
    },
    {
      id_stacji: "12155",
      stacja: "Gda\u0144sk",
      data_pomiaru: "2022-03-11",
      godzina_pomiaru: "19",
      temperatura: "0",
      predkosc_wiatru: "2",
      kierunek_wiatru: "180",
      wilgotnosc_wzgledna: "53.8",
      suma_opadu: "0",
      cisnienie: "1034.3",
    },
    {
      id_stacji: "12300",
      stacja: "Gorz\u00f3w",
      data_pomiaru: "2022-03-11",
      godzina_pomiaru: "19",
      temperatura: "2",
      predkosc_wiatru: "5",
      kierunek_wiatru: "130",
      wilgotnosc_wzgledna: "36.7",
      suma_opadu: "0",
      cisnienie: "1031",
    },
    {
      id_stacji: "12135",
      stacja: "Hel",
      data_pomiaru: "2022-03-11",
      godzina_pomiaru: "19",
      temperatura: "1.2",
      predkosc_wiatru: "3",
      kierunek_wiatru: "190",
      wilgotnosc_wzgledna: "55.8",
      suma_opadu: "0",
      cisnienie: "1034.3",
    },
    {
      id_stacji: "12500",
      stacja: "Jelenia G\u00f3ra",
      data_pomiaru: "2022-03-11",
      godzina_pomiaru: "19",
      temperatura: "-0.2",
      predkosc_wiatru: "6",
      kierunek_wiatru: "80",
      wilgotnosc_wzgledna: "38.8",
      suma_opadu: "0",
      cisnienie: "1030.6",
    },
    {
      id_stacji: "12435",
      stacja: "Kalisz",
      data_pomiaru: "2022-03-11",
      godzina_pomiaru: "19",
      temperatura: "-0.1",
      predkosc_wiatru: "3",
      kierunek_wiatru: "90",
      wilgotnosc_wzgledna: "45.6",
      suma_opadu: "0",
      cisnienie: "1034",
    },
    {
      id_stacji: "12650",
      stacja: "Kasprowy Wierch",
      data_pomiaru: "2022-03-11",
      godzina_pomiaru: "19",
      temperatura: "-9.7",
      predkosc_wiatru: "3",
      kierunek_wiatru: "70",
      wilgotnosc_wzgledna: "12.8",
      suma_opadu: "0.4",
      cisnienie: null,
    },
    {
      id_stacji: "12560",
      stacja: "Katowice",
      data_pomiaru: "2022-03-11",
      godzina_pomiaru: "19",
      temperatura: "-1.9",
      predkosc_wiatru: "3",
      kierunek_wiatru: "70",
      wilgotnosc_wzgledna: "37.7",
      suma_opadu: "0",
      cisnienie: "1034.7",
    },
    {
      id_stacji: "12185",
      stacja: "K\u0119trzyn",
      data_pomiaru: "2022-03-11",
      godzina_pomiaru: "19",
      temperatura: "-1.6",
      predkosc_wiatru: "1",
      kierunek_wiatru: "100",
      wilgotnosc_wzgledna: "48.9",
      suma_opadu: "0",
      cisnienie: "1035.5",
    },
    {
      id_stacji: "12570",
      stacja: "Kielce",
      data_pomiaru: "2022-03-11",
      godzina_pomiaru: "19",
      temperatura: "-3.8",
      predkosc_wiatru: "1",
      kierunek_wiatru: "50",
      wilgotnosc_wzgledna: "47.9",
      suma_opadu: "0",
      cisnienie: "1036.3",
    },
    {
      id_stacji: "12520",
      stacja: "K\u0142odzko",
      data_pomiaru: "2022-03-11",
      godzina_pomiaru: "19",
      temperatura: "-0.3",
      predkosc_wiatru: "1",
      kierunek_wiatru: "120",
      wilgotnosc_wzgledna: "35.7",
      suma_opadu: "0",
      cisnienie: "1032.1",
    },
    {
      id_stacji: "12345",
      stacja: "Ko\u0142o",
      data_pomiaru: "2022-03-11",
      godzina_pomiaru: "19",
      temperatura: "-1.1",
      predkosc_wiatru: "2",
      kierunek_wiatru: "130",
      wilgotnosc_wzgledna: "51.5",
      suma_opadu: "0",
      cisnienie: "1034.7",
    },
    {
      id_stacji: "12100",
      stacja: "Ko\u0142obrzeg",
      data_pomiaru: "2022-03-11",
      godzina_pomiaru: "19",
      temperatura: "1.2",
      predkosc_wiatru: "3",
      kierunek_wiatru: "140",
      wilgotnosc_wzgledna: "41.8",
      suma_opadu: "0",
      cisnienie: "1031.5",
    },
    {
      id_stacji: "12105",
      stacja: "Koszalin",
      data_pomiaru: "2022-03-11",
      godzina_pomiaru: "19",
      temperatura: "2.3",
      predkosc_wiatru: "4",
      kierunek_wiatru: "140",
      wilgotnosc_wzgledna: "31.8",
      suma_opadu: "0",
      cisnienie: "1032.5",
    },
    {
      id_stacji: "12488",
      stacja: "Kozienice",
      data_pomiaru: "2022-03-11",
      godzina_pomiaru: "19",
      temperatura: "-4.9",
      predkosc_wiatru: "0",
      kierunek_wiatru: "0",
      wilgotnosc_wzgledna: "64.7",
      suma_opadu: "0",
      cisnienie: "1036.2",
    },
    {
      id_stacji: "12566",
      stacja: "Krak\u00f3w",
      data_pomiaru: "2022-03-11",
      godzina_pomiaru: "19",
      temperatura: "-2.9",
      predkosc_wiatru: "3",
      kierunek_wiatru: "40",
      wilgotnosc_wzgledna: "48.9",
      suma_opadu: "0",
      cisnienie: "1035.4",
    },
    {
      id_stacji: "12670",
      stacja: "Krosno",
      data_pomiaru: "2022-03-11",
      godzina_pomiaru: "19",
      temperatura: "-3.1",
      predkosc_wiatru: "1",
      kierunek_wiatru: "30",
      wilgotnosc_wzgledna: "40.8",
      suma_opadu: "0.01",
      cisnienie: "1035.7",
    },
    {
      id_stacji: "12415",
      stacja: "Legnica",
      data_pomiaru: "2022-03-11",
      godzina_pomiaru: "19",
      temperatura: "0.1",
      predkosc_wiatru: "4",
      kierunek_wiatru: "90",
      wilgotnosc_wzgledna: "45.6",
      suma_opadu: "0",
      cisnienie: "1031.7",
    },
    {
      id_stacji: "12690",
      stacja: "Lesko",
      data_pomiaru: "2022-03-11",
      godzina_pomiaru: "19",
      temperatura: "-3.7",
      predkosc_wiatru: "1",
      kierunek_wiatru: "30",
      wilgotnosc_wzgledna: "40.7",
      suma_opadu: "0.01",
      cisnienie: "1035.6",
    },
    {
      id_stacji: "12418",
      stacja: "Leszno",
      data_pomiaru: "2022-03-11",
      godzina_pomiaru: "19",
      temperatura: "0.9",
      predkosc_wiatru: "4",
      kierunek_wiatru: "100",
      wilgotnosc_wzgledna: "37.9",
      suma_opadu: "0",
      cisnienie: "1032.4",
    },
    {
      id_stacji: "12125",
      stacja: "L\u0119bork",
      data_pomiaru: "2022-03-11",
      godzina_pomiaru: "19",
      temperatura: "1.2",
      predkosc_wiatru: "2",
      kierunek_wiatru: "150",
      wilgotnosc_wzgledna: "40.8",
      suma_opadu: "0",
      cisnienie: "1033.6",
    },
    {
      id_stacji: "12495",
      stacja: "Lublin",
      data_pomiaru: "2022-03-11",
      godzina_pomiaru: "19",
      temperatura: "-5.1",
      predkosc_wiatru: "1",
      kierunek_wiatru: "10",
      wilgotnosc_wzgledna: "62.6",
      suma_opadu: "0",
      cisnienie: "1036.5",
    },
    {
      id_stacji: "12120",
      stacja: "\u0141eba",
      data_pomiaru: "2022-03-11",
      godzina_pomiaru: "19",
      temperatura: "0.5",
      predkosc_wiatru: "4",
      kierunek_wiatru: "160",
      wilgotnosc_wzgledna: "44.7",
      suma_opadu: "0",
      cisnienie: "1033.6",
    },
    {
      id_stacji: "12465",
      stacja: "\u0141\u00f3d\u017a",
      data_pomiaru: "2022-03-11",
      godzina_pomiaru: "19",
      temperatura: "-1",
      predkosc_wiatru: "3",
      kierunek_wiatru: "100",
      wilgotnosc_wzgledna: "36.7",
      suma_opadu: "0",
      cisnienie: "1035.1",
    },
    {
      id_stacji: "12280",
      stacja: "Miko\u0142ajki",
      data_pomiaru: "2022-03-11",
      godzina_pomiaru: "19",
      temperatura: "-2.9",
      predkosc_wiatru: "2",
      kierunek_wiatru: "190",
      wilgotnosc_wzgledna: "57.9",
      suma_opadu: "0",
      cisnienie: "1035.9",
    },
    {
      id_stacji: "12270",
      stacja: "M\u0142awa",
      data_pomiaru: "2022-03-11",
      godzina_pomiaru: "19",
      temperatura: "-1.6",
      predkosc_wiatru: "2",
      kierunek_wiatru: "90",
      wilgotnosc_wzgledna: "46.6",
      suma_opadu: "0",
      cisnienie: "1035.8",
    },
    {
      id_stacji: "12660",
      stacja: "Nowy S\u0105cz",
      data_pomiaru: "2022-03-11",
      godzina_pomiaru: "19",
      temperatura: "-3",
      predkosc_wiatru: "1",
      kierunek_wiatru: "150",
      wilgotnosc_wzgledna: "57.9",
      suma_opadu: "0",
      cisnienie: "1035.9",
    },
    {
      id_stacji: "12272",
      stacja: "Olsztyn",
      data_pomiaru: "2022-03-11",
      godzina_pomiaru: "19",
      temperatura: "-3.2",
      predkosc_wiatru: "0",
      kierunek_wiatru: "0",
      wilgotnosc_wzgledna: "47.7",
      suma_opadu: "0",
      cisnienie: "1035.7",
    },
    {
      id_stacji: "12530",
      stacja: "Opole",
      data_pomiaru: "2022-03-11",
      godzina_pomiaru: "19",
      temperatura: "-1.1",
      predkosc_wiatru: "3",
      kierunek_wiatru: "90",
      wilgotnosc_wzgledna: "36.7",
      suma_opadu: "0",
      cisnienie: "1033.8",
    },
    {
      id_stacji: "12285",
      stacja: "Ostro\u0142\u0119ka",
      data_pomiaru: "2022-03-11",
      godzina_pomiaru: "19",
      temperatura: "-4",
      predkosc_wiatru: "0",
      kierunek_wiatru: "0",
      wilgotnosc_wzgledna: "54.5",
      suma_opadu: "0",
      cisnienie: "1036.2",
    },
    {
      id_stacji: "12230",
      stacja: "Pi\u0142a",
      data_pomiaru: "2022-03-11",
      godzina_pomiaru: "19",
      temperatura: "0.9",
      predkosc_wiatru: "3",
      kierunek_wiatru: "110",
      wilgotnosc_wzgledna: "36.7",
      suma_opadu: "0.01",
      cisnienie: "1033.4",
    },
    {
      id_stacji: "12001",
      stacja: "Platforma",
      data_pomiaru: "2022-03-11",
      godzina_pomiaru: "19",
      temperatura: "3.4",
      predkosc_wiatru: "9",
      kierunek_wiatru: "170",
      wilgotnosc_wzgledna: null,
      suma_opadu: "0",
      cisnienie: "1033.5",
    },
    {
      id_stacji: "12360",
      stacja: "P\u0142ock",
      data_pomiaru: "2022-03-11",
      godzina_pomiaru: "19",
      temperatura: "-2.1",
      predkosc_wiatru: "1",
      kierunek_wiatru: "100",
      wilgotnosc_wzgledna: "61.9",
      suma_opadu: "0",
      cisnienie: "1035.3",
    },
    {
      id_stacji: "12330",
      stacja: "Pozna\u0144",
      data_pomiaru: "2022-03-11",
      godzina_pomiaru: "19",
      temperatura: "1.4",
      predkosc_wiatru: "5",
      kierunek_wiatru: "110",
      wilgotnosc_wzgledna: "33.7",
      suma_opadu: "0",
      cisnienie: "1033",
    },
    {
      id_stacji: "12695",
      stacja: "Przemy\u015bl",
      data_pomiaru: "2022-03-11",
      godzina_pomiaru: "19",
      temperatura: "-2.1",
      predkosc_wiatru: "3",
      kierunek_wiatru: "40",
      wilgotnosc_wzgledna: "42.5",
      suma_opadu: "0",
      cisnienie: "1035.6",
    },
    {
      id_stacji: "12540",
      stacja: "Racib\u00f3rz",
      data_pomiaru: "2022-03-11",
      godzina_pomiaru: "19",
      temperatura: "-0.1",
      predkosc_wiatru: "3",
      kierunek_wiatru: "90",
      wilgotnosc_wzgledna: "33.8",
      suma_opadu: "0",
      cisnienie: "1033.4",
    },
  ];

// // 1. No stations with null values
// const noMissingData = data.filter(item => !Object.values(item).includes(null));
// console.log(noMissingData);

// // 2. Dominant wind direction
// const windDirections = data.map(station => station.kierunek_wiatru);
// // const dominantWindDirection = Math.max(...windDirections)
// console.log(windDirections);
// const dominantWindDirection = windDirections.reduce((acc, cur) => windDirections.filter(x => x === acc).length >= windDirections.filter(x => x === cur).length ? acc : cur)
// console.log(dominantWindDirection);


// // 3. Temperatures of stations with pressure higher than 1030
// const stationsWithCorrectPressure = data.filter(station => station.cisnienie > 1030).map(station => station.temperatura);
// console.log(stationsWithCorrectPressure);



// Mirek
// 1. Wyświetl nazwy filmów produkcji Warner Bros.
// 2. Wyświetl thrillery reżyserów urodzonych po 1960, które były wydane po 2005
// 3. Wyświetl dzieci reżyserów, których imiona zaczynają się na "F"
const directors = [
  {
    name: "Christopher",
    surname: "Nolan",
    birth: 1970,
    children: ["Flora Nolan", "Oliver Nolan", "Rory Nolan", "Magnus Nolan"],
    movies: [
      {
        title: "Memento",
        year: 2000,
        genre: "Thriller",
        distributor: "Newmarket Films",
      },
      {
        title: "Inception",
        year: 2010,
        genre: "Thriller",
        distributor: "Warner Bros.",
      },
      {
        title: "Dunkirk",
        year: 2017,
        genre: "War",
        distributor: "Warner Bros.",
      },
      {
        title: "Tenet",
        year: 2020,
        genre: "Thriller",
        distributor: "Warner Bros.",
      },
    ],
  },
  {
    name: "Quentin",
    surname: "Tarantino",
    birth: 1963,
    children: ["Leo Tarantino"],
    movies: [
      {
        title: "Pulp Fiction",
        year: 1994,
        genre: "Crime",
        distributor: "Miramax",
      },
      {
        title: "Kill Bill",
        year: 2003,
        genre: "Action",
        distributor: "Miramax",
      },
      {
        title: "Django",
        year: 2012,
        genre: "Western",
        distributor: "Columbia Pictures",
      },
      {
        title: "The Hateful Eight",
        year: 2015,
        genre: "Western",
        distributor: "The Weinstein Company",
      },
    ],
  },
  {
    name: "Martin",
    surname: "Scorsese",
    birth: 1942,
    children: [
      "Francesca Scorsese",
      "Domenica Cameron-Scorsese",
      "Cathy Scorsese",
    ],
    movies: [
      {
        title: "After Hours",
        year: 1985,
        genre: "Black comedy",
        distributor: "Warner Bros.",
      },
      {
        title: "Casino",
        year: 1995,
        genre: "Crime",
        distributor: "Universal Pictures",
      },
      {
        title: "The Departed",
        year: 2006,
        genre: "Crime",
        distributor: "Warner Bros.",
      },
      {
        title: "The Irishman",
        year: 2019,
        genre: "Crime",
        distributor: "Netflix",
      },
    ],
  },
];


// 1. Movies produced by Worner Bros
// const moviesDoneByWB = directors.map(allMovies => allMovies.movies)
//                                 .reduce((acc, cur) => acc.concat(cur))
//                                 .filter(item => item['distributor'] === 'Warner Bros.')
//                                 .map(movie => movie['title']);
// console.log(moviesDoneByWB);

// 2. Thrillers of directors born after 1960 which were released after 2005
// const thrillerMovies = directors.filter(birthDate => birthDate['birth'] > 1960)
//                                 .map(allMovies2 => allMovies2.movies).flat()
//                                 .filter(item => Object.values(item).includes('Thriller'))
//                                 .map(movie => movie['title']);
// console.log(thrillerMovies);

// 3. Directors' children that names start with 'F'
// const directorsChildren = directors.map(allChildren => allChildren.children).flat().filter(name => name[0] === 'F');
// console.log(directorsChildren);

// Dominika
// 1. Wyświetl nazwy kawiarni znajdujących się przy ul. Długiej w Krakowie.
// 2. Wyświetl liczbę kawiarni, które w menu mają ‘iceLatte’.
// 3. Znajdź kawiarnie, w których espresso kosztuje więcej niż 10.
const coffeeShop = [
  {
      name: "Fornir",
      street: "Długa",
      city: "Kraków",
      coffee: ['espresso', 'americano', 'flatWhite', 'capuccino', 'latte', 'mocca'],
      coffeePrice: [
          {
              espresso: 9,
              americano: 10,
              flatWhite: 13,
              capuccino: 13,
              latte: 14,
              mocha: 15
          }
      ],
  },
  {
      name: "Jordan Cafe",
      street: "Długa",
      city: "Kraków",
      coffee: ['espresso', 'americano', 'flatWhite', 'capuccino', 'latte', 'mocca', 'iceLatte'],
      coffeePrice: [
          {
              espresso: 10,
              americano: 11,
              flatWhite: 14,
              capuccino: 13,
              latte: 15,
              mocha: 15,
              iceLatte: 14
          }
      ],
  },
  {
      name: "Iluzjon Art Cafe",
      street: "Rynek",
      city: "Sandomierz",
      coffee: ['espresso', 'americano', 'flatWhite', 'capuccino', 'latte', 'mocca'],
      coffeePrice: [
          {
              espresso: 8,
              americano: 10,
              flatWhite: 15,
              capuccino: 12,
              latte: 14,
              mocha: 15
          }
      ],
  },
  {
      name: "Ministerstwo Kawy",
      street: "Marszałkowska",
      city: "Warszawa",
      coffee: ['espresso', 'americano', 'flatWhite', 'capuccino', 'latte', 'mocca', 'iceLatte'],
      coffeePrice: [
          {
              espresso: 11,
              americano: 13,
              flatWhite: 14,
              capuccino: 15,
              latte: 16,
              mocha: 18,
              iceLatte: 18
          }
      ],
  },
  {
      name: "Magia Cafe Bar",
      street: "Długa",
      city: "Kraków",
      coffee: ['espresso', 'americano', 'flatWhite', 'capuccino', 'latte', 'mocca'],
      coffeePrice: [
          {
              espresso: 9,
              americano: 9,
              flatWhite: 13,
              capuccino: 13,
              latte: 14,
              mocha: 15
          }
      ],
  },
  {
      name: "Kawiarnia Kafka",
      street: "Oboźna",
      city: "Warszawa",
      coffee: ['espresso', 'americano', 'flatWhite', 'capuccino', 'latte', 'mocca'],
      coffeePrice: [
          {
              espresso: 9,
              americano: 11,
              flatWhite: 14,
              capuccino: 13,
              latte: 15,
              mocha: 15
          }
      ],
  },   {
      name: "Kawa",
      street: "Długa",
      city: "Gdańsk",
      coffee: ['espresso', 'americano', 'flatWhite', 'capuccino', 'latte', 'mocca'],
      coffeePrice: [
          {
              espresso: 9,
              americano: 10,
              flatWhite: 13,
              capuccino: 13,
              latte: 14,
              mocha: 15
          }
      ],
  }
  ]

  // // // 1. Coffeeshop on Długa street in Krakow
  // const coffeeShopsOnDlugaStreet = coffeeShop.filter(single_coffeeShop => single_coffeeShop.street === 'Długa' && single_coffeeShop.city === 'Kraków')
  //                                             .map(filteredCoffeeShops => filteredCoffeeShops.name);
  // console.log(coffeeShopsOnDlugaStreet);

  // // // 2. Coffeeshop that has 'iceLatte'
  // const coffeeshopWithIceLatte = coffeeShop.filter(single_coffeeShop => single_coffeeShop.coffee.includes('iceLatte')).length;
  // console.log(coffeeshopWithIceLatte);

  // // 3. Coffeeshop with espresso more expensive than 10zl
  // const coffeeshopWithMoreThan10ZlEspresso = coffeeShop.filter(single_coffeshop => single_coffeshop.coffeePrice[0].espresso > 10)
  //                                                       .map(filteredCoffeeshop => filteredCoffeeshop.name);
  // console.log(coffeeshopWithMoreThan10ZlEspresso);


// Marcin
// 1. Wyświetl nazwy wszystkich mięsożerców żyjących na obszarach trawiastych
// 2. Wyświetl gdzie żyją wszystkie zwierzęta ważące powyżej 1 kg i żyjące co najmniej 10 lat
// 3. Wyświetl wszystkie zwierzęta wszystkożerne większe niż 50cm
const animals = [
  {
    mammals: [
      {
        name: 'Eurasian Lynx',
        habitat: ['Grassland', 'Mountain', 'Taiga', 'Temperate Rainforest'],
        diet: 'Carnivore',
        sizeInCm: 130,
        weightInKg: 30,
        lifespanInYears: 25
      },
      {
        name: 'Red Fox',
        habitat: ['Desert', 'Grassland', 'Taiga', 'Woodland'],
        diet: 'Omnivore',
        sizeInCm: 90,
        weightInKg: 12,
        lifespanInYears: 5 
      }
    ]
  },
  {
    birds: [
      {
        name: 'Black-chinned Hummingbird',
        habitat: ['Grassland', 'Mountain', 'Woodland'],
        diet: 'Omnivore',
        sizeInCm: 8.5,
        weightInKg: 0.0035,
        lifespanInYears: 10
      },
      {
        name: 'Ferruginous Hawk',
        habitat: ['Grassland'],
        diet: 'Carnivore',
        sizeInCm: 70,
        weightInKg: 1.2,
        lifespanInYears: 20
      }
    ]
  },
  {
    reptlies: [
      {
        name: 'Alligator Snapping Turtle',
        habitat: ['Freshwater', 'Swamp'],
        diet: 'Omnivore',
        sizeInCm: 80,
        weightInKg: 80,
        lifespanInYears: 45
    },
      {
        name: 'Eyelash Viper',
        habitat: ['Tropical Rainforest'],
        diet: 'Carnivore',
        sizeInCm: 80,
        weightInKg: 0.225,
        lifespanInYears: 12 
      }
    ]
  },
  {
    amphibians: [
      {
        name: 'Axolotl',
        habitat: ['Freshwater'],
        diet: 'Carnivore',
        sizeInCm: 30,
        weightInKg: 0.225,
        lifespanInYears: 12
      }
    ]
  },
  {
    fish: [
      {
        name: 'Great Hammerhead',
        habitat: ['Coral Reef', 'Shallow Sea'],
        diet: 'Carnivore',
        sizeInCm: 500,
        weightInKg: 500,
        lifespanInYears: 30
    },
      {
        name: 'Leafy Seadragon',
        habitat: ['Shallow Sea'],
        diet: 'Carnivore',
        sizeInCm: 35,
        weightInKg: 0.112,
        lifespanInYears: 10
      }
    ]
  }
]


const animalsList = animals.flatMap((animal) => Object.values(animal)[0]);

const carnivoresInGrassland = animalsList
                              .filter(animal => animal.diet === 'Carnivore' && animal.habitat.includes('Grassland'))
                              .map(animal => animal.name);
console.log(carnivoresInGrassland);

const result2 = animalsList.filter(animal => animal.weightInKg > 1 && animal.lifespanInYears >= 10)
                            .flatMap(animal => animal.habitat)
console.log(result2);

const result3 = animalsList.filter(animal => animal.sizeInCm > 50 && animal.diet === 'Omnivore')
                            .map(omnivore => omnivore.name);
console.log(result3);