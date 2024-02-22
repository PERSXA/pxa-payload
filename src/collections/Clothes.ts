import { CollectionConfig } from "payload/types";


const Clothes :CollectionConfig = {
    slug:"clothes",

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
            name : "description",
            type : "textarea",   
            label : "Description"
        },
        {
            name: 'cover_image', 
            type: 'upload',
            relationTo: "users",
            label: 'Cover Image',
        },

        {
            name:"images",
            type:"array",
            label:"Images",
            minRows:1,
            maxRows:100,
            fields:[
                {
                    name:"image",
                    type:"upload",
                    relationTo:"users",
                    label:"Image"
                }
            ]
        }
        
    ]

}
export default Clothes