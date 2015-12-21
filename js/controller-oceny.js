var app = angular.module('aplikacjaOceny',[]);

			app.controller('kontrolerTabeliOcen' , [ '$scope' , '$filter' , function($scope,$filter)
			{
        $scope.ile_semestrow = 2;
				$scope.oceny = [
  {
    "Semestr":1,
    "Przedmiot":"Analiza matematyczna 1",
    "Forma_zaj":"Ćwiczenia",
    "Ocena":5.0
  },
  {
    "Semestr":1,
    "Przedmiot":"Analiza matematyczna 1",
    "Forma_zaj":"Wykład",
    "Ocena":5.0
  },
  {
    "Semestr":1,
    "Przedmiot":"Miernictwo 1",
    "Forma_zaj":"Wykład",
    "Ocena":3.5
  },
  {
    "Semestr":1,
    "Przedmiot":"Grafika inżynierska",
    "Forma_zaj":"Wykład",
    "Ocena":4.0
  },
  {
    "Semestr":1,
    "Przedmiot":"Grafika inżynierska",
    "Forma_zaj":"Ćwiczenia",
    "Ocena":4.0
  },
  {
    "Semestr":1,
    "Przedmiot":"Technologie informacyjne",
    "Forma_zaj":"Wykład",
    "Ocena":5.0
  },
  {
    "Semestr":1,
    "Przedmiot":"Technologie informacyjne",
    "Forma_zaj":"Laboratorium",
    "Ocena":5.0
  },
  {
    "Semestr":1,
    "Przedmiot":"Filozofia",
    "Forma_zaj":"Wykład",
    "Ocena":5.0
  },
  {
    "Semestr":1,
    "Przedmiot":"Podstawy programowania",
    "Forma_zaj":"Laboratorium",
    "Ocena":5.0
  },
  {
    "Semestr":1,
    "Przedmiot":"Podstawy programowania",
    "Forma_zaj":"Ćwiczenia",
    "Ocena":4.0
  },
  {
    "Semestr":1,
    "Przedmiot":"Podstawy programowania",
    "Forma_zaj":"Wykład",
    "Ocena":4.0
  },
  {
    "Semestr":1,
    "Przedmiot":"Algebra z geometrią analityczną",
    "Forma_zaj":"Ćwiczenia",
    "Ocena":4.5
  },
  {
    "Semestr":1,
    "Przedmiot":"Algebra z geometrią analityczną",
    "Forma_zaj":"Wykład",
    "Ocena":4.5
  },
  {
    "Semestr":1,
    "Przedmiot":"Własność intelektualna i prawo autorskie",
    "Forma_zaj":"Wykład",
    "Ocena":5.0
  },
  {
    "Semestr":1,
    "Przedmiot":"Etyka inżynierska",
    "Forma_zaj":"Wykład",
    "Ocena":4.0
  },
  {
    "Semestr":2,
    "Przedmiot":"Multimedia",
    "Forma_zaj":"Wykład",
    "Ocena":3.0
  },
  {
    "Semestr":2,
    "Przedmiot":"Elektromagnetyzm",
    "Forma_zaj":"Wykład",
    "Ocena":3.5
  },
  {
    "Semestr":2,
    "Przedmiot":"Systemy operacyjne",
    "Forma_zaj":"Laboratorium",
    "Ocena":5.0
  },
  {
    "Semestr":2,
    "Przedmiot":"Systemy operacyjne",
    "Forma_zaj":"Wykład",
    "Ocena":4.0
  },
  {
    "Semestr":2,
    "Przedmiot":"Miernictwo 2",
    "Forma_zaj":"Laboratorium",
    "Ocena":5.0
  },
  {
    "Semestr":2,
    "Przedmiot":"Podstawy Telekomunikacji",
    "Forma_zaj":"Wykład",
    "Ocena":4.0
  },
  {
    "Semestr":2,
    "Przedmiot":"Teoria systemów",
    "Forma_zaj":"Ćwiczenia",
    "Ocena":4.0
  },
  {
    "Semestr":2,
    "Przedmiot":"Teoria systemów",
    "Forma_zaj":"Wykład",
    "Ocena":4.0
  },
  {
    "Semestr":2,
    "Przedmiot":"Fizyka 1.1",
    "Forma_zaj":"Ćwiczenia",
    "Ocena":3.0
  },
  {
    "Semestr":2,
    "Przedmiot":"Fizyka 1.1",
    "Forma_zaj":"Wykład",
    "Ocena":3.0
  },
  {
    "Semestr":2,
    "Przedmiot":"Programowanie Obiektowe",
    "Forma_zaj":"Laboratorium",
    "Ocena":4.5
  },
  {
    "Semestr":2,
    "Przedmiot":"Programowanie Obiektowe",
    "Forma_zaj":"Wykład",
    "Ocena":4.0
  },
  {
    "Semestr":2,
    "Przedmiot":"Analiza matematyczna 2.3",
    "Forma_zaj":"Wykład",
    "Ocena":4.0
  },
  {
    "Semestr":2,
    "Przedmiot":"Rachunek prawdopodobieństwa",
    "Forma_zaj":"Wykład",
    "Ocena":4.0
  },
  {
    "Semestr":2,
    "Przedmiot":"Matematyka",
    "Forma_zaj":"Wykład",
    "Ocena":5.0
  },
  {
    "Semestr":2,
    "Przedmiot":"Squash",
    "Forma_zaj":"Ćwiczenia",
    "Ocena":5.0
  }
];
			}
				]);