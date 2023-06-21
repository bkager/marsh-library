import React, { useState } from "react";
import Book from "./Book";

const gameText = <Book />


const MainText = () => {
  return (
    <div>
      {gameText}
    </div>
  );
};

export default MainText;
