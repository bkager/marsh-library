import React, { useState } from "react";

const newBook = {
  type: "",
  foreAppearance: "",
  afterAppearance: "",
  subject: "",
  extraDetail: "",
};

let bookDescription = "";

function bookType() {
  const typeWords = [
    "book",
    "book",
    "book",
    "book",
    "book",
    "volume",
    "paperback",
    "tome",
    "hardcover",
    "manuscript",
    "folio",
    "picture book",
    "children's book",
    "work", 
    "monograph", 
    "offprint", 
    "advance copy", 
  ];
  let randomNum = Math.floor(Math.random() * typeWords.length);
  return (newBook.type = typeWords[randomNum]);
}

function bookForeAppearance() {
  const appearanceWords = [
    "red",
    "blue",
    "green",
    "yellow", 
    "orange",
    "purple", 
    "pink",
    "black", 
    "brown", 

    "shiny",
    "new",
    "beautiful",
    "garish",
    "old",

    "silk-covered", 
    "newspaper-wrapped", 
    "screenprinted", 

    "water-damaged",
    "slightly foxed",
    "tattered",
    "battered",
    "slightly chewed", 
    "somewhat torn",
    
    "much-loved",
    "well-reviewed", 
    "award-winning", 
    "outdated",
    "classic", 
    "rather bad",

    "cheerful",
    "wholesome",
    "lurid", 
    "pleasant", 
    "entertaining",
   
    "illustrated",
    "annotated",
    "small-print", 
    "large-type", 
    "be-crayoned", 
    "woodcut", 
    "engraved", 
    "illuminated",
    "gilt"
  ];
  let randomNum = Math.floor(Math.random() * appearanceWords.length);
  return (newBook.appearance = appearanceWords[randomNum]);
}

function bookAfterAppearance() {
  const appearanceWords = [
    //Should fit the formula "a book ____ on marsh birds". 
    //May end with punctuation.

    "with penciled notes in the margin",
    "with a leaf stuck in it as a bookmark",
    "with a flower pressed in the middle",
    "showing signs of wear", 
    "showing signs of much love", 
    "smelling faintly of woodsmoke", 
    "with a jauntily illustrated cover", 
    "with silvered edges", 
    "with a former owner's name written on the first page,", 
    "charred a bit at one corner", 
    "with an embossed cover", 
    "with constellations on the cover",
    "with a cover made from traditional reed paper",
    "with one corner missing and replaced with cardboard carefully colored to match the original,",
    "with a ribbon bookmark",
    "with a bookplate in the front decorated with a picture of an ancient reed boat,",
    "sporting a cover decorated with an embossed frog in the middle of a wreath of berries and leaves,",
    "with a brown cover",
  ];
  let randomNum = Math.floor(Math.random() * appearanceWords.length);
  return (newBook.afterAppearance = appearanceWords[randomNum]);
}

function bookSubject() {
  const subjects = [

    //Should fit the formula 'a book _____'. 
    //Should end with punctuation.
    //May not begin with punctuation.  
    "about a boy chosen to join the cattail priests.",
    "about a girl's journey the great lake to the north.",
    "telling the story of a southern girl who moves to a small town in the northern marshes for her mother's job, the friends she makes there, and their adventures together one autumn.",
    "which is a coming of age story set among the Weshionik during the first contact of the Nation with the northern marshes.",
    "about a young woman debating whether to go to university or to spend a year on her uncle's fishing boat on the great waterways.",
    
    "containing a grandmother's memoirs of the great student resistance.",
    "describing the history of the southern educational movement and the resistance of the Egret Peoples.",
    
    "on the birds of the marshes.",
    "on traditional Marsh building techniques, from houseboats to building on piles to reed bathing pools.",
    "describing how to tie forty traditional fishing lures.", 
    "surveying the varieties of embroidery techniques traditional among the marsh peoples.",
    "transcribing traditional flute music of the marshes.",
  ];
  let randomNum = Math.floor(Math.random() * subjects.length);
  return (newBook.subject = subjects[randomNum]);
}

function bookExtraDetail() {
  const extraDetails = [
    "It looks like it has been dropped in the water more than once.", 
    "It looks like it has been read repeatedly.",
    "Isn't your professor writing on the same topic?", 
    "It smells a bit of mildew.", 
    "You've read this once before.", 
    "You heard a lecture on this in school once.", 
    "Your mother read this once, you think.", 
    "Perfect vacation reading.", 
    "It evokes the memory of a long-forgotten spring day in you."
  ];
  let randomNum = Math.floor(Math.random() * extraDetails.length);
  return (newBook.extraDetail = extraDetails[randomNum]);
}

//I moved the about words into the subjects
// function randomAboutWord() {
//   const aboutWords = [
//     "about",
//     "concerning",
//     "dealing with",
//     "on",
//     "on the topic of",
//     "on the subject of",
//     "delving into",
//     "discussing",
//     "describing",
//     "covering", 
//     "illuminating"
//   ];
//   let randomNum = Math.floor(Math.random() * aboutWords.length);
//   return aboutWords[randomNum];
// }

newBook.type = bookType();
newBook.foreAppearance = bookForeAppearance();
newBook.afterAppearance = bookAfterAppearance();
newBook.subject = bookSubject();
newBook.extraDetail = bookExtraDetail();

const createBook = () => {
  const bookTexts = [
    `${newBook.foreAppearance} ${newBook.type} ${
      newBook.subject
    }`,
    `${newBook.type} ${newBook.afterAppearance} ${
      newBook.subject
    }`,
    `${newBook.foreAppearance} ${newBook.type} ${
      newBook.subject
    } ${newBook.extraDetail}`,
    `${newBook.type} ${newBook.afterAppearance} ${
      newBook.subject
    } ${newBook.extraDetail}`,
  ];
  let randomNum = Math.floor(Math.random() * bookTexts.length);
  return bookTexts[randomNum];
};

bookDescription = createBook();

const Book = () => {
  return (
    <div>
      <p>You receive a {bookDescription}</p>
    </div>
  );
};

export default Book;
