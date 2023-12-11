import React from 'react';
import Banner from '../Banner/Banner';
import Projects from '../Projects/Projects';
import Skill from '../Skills/Skill';
import Contact from '../Contact/Contact';
import Education from '../Education/Education';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
           <Skill></Skill>
            <Projects></Projects>

            <Education></Education>

<Contact></Contact>

        </div>
    );
};

export default Home;