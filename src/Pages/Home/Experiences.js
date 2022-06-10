import React from 'react';


import html from '../../images/html.jpg';
import css from '../../images/css.png';
import js from '../../images/js.jpg';
import bootstrap from '../../images/bootstrap.jpg';
import react from '../../images/react.jpg';
import node from '../../images/node.png';
import Experience from './Experience';
const Experiences = () => {
    const experiences = [
        {
            _id: 1,
            name: 'HTML',
            img: html

        },

        {
            _id: 2,
            name: 'CSS',
            img: css

        },

        {
            _id: 3,
            name: 'JavaScript',
            img: js

        },

        {
            _id: 4,
            name: 'Bootstrap',
            img: bootstrap

        },
        {
            _id: 5,
            name: 'React',
            img: react

        },
        {
            _id: 6,
            name: 'Node JS',
            img: node

        }

    ];
    return (

        <div>
            <div className='my-28 text-3xl font-bold '>
                <h1>Experience</h1>

            </div>

            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    experiences.map(experience => <Experience
                        key={experience._id}
                        experience={experience}
                    ></Experience>)
                }
            </div>
        </div>
    );
};

export default Experiences;