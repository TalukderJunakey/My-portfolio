import React from 'react';

const Experience = ({ experience }) => {
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
                <img src={experience.img} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{experience.name}</h2>


            </div>
        </div>
    );
};

export default Experience;