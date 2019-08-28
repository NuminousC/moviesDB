// declare and initialize array using literal
var movies = [{
        title: 'Godzilla',
        seenIT: false,
        rating: 4.7
    },
    {
        title: 'Avengers: End Game',
        seenIT: false,
        rating: 4.5
    },
    {
        title: 'Avengers: Infinity Wars',
        seenIT: true,
        rating: 4.2
    }
]

// iterate array using a for loop
for (i = 0; i < movies.length; i++) {
    if (movies[i].seenIT == true) {
        document.write("You have seen " + movies[i].title + " - " + movies[i].rating + " stars." + "<br>")
    } else {
        document.write("You have not seen " + movies[i].title + " - " + movies[i].rating + " stars." + "<br>")
    }
}