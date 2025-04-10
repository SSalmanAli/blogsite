import { client } from "@/sanity/lib/client"
import Blogcard from "@/components/Blogcard";


export const revalidate = 10


export default async function Home() {

const query = `*[_type == 'blog']{
  summary , heading , image , 
    "slug" : slug.current
}`

const posts:Post[] = await client.fetch(query)

  return (
  <div>

<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
{
  posts.map((object:Post) => (
    <Blogcard post={object} key={object.slug} />
  ))
}
    </div>
  </div>
</section>


  </div>
);
}
