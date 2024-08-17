// File: arrayOfObjects.js

console.log("Storing and Accessing Traditional Songs in Arrays");

// Factory Function
function createSong(title, artist, year) {
  return {
    title: title,
    artist: artist,
    year: year
  };
}

// Example 1: Create an array and populate it using the factory function
const songs = [];
console.log("\nToDo 1: Create 3 song objects");

// TODO 1: Use the factory function to create three song objects with the following details and add them to the array `songs`:
// 1. Title: 'Yesterday', Artist: 'The Beatles', Year: 1965
// 2. Title: 'What a Wonderful World', Artist: 'Louis Armstrong', Year: 1967
// 3. Title: 'Over the Rainbow', Artist: 'Judy Garland', Year: 1939
// 4. One of your own.
song = createSong('Yesterday', 'The Beatles', 1965);
song1 = createSong('What a Wonderful World', 'Louis Armstrong', 1967);
song2 = createSong('Over the Rainbow', 'Judy Garland', 1939);
song3 = createSong('La Mer', 'Claude Debussy', 1905); //my song choice

// Example: 
// songs.push(createSong('Yesterday', 'The Beatles', 1965));
songs.push(song);
//songs.push(createSong('What a Wonderful World', 'Louis Armstrong', 1967));
songs.push(song1);
//songs.push(createSong('Over the Rainbow', 'Judy Garland', 1939));
songs.push(song2);
//songs.push(createSong('La Mer', 'Claude Debussy', 1905));
songs.push(song3);

console.table(songs);


console.log("\nExample 2: Accessing Objects in the Array");
// - The title and artist of the first song
// - The artist and year of the second song
// - The title and year of the third song
console.log("\nToDo 2: Access the first, second, and third objects in the array `songs` and log:");
let yesterdaySong = songs[0];
let wonderfulSong = songs[1];
let rainbowSong = songs[2];
let lamerSong = songs[3];


// Example
console.log("First song: Title = " + songs[0].title + ", Artist = " + songs[0].artist);
console.log("Second song: Title = " + songs[1].title + ", Artist = " + songs[1].artist);
console.log("Third song: Title = " + songs[2].title + ", Artist = " + songs[2].artist);
console.log("Forth song: Title = " + songs[3].title + ", Artist = " + songs[3].artist);

// TODO: Access and log the details of the rest of the songs in the array

console.log("\nExample 3: Adding More Songs");

// TODO 3: Add two more song objects to the `songs` array using the factory function:
// 1. Title: 'My Way', Artist: 'Frank Sinatra', Year: 1969
// 2. Title: 'Imagine', Artist: 'John Lennon', Year: 1971
console.log("\nToDo 3: Add two songs more");

songs.push(createSong('My Way', 'Frank Sinatra', 1969));
songs.push(createSong('Imagine', 'John Lennon', 1971));
songs.push(createSong('Fama', 'Rosalia', 2022)); // added song
songs.push(createSong('Monaco', 'Bad Bunny', 2024)); // added song


console.table(songs);

console.log("\nExample 4: Accessing New Songs");

// TODO 4: Modify the details of the newly added songs in the array:
console.log("\nToDo 4: Modify details of new songs");
// Example:
// - Title and artist of the fourth song
songs[3].title = "Puff the Magic Dragon";
songs[3].artist = "Peter, Paul, and Mary";
songs[3].year = 1963;
songs[4].title = "Imagine";
songs[4].artist = "John Lennon";
songs[4].year = 1971;
songs[5].title = "Fama"; // modified details of 6th song
songs[5].artist = "Rosalia";
songs[5].year = 2022;
songs[6].title = "Monaco";   // modified details of 7th song
songs[6].artist = "Bad Bunny";
songs[6].year = 2024;

console.log("Fourth song: Title = " + songs[3].title + ", Artist = " + songs[3].artist);
console.log("Fifth song: Title = " + songs[4].title + ", Artist= " + songs[4].artist);
console.log("Sixth song: Title = " + songs[5].title + ", Artist= " + songs[5].artist);
console.log("Seventh song: Title = " + songs[6].title + ", Artist= " + songs[6].artist);
// TODO 4:
// Modify the details of the fifth song


console.log("\nExample 5: Modifying the Array");

// Example 5: Modifying the Array
// Complete replace the details of the first song with the following:
// - Title: 'Eleanor Rigby'
// - Artist: 'The Beatles'
// - Year: 1966
console.log("\nToDo 5: Completely Replace the details of the second song");

songs[1] = createSong('Eleanor Rigby', 'The Beatles', 1966);

console.log("Updated second song: Title = " + songs[1].title + ", Artist = " + songs[1].artist + ", Year = " + songs[1].year);





