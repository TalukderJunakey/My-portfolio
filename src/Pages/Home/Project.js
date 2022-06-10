import React from 'react';
import { Link } from 'react-router-dom';
import Projects from './Projects';

const Project = ({ project }) => {
    return (

        <div class="card w-96 bg-base-100 shadow-xl">
            <figure><img src={project.img} alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="card-title">
                    {project.name}

                </h2>
                <p>Wanna Check Details?</p>



                <label for="my-modal" class="btn modal-button">Details</label>


                <input type="checkbox" id="my-modal" class="modal-toggle" />
                <div class="modal">
                    <div class="modal-box">


                        <p>Live Link:{project.live}</p>



                        <div class="modal-action">
                            <label for="my-modal" class="btn">X</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>



    );
};

export default Project;