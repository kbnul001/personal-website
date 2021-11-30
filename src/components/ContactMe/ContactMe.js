import React, { useRef, useState } from 'react';
import img from '../../media/pictures/contactme2.png';
import Header from '../Header/Header';
import emailjs from 'emailjs-com';

const ContactMe = () => {
    const [contactInfo, setContactInfo] = useState({});
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_wxmdpov', 'template_jruhhce', form.current, 'user_9aaEMmjwEaCRdfSwZfnwB')
            .then((result) => {
                if (result.text) {
                    alert("Message has been sent. Kamil will contact you soon!")
                    e.target.reset();
                }
            }, (error) => {
                alert("Message has not been sent. Try agian!")
            });
    };




    return (
        <>
            <Header props="yes"></Header>
            <div className="flex md:flex-row flex-col mt-16 mb-20">

                <form ref={form} onSubmit={sendEmail} className="order-2 md:order-1 md:w-full mx-10 max-w-lg  md:mx-auto my-10 ">
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full  px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                Name
                            </label>
                            <input required name="user_name" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" />

                        </div>

                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                                E-mail
                            </label>
                            <input required name="user_email" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email" />
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                                Message
                            </label>
                            <textarea required name="message" className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" id="message"></textarea>
                            {/* <p className="text-gray-600 text-xs italic">Re-size can be disabled by set by resize-none / resize-y / resize-x / resize</p> */}
                        </div>
                    </div>
                    <div className="md:flex md:items-center">
                        <div className="mx-auto">
                            <button className=" shadow bg-blue-500 hover:bg-blue-600 focus:border-2  text-white font-bold py-2 px-4 rounded md:w-52" type="submit">
                                Send
                            </button>

                        </div>

                    </div>
                </form>
                <div className="order-1 md:order-2 mx-auto my-auto text-center">
                    <h1 className="text-3xl font-mono font-bold">Contact Me</h1>
                    <img className="mx-auto" src={img} alt="" />
                </div>
            </div>
        </>
    );
};

export default ContactMe;