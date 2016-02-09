var app = angular.module('aplikacjaOceny',[]);

			app.controller('kontrolerTabeliOcen' , [ '$scope' , '$filter' , function($scope,$filter)
			{
        $scope.ile_semestrow = 3;
				$scope.oceny = [
  {
    "Semestr":1,
    "Przedmiot":"Mathematical Analysis 1.2",
    "Forma_zaj":"Practice",
    "Ocena":5.0
  },
  {
    "Semestr":1,
    "Przedmiot":"Mathematical Analysis 1.2",
    "Forma_zaj":"Lecture",
    "Ocena":5.0
  },
  {
    "Semestr":1,
    "Przedmiot":"Measurement techniques 1",
    "Forma_zaj":"Lecture",
    "Ocena":3.5
  },
  {
    "Semestr":1,
    "Przedmiot":"Graphics for engineers",
    "Forma_zaj":"Lecture",
    "Ocena":4.0
  },
  {
    "Semestr":1,
    "Przedmiot":"Graphics for engineers",
    "Forma_zaj":"Practice",
    "Ocena":4.0
  },
  {
    "Semestr":1,
    "Przedmiot":"Information technologies",
    "Forma_zaj":"Lecture",
    "Ocena":5.0
  },
  {
    "Semestr":1,
    "Przedmiot":"Information technologies",
    "Forma_zaj":"Laboratory",
    "Ocena":5.0
  },
  {
    "Semestr":1,
    "Przedmiot":"Philosophy",
    "Forma_zaj":"Lecture",
    "Ocena":5.0
  },
  {
    "Semestr":1,
    "Przedmiot":"Programming Principles",
    "Forma_zaj":"Laboratory",
    "Ocena":5.0
  },
  {
    "Semestr":1,
    "Przedmiot":"Programming Principles",
    "Forma_zaj":"Practice",
    "Ocena":4.0
  },
  {
    "Semestr":1,
    "Przedmiot":"Programming Principles",
    "Forma_zaj":"Lecture",
    "Ocena":4.0
  },
  {
    "Semestr":1,
    "Przedmiot":"Algebra and Analytic Geometry",
    "Forma_zaj":"Practice",
    "Ocena":4.5
  },
  {
    "Semestr":1,
    "Przedmiot":"Algebra and Analytic Geometry",
    "Forma_zaj":"Lecture",
    "Ocena":4.5
  },
  {
    "Semestr":1,
    "Przedmiot":"Intellectual Property Law and Copyright",
    "Forma_zaj":"Lecture",
    "Ocena":5.0
  },
  {
    "Semestr":1,
    "Przedmiot":"Engineering Ethics",
    "Forma_zaj":"Lecture",
    "Ocena":4.0
  },
  {
    "Semestr":2,
    "Przedmiot":"Multimedia",
    "Forma_zaj":"Lecture",
    "Ocena":3.0
  },
  {
    "Semestr":2,
    "Przedmiot":"Electromagnetic",
    "Forma_zaj":"Lecture",
    "Ocena":3.5
  },
  {
    "Semestr":2,
    "Przedmiot":"Operating Systems",
    "Forma_zaj":"Laboratory",
    "Ocena":5.0
  },
  {
    "Semestr":2,
    "Przedmiot":"Operating Systems",
    "Forma_zaj":"Lecture",
    "Ocena":4.0
  },
  {
    "Semestr":2,
    "Przedmiot":"Measurement techniques 2",
    "Forma_zaj":"Laboratory",
    "Ocena":5.0
  },
  {
    "Semestr":2,
    "Przedmiot":"Principles of telecomunications",
    "Forma_zaj":"Lecture",
    "Ocena":4.0
  },
  {
    "Semestr":2,
    "Przedmiot":"Systems Theory",
    "Forma_zaj":"Practice",
    "Ocena":4.0
  },
  {
    "Semestr":2,
    "Przedmiot":"Systems Theory",
    "Forma_zaj":"Lecture",
    "Ocena":4.0
  },
  {
    "Semestr":2,
    "Przedmiot":"Physic 1.1",
    "Forma_zaj":"Practice",
    "Ocena":3.0
  },
  {
    "Semestr":2,
    "Przedmiot":"Physic 1.1",
    "Forma_zaj":"Lecture",
    "Ocena":3.0
  },
  {
    "Semestr":2,
    "Przedmiot":"Object Programming",
    "Forma_zaj":"Laboratory",
    "Ocena":4.5
  },
  {
    "Semestr":2,
    "Przedmiot":"Object Programming",
    "Forma_zaj":"Lecture",
    "Ocena":4.0
  },
  {
    "Semestr":2,
    "Przedmiot":"Mathematical Analysis 2.3",
    "Forma_zaj":"Lecture",
    "Ocena":4.0
  },
  {
    "Semestr":2,
    "Przedmiot":"Probability Theory",
    "Forma_zaj":"Lecture",
    "Ocena":4.0
  },
  {
    "Semestr":2,
    "Przedmiot":"Mathematics",
    "Forma_zaj":"Lecture",
    "Ocena":5.0
  },
  {
    "Semestr":2,
    "Przedmiot":"Squash",
    "Forma_zaj":"Practice",
    "Ocena":5.0
  },
  {
    "Semestr":3,
    "Przedmiot":"Introduction into control engineering and robotics",
    "Forma_zaj":"Laboratory",
    "Ocena":5.0
  },
  {
    "Semestr":3,
    "Przedmiot":"Introduction into control engineering and robotics",
    "Forma_zaj":"Lecture",
    "Ocena":4.0
  },
  {
    "Semestr":3,
    "Przedmiot":"Electromagnetic",
    "Forma_zaj":"Practice",
    "Ocena":3.5
  },
  {
    "Semestr":3,
    "Przedmiot":"Multimedia",
    "Forma_zaj":"Laboratory",
    "Ocena":4.0
  },
  {
    "Semestr":3,
    "Przedmiot":"Measurement techniques 3",
    "Forma_zaj":"Practice",
    "Ocena":3.5
  },
  {
    "Semestr":3,
    "Przedmiot":"Measurement techniques 3",
    "Forma_zaj":"Laboratory",
    "Ocena":4.5
  },
  {
    "Semestr":3,
    "Przedmiot":"Digital Systems 1",
    "Forma_zaj":"Lecture",
    "Ocena":3.5
  },
  {
    "Semestr":3,
    "Przedmiot":"Foundations of signal processing",
    "Forma_zaj":"Lecture",
    "Ocena":4.0
  },
  {
    "Semestr":3,
    "Przedmiot":"Foundations of signal processing",
    "Forma_zaj":"Laboratory",
    "Ocena":5.0
  },
  {
    "Semestr":3,
    "Przedmiot":"Statistics with applications in engineering",
    "Forma_zaj":"Practice",
    "Ocena":4.0
  },
  {
    "Semestr":3,
    "Przedmiot":"Statistics with applications in engineering",
    "Forma_zaj":"Lecture",
    "Ocena":4.0
  },
  {
    "Semestr":3,
    "Przedmiot":"Physics 3.1",
    "Forma_zaj":"Laboratory",
    "Ocena":4.0
  },
  {
    "Semestr":3,
    "Przedmiot":"Principles of Quality Management",
    "Forma_zaj":"Lecture",
    "Ocena":5.0
  },
  {
    "Semestr":3,
    "Przedmiot":"Analogue technology",
    "Forma_zaj":"Lecture",
    "Ocena":3.5
  },
  {
    "Semestr":3,
    "Przedmiot":"Analogue technology",
    "Forma_zaj":"Laboratory",
    "Ocena":3.5
  }
];
			}
				]);