import { CollectionConfig } from "payload/types";


const Cloth :CollectionConfig = {
    slug:"cloth",

    access:{
        read:({req})=>true
    },
    fields:[
        {
            name:"name",
            type:"text",
            label : "Name"
        },
        {
            name:"slug",
            type:"text",
            unique:true,
            label:"Slug"
        },
        
        {
            name:"notes",
            type:"text",
            label:"Notes"
        },
        {
            name:"hash",
            type:"text",
            label:"Hash"
        },

        {
            name: 'cover_image', 
            type: 'upload',
            relationTo: "media",
            label: 'Cover Image',
        },

        {
            name:"images",
            type:"array",
            label:"Images",
            minRows:1,
            maxRows:10,
            fields:[
                {
                    name:"image",
                    type:"upload",
                    relationTo:"media",
                    label:"Image"
                }
            ]
        }
    ]

}
export default Cloth