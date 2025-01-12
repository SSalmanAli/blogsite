import Link from "next/link";
import Image from "next/image"
import { urlForImage } from "@/sanity/lib/image"

export default function Blogcard({ post }: { post: Post }) {
  return (
    <div className="p-4 sm:w-1/2 lg:w-1/3">
      <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200">
        <Image
          className="lg:h-48 md:h-36 w-full object-cover object-center"
          src={urlForImage(post.image)}
          alt={post.heading || "Blog image"}
          width={720}
          height={400}
        />
        <div className="p-6">
          <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1 uppercase">
            Blog Category
          </h2>
          <h1 className="title-font text-lg font-semibold text-gray-900 mb-3">
            {post.heading}
          </h1>
          <p className="leading-relaxed text-gray-700 mb-4">
            {post.summary.length > 100
              ? `${post.summary.substring(0, 100)}...`
              : post.summary}
          </p>
          <div className="flex items-center justify-between">
            <Link
              href={`/blog/${post.slug}`}
              className="text-indigo-500 inline-flex items-center font-medium hover:underline"
            >
              Learn More
              <svg
                className="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="M12 5l7 7-7 7" />
              </svg>
            </Link>
            <div className="text-gray-400 text-sm flex items-center space-x-4">
              <span className="inline-flex items-center">
                <svg
                  className="w-4 h-4 mr-1"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx={12} cy={12} r={3} />
                </svg>
                1.2K
              </span>
              <span className="inline-flex items-center">
                <svg
                  className="w-4 h-4 mr-1"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                </svg>
                6
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
