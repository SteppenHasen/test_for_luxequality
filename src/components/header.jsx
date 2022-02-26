import React from "react";

export default function Header() {
    return (
        <header>
            <div className="logo">
                <div className="imgLogo"></div>
                <div className="logoName">
                    <h3>ISearch</h3>
                </div>
            </div>
            <div className="search">
                <input type='text' placeholder="Search your point"></input>
            </div>
        </header>
    )
}