"use client";
import Link from "next/link";
import { ReactNode, useEffect, useRef, useState } from "react";
import Hero from "@/components/Hero";
import { Row, Col, Card, Pagination } from "antd";

export default function Home() {
  const inputref = useRef<HTMLInputElement>(null);
  const [search, setSearch] = useState(false);

  type Post = {
    id: string;
    short_description: ReactNode;
    image: string;
    title: string;
    description: string;
  };

  const [posts, setPosts] = useState<Post[]>([]);
  const [current, setCurrent] = useState(1);
  const [pageSize, setPageSize] = useState(8);

  useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_API_URL + "/posts")
      .then((res) => res.json())
      .then((res) => setPosts(res));
  }, []);

  const searchPost = () => {
    setSearch(true);
    fetch(process.env.NEXT_PUBLIC_API_URL + "/posts?q=" + inputref.current?.value)
      .then((res) => res.json())
      .then((res) => {
        setPosts(res);
        setCurrent(1); // Reset to first page on search
      })
      .finally(() => setSearch(false));
  };

  // Pagination logic with reversed posts
  const paginatedPosts = [...posts]
    .reverse()
    .slice((current - 1) * pageSize, current * pageSize);

  return (
    <div className="min-h-screen flex flex-col">
      <Hero />
      <main className="container mx-auto px-4 py-6">
        <h2 className="text-4xl font-bold mb-4 text-center">Welcome to Our Blog</h2>
        <p className="text-center">Here you can read the latest articles.</p>
      </main>

      <div className="flex flex-col sm:flex-row justify-end items-center gap-2 px-4 mb-4">
        <input
          ref={inputref}
          type="text"
          className="w-full sm:w-auto px-4 py-2 border border-gray-300 rounded-md"
          placeholder="Search..."
        />
        <button
          disabled={search}
          onClick={searchPost}
          className="w-full sm:w-auto px-4 py-2 bg-blue-500 text-white rounded-md sm:ml-2 mt-2 sm:mt-0"
        >
          {search ? "..." : "Search"}
        </button>
      </div>

      <div className="flex-1 mb-5">
        <div className="p-4">
          <Row gutter={[16, 16]}>
            {paginatedPosts.map((post) => (
              <Col key={post.id} xs={24} sm={12} md={8} xl={6}>
                <Link href={`/post/${post.id}`}>
                  <Card
                    hoverable
                    cover={
                      <img
                        alt="Post Image"
                        src={post.image}
                        className="h-50 object-cover w-full rounded-t"
                      />
                    }
                    style={{ height: "100%" }}
                  >
                    <Card.Meta
                      title={post.title}
                      description={post.short_description}
                    />
                  </Card>
                </Link>
              </Col>
            ))}
            {posts.length === 0 && inputref.current && inputref.current.value && (
              <Col span={24}>
                <p className="text-center">
                  No Post available for this query: <b>{inputref.current.value}</b>
                </p>
              </Col>
            )}
          </Row>
          <div className="flex justify-center mt-8">
            <Pagination
              current={current}
              pageSize={pageSize}
              total={posts.length}
              onChange={(page, size) => {
                setCurrent(page);
                setPageSize(size || 8);
              }}
              showSizeChanger
              pageSizeOptions={['4', '8', '12', '16']}
            />
          </div>
        </div>
      </div>
      <Link
  href="/post-upload"
  className="fixed bottom-8 right-8 bg-blue-600 hover:scale-130 duration-300 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg text-3xl z-50"
  aria-label="Add new post"
>
  +
</Link>

    </div>
  );
}
