import React from 'react';

const Contact = () => {
    return (
        <div class="hero min-h-screen bg-base-200">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <div class="text-center lg:text-left">
                    <h1 class="text-3xl font-bold">Contact Me</h1>
                    <h1 class="text-5xl font-bold">I Want To Hear From You</h1>

                    <p class="py-6">Please fill out the form on this section to contact with me. Or call between 9:00 a.m. and 8:00 p.m. ET, Monday through Friday</p>
                </div>
                <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div class="card-body">
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="Your email" class="input input-bordered" />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="Your password" class="input input-bordered" />

                        </div>

                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Message</span>
                            </label>
                            <input type="text" placeholder="Write your message here" class="input input-bordered" />

                        </div>
                        <div class="form-control mt-6">
                            <button class="btn btn-primary">Submit Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;