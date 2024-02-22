import { CollectionConfig } from "payload/types";


const Clothes :CollectionConfig = {
    slug:"clothes",

    access:{
        read:({req})=>true
    },
    fields:[
        {
            name:"Name",
            type:"text"
        },
        {
            name:"slug",
            type:"text",
            unique:true,
        },

        {
            name : "Description",
            type : "textarea"   
        },
        {
            name: 'Cover_Image', 
            type: 'upload',
            relationTo: "users",
        },

        {
            name:"Images",
            type:"array",
            minRows:1,
            maxRows:100,
            fields:[
                {
                    name:"Image",
                    type:"upload",
                    relationTo:"users"
                }
            ]
        }
        
    ]

}
export default Clothes