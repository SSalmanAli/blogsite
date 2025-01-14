import { client } from "@/sanity/lib/client"
import { urlForImage } from "@/sanity/lib/image"


export default async function page ({params:{slug}}:{params:{slug:string}}) {

const query = `*[_type == 'blog' && slug.current == "${slug}"] {
  summary,
  image,
  heading,
    content,
  author -> {name , bio , image}
} [0]`

const post = await client.fetch(query)

  return (
    <div>
    {/* Heading */}
    <div className="w-full h-fit flex justify-center items-center mt-4">
    <h1 className="font-bold text-5xl">{post.heading}</h1>
    </div>





{/* Body = image , summary , author   */}
<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto flex flex-col">
    <div className="lg:w-4/6 mx-auto">
      <div className="rounded-lg h-[530px] overflow-hidden">
        <img
          alt="content"
          className="object-cover object-center h-full w-full"
          src={urlForImage(post.image)}
        />
      </div>
      <div className="flex flex-col sm:flex-row mt-10">
        <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
          <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-10 h-10"
              viewBox="0 0 24 24"
            >
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
              <circle cx={12} cy={7} r={4} />
            </svg>
          </div>
          <div className="flex flex-col items-center text-center justify-center">
            <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
              {post.author.name}
            </h2>
            <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4" />
            <p className="text-base">
              {post.author.bio}
            </p>
          </div>
        </div>
        <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
          <p className="leading-relaxed text-lg mb-4">
          {post.summary}
          </p>
              <path d="M5 12h14M12 5l7 7-7 7" />
        </div>
      </div>
    </div>
  </div>
</section>


{/* Content */}


    </div>
  )
}

 
