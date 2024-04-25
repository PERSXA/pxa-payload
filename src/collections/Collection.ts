import { CollectionConfig } from "payload/types";


const ClothesCollection :CollectionConfig = {
    slug:"clothescollection",

    access:{
        read:({req})=>true
    },
    admin:{
        listSearchableFields:["name","slug"],
        useAsTitle:"name"
    },
    fields:[
        {
            name:"name",
            type:"text",
            label : "Name",
        },
        {
            name:"slug",
            type:"text",
            unique:true,
            label:"Slug"
        },

        {
            name : "description",
            label : "Description",
            type : "textarea"   
        },
        {
            name: 'coverImage', 
            label: 'Cover Image',
            type: 'upload',
            relationTo: "users",
        },

              
    ]

}
export default ClothesCollection