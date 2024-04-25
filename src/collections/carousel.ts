import { Collection, CollectionInfo } from "mongodb";
import { CollectionConfig } from "payload/types";

const Carousel: CollectionConfig = {
    slug: 'Carousel',
    access: {
        read: () => true
    },
    fields: [
        {
            name: "covermedia",
            type: "upload",
            label: "Cover Media",   
            relationTo: "media"
        },
        {
            name: "title",
            type: "text",
            label: "Title"
        },
        {  
            name: "link",
            type: "text",
            label: "Link"
        }
        , 
        {  
            name: 'description',
            type: 'textarea',
            label: 'Description'
        }  
    ]
}

export default Carousel