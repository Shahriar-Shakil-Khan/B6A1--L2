// Define an interface Book with the following properties:

// title (string)
// author (string)
// publishedYear (number)
// isAvailable (boolean)
// Then, create a function printBookDetails that accepts an object of type Book and prints its details to the console in the format: "Title: [title], Author: [author], Published: [publishedYear], Available: [Yes/No]".

type Book = {

    title:string;
    author:string;
    publishedYear:number;
    isAvailable:boolean;
    
}

function printBookDetails (book:Book){
    console.log(`Title: ${book.title}, Author: ${book.author}, Published Year: ${book.publishedYear}, Available: ${book.isAvailable ? 'Yes' : 'No'}`);
}

const Book = {
  title: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald',
  publishedYear: 1925,
  isAvailable: true,
};

printBookDetails(Book);