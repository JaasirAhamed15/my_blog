"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import ReactMarkdown from "react-markdown";


type PostType = {
    title: string;
    created_at_formatted: string;
    image: string;
    description: string;
};

export default function Post() {
    const params = useParams();
    const id = params?.id as string;

    const [post, setPost] = useState<PostType | null>(null);

    useEffect(() => {
        if (!id) return;
        fetch(process.env.NEXT_PUBLIC_API_URL + "/post/" + id)
            .then(res => res.json())
            .then(res => setPost(res));
    }, [id]);

    return (
        <>
            {post &&
                <main className="container mx-auto px-4 py-6 md:h-[90vh] h-fit">
                    <h2 className="text-4xl font-bold mb-4">{post.title}</h2>
                    <p className="text-gray-500">Published on {post.created_at_formatted}</p>
                    <img src={post.image} alt="Post Image" className="my-4" width={300} height={200} />
                    <div className="prose">
                        <ReactMarkdown>{post.description}</ReactMarkdown>
                    </div>
                </main>
            }
        </>
    );
}