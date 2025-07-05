'use client';

import { useState } from 'react';

export default function PostUploadPage() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image: '',
  });

  const [message, setMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch('/api/post-upload', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (res.ok) {
      setMessage('Post uploaded successfully!');
      setFormData({ title: '', description: '', image: '' });
    } else {
      setMessage(`Error: ${data.error}`);
    }
  };

  return (
    <div className="max-w-md w-full mx-auto p-4 sm:p-6 md:p-8 flex flex-col justify-center min-h-screen">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-center">Upload Blog Post</h1>
      {message && <p className="mb-4 text-green-500 text-center">{message}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          className="w-full border p-2 rounded text-base sm:text-lg"
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          rows={4}
          value={formData.description}
          onChange={handleChange}
          className="w-full border p-2 rounded text-base sm:text-lg resize-none"
          required
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={formData.image}
          onChange={handleChange}
          className="w-full border p-2 rounded text-base sm:text-lg"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors text-base sm:text-lg"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
