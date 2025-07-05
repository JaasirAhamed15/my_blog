// app/api/posts/route.ts
import { NextRequest, NextResponse } from 'next/server';
import connectMongo from '@/utils/connectMongo';
import PostModel from '@/models/postModel';

export async function POST(req: NextRequest) {
  try {
    await connectMongo();
    const body = await req.json();
    const { title, description, image } = body;

    // Generate "YYYY-MM-DD" string
    const now = new Date();
    const createdAt = `${now.getFullYear()}-${(now.getMonth() + 1)
      .toString()
      .padStart(2, '0')}-${now.getDate().toString().padStart(2, '0')}`;

    const newPost = new PostModel({
      title,
      description,
      image,
      created_at: createdAt,
    });

    const savedPost = await newPost.save();
    return NextResponse.json(savedPost);
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}
