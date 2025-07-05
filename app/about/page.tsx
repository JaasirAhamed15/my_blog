export const metadata = {
    title: "About Us Page",
    description: "This is the about us page of our website."
};

export default function About() {
    return (
        <main className="container mx-auto px-4 py-8 max-w-7xl h-full">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                {/* Left: Content */}
                <div className="flex-1">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center md:text-left">About Us</h2>
                    <p className="text-lg md:text-xl mb-4 text-justify">
                        Welcome to our blog! We are passionate about sharing knowledge, insights, and stories on technology, programming, and personal growth. Our mission is to create a space where learners and professionals can find valuable resources and inspiration.
                    </p>
                    <p className="text-lg md:text-xl mb-4 text-justify">
                        This website is maintained by Jaasir Ahamed, a dedicated developer and lifelong learner. Here, you'll find tutorials, project showcases, and articles aimed at helping you grow your skills and stay updated with the latest trends in the tech world.
                    </p>
                    <p className="text-lg md:text-xl mb-4 text-justify">
                        Our blog covers a wide range of topics including web development, JavaScript frameworks, TypeScript, React, backend technologies, and best practices in software engineering. We also share tips on productivity, career development, and personal experiences from the tech industry.
                    </p>
                    <p className="text-lg md:text-xl mb-4 text-justify">
                        We believe in open-source values and often publish code snippets, GitHub repositories, and step-by-step guides to help you build real-world projects. Whether you are a beginner or an experienced developer, you'll find something useful here.
                    </p>
                    <p className="text-lg md:text-xl mb-4 text-justify">
                        Join our community by subscribing to our newsletter or following us on social media. We encourage you to leave comments, ask questions, and share your own experiences. Your feedback helps us improve and create content that matters to you.
                    </p>
                    <p className="text-lg md:text-xl text-justify">
                        Thank you for visiting our About page. We hope you enjoy exploring our content and join us on this journey of learning and discovery!
                    </p>
                </div>
                {/* Right: Image */}
                <div className="flex-shrink-0 w-full sm:w-96 md:w-[28rem] lg:w-[32rem]">
                    <img
                        src="https://cdni.iconscout.com/illustration/premium/thumb/blog-writing-illustration-download-in-svg-png-gif-file-formats--management-writer-manager-advertisement-meetup-pack-people-illustrations-4912116.png"
                        alt="About us"
                        className="rounded-lg shadow-lg w-full object-cover"
                    />
                </div>
            </div>
        </main>
    );
}