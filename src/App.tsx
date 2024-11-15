import React from "react";
import {Main} from "./layout/sections/main/Main";
import {Skills} from "./layout/sections/skills/Skills";
import {Works} from "./layout/sections/works/Works";
import {Testimony} from "./layout/sections/testimony/Testimony";
import {Contacts} from "./layout/sections/contacts/Contacts";
import {Footer} from "./layout/sections/footer/Footer";
import {Header} from "./layout/sections/header/Header";

function App () {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Works/>
            <Testimony/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;

