import { PortableTextComponents } from "@portabletext/react";

const components: PortableTextComponents = {
    block:{
        h4: ({children}) => <h4 className="text-2xl font-bold">{children}</h4>,
    },
    listItem: {
        // Ex. 1: customizing common list types
        bullet: ({children}) => <li className="list-disc marker:text-amber-300 list-inside ml-4">{children}</li>,
      },

      marks: {
        strong: ({children}) => <strong className="font-bold text-black">{children}</strong>,
      }
}

export default components;