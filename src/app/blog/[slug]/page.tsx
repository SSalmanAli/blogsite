import components from "@/components/Custom"
import { client } from "@/sanity/lib/client"
import { urlForImage } from "@/sanity/lib/image"
import {PortableText} from '@portabletext/react'


export const revalidate = 10 // In seconds


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
    <h1 className="font-bold text-4xl">{post.heading}</h1>
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
          <div className="w-20 h-20 rounded-full inline-flex items-center justify-center  text-gray-400">
          <img
          alt="content"
          className="object-cover object-center rounded-full "
          src={urlForImage(post.author.image)}
        />
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
          <p className="leading-relaxed text-2xl mt-[20%]">
          {post.summary}
          </p>
              <path d="M5 12h14M12 5l7 7-7 7" />
        </div>
      </div>
    </div>
  </div>
</section>


{/* Content */}

<section>
  <div className="container mx-auto px-5 py-24">
    <div className="prose prose-lg max-w-none text-xl">
      <PortableText value={post.content} components={components} />
    </div>
  </div>
</section>

    </div>
  )
}


