import React from 'react';


import cell from '../../images/cell.png'
import convo from '../../images/convo.png'
import paint from '../../images/paint.png'
import Project from './Project';
const Projects = () => {
    const projects = [
        {
            _id: 1,
            name: 'Cell Phone Universe',
            img: cell,
            live: 'https://sharp-agnesi-f85d97.netlify.app/'

        },

        {
            _id: 2,
            name: 'Convention Center',
            img: convo,
            live: 'https://quirky-dubinsky-cd4ac2.netlify.app/'

        },
        {
            _id: 3,
            name: 'PaintBrush',
            img: paint,
            live: 'https://manufacturer-client.web.app/'

        },
    ]
    return (
        <div>
            <div className='my-28 text-3xl font-bold '>
                <h1>My Projects</h1>

            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    projects.map(project => <Project
                        key={project._id}
                        project={project}

                    ></Project>)
                }
            </div>
        </div>
    );
};

export default Projects;
