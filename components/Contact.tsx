"use client";
import { useState } from "react";

export default function Contact() {
    const [inputs, setInputs] = useState({
        name: '',
        email: '',
        message: ''
    });
    const handleInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setInputs((state) => ({ ...state, [e.target.name]: e.target.value }))
    }

    const [message, setMessage] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        fetch(process.env.NEXT_PUBLIC_API_URL + "/enquiry", {
            method: 'POST',
            body: JSON.stringify(inputs)
        })
            .then((res) => res.json())
            .then((res) => {
                setMessage(res.message);
                setInputs({
                    name: "",
                    email: "",
                    message: ""
                });

                setTimeout(() => {
                    setMessage('');
                }, 3000)
            });
    }

    return (
        <main className="container mx-auto px-4 py-6 mb-7">
            <h2 className="text-4xl font-bold mb-8 text-center">Contact Us</h2>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                {/* Form */}
                <form
                    onSubmit={handleSubmit}
                    className="w-full md:w-1/2 p-6 rounded shadow-md"
                >
                    <div className="flex flex-col mb-4">
                        <label htmlFor="name" className="mb-1 font-medium">Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            onChange={handleInput}
                            value={inputs.name ?? ""}
                            className="border rounded px-2 py-2"
                            required
                        />
                    </div>
                    <div className="flex flex-col mb-4">
                        <label htmlFor="email" className="mb-1 font-medium">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            onChange={handleInput}
                            value={inputs.email ?? ""}
                            className="border rounded px-2 py-2"
                            required
                        />
                    </div>
                    <div className="flex flex-col mb-4">
                        <label htmlFor="message" className="mb-1 font-medium">Message:</label>
                        <textarea
                            id="message"
                            name="message"
                            onChange={handleInput}
                            value={inputs.message ?? ""}
                            className="border rounded px-2 py-2"
                            rows={4}
                            required
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-full"
                    >
                        Submit
                    </button>
                    {message && <p className="mt-4 text-green-600">{message}</p>}
                </form>
                {/* Image */}
                <div className="w-full md:w-1/2 flex justify-center">
                    <img
                        src="https://static.vecteezy.com/system/resources/previews/006/912/044/original/contact-us-illustration-concept-vector.jpg"
                        alt="Contact Us Illustration"
                        className="max-w-full h-auto rounded shadow-md"
                    />
                </div>
            </div>
        </main>
    )
}