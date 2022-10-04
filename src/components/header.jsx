import React from 'react';

const Header =({titulo})=>{
    return (
       <header>
           <h1 className="text-center display-2 mainTitle">{titulo}</h1>
       </header>
    );
}

export default Header;