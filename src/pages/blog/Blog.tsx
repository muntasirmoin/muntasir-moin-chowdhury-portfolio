/* eslint-disable @typescript-eslint/no-explicit-any */
import { blogPosts } from "./blogData";

const Blog = () => {
  return (
    <section
      id="blog"
      className="px-4 py-20 md:px-12 text-white"
      style={{
        background: `linear-gradient(
          135deg,
          rgba(8, 13, 32, 0.8),
          rgba(5, 8, 24, 0.9),
          rgba(23, 37, 84, 0.8)
        )`,
      }}
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Blog & Articles
        </h2>
        <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full mb-12" />

        <div className="grid gap-8 md:grid-cols-2">
          {blogPosts.map((post: any) => (
            <div
              key={post.id}
              className="group relative bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl p-6 transition-all duration-300 shadow-lg hover:shadow-blue-500/10 backdrop-blur-lg"
            >
              {/* Blog Title */}
              <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300 mb-2">
                {post.title}
              </h3>

              {/* Date */}
              <p className="text-sm text-gray-400 mb-3">{post.date}</p>

              {/* explain */}
              <p className="text-gray-300 leading-relaxed mb-6">
                {post.explain}
              </p>

              {/* Read More Link */}
              <a
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-blue-400 font-medium hover:underline hover:text-blue-300 transition"
              >
                Read More
                <span className="translate-x-0 group-hover:translate-x-1 transition-transform duration-300">
                  →
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
