import React from 'react';

const Header = ({title}) => {
    return (
        <header>
            <div className="container">
                <div className="content">
                    <h1 className="title">{title}</h1>
                    <p className="text">this project ilustrate the character the famous Rick and morty series</p>
                </div>
            </div>
        </header>
    );
}
export default Header;