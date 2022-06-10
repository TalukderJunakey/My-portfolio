import React from 'react';
import cover from '../../images/cover.jpg';
import resume from '../../../src/JUNAKEY_RESUME.pdf'
const Banner = () => {
    return (
        <div class="hero min-h-screen bg-base-200">
            <div class="hero-content flex-col lg:flex-row">
                <img src={cover} class="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 class="text-5xl font-bold ">--I'M JUNAKEY</h1>
                    <p class="py-6">I'm a frontend developer focused on crafting <br />
                        & user-friendly experiences.I'm passionate building excellent websites.</p>
                    <button class="btn btn-primary">
                        <a href={resume} download="JUNAKEY_RESUME.pdf">Download Resume</a>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Banner;