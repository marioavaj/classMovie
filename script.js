class Movie {
  constructor(movieName, year, actors = []) {
    this.movieName = movieName;
    this.year = year;
    this.actors = actors;
  }
  printDetail() {
    console.log(
      "Film: " + this.movieName + " Rok: " + this.year + "\nHerci:\n"
    );
    for (let i = 0; i < this.actors.length; i++) {
      console.log(this.actors[i] + "\n");
    }
    console.log("-------------------------------");
  }

  printLongestActor() {
    let lengthOfIndex = 0;
    let LongestName = "";

    for (let i = 0; i < this.actors.length; i++) {
      if (this.actors[i].length > lengthOfIndex) {
        lengthOfIndex = this.actors[i].length;
        LongestName = this.actors[i];
      }
    }
    console.log("-------------------------------");
    console.log(
      " Najdlhsie meno herca z filmu " + this.movieName + " je " + LongestName
    );
  }
}

const movie1 = new Movie("Alien", 1978, [
  "Jozef Kroner",
  "Marian Vajda",
  "Pamela Andersonova",
  "Michal Docolomansky"
]);
const movie2 = new Movie("Matrix", 1996, [
  "Stephan Hawking",
  "Keenu Reeves",
  "Pamela Anderson",
  "Baron Von Zeppelin"
]);

movie1.printDetail();
movie2.printDetail();

movie1.printLongestActor();
movie2.printLongestActor();