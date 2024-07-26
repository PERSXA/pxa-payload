import { CollectionConfig } from "payload/types";


const ClothesCollection: CollectionConfig = {
  slug: "clothescollection",

  access: {
    read: ({ req }) => true,
  },
  admin: {
    listSearchableFields: ["name", "slug"],
    useAsTitle: "name",
  },
  fields: [
    {
      name: "name",
      type: "text",
      label: "Name",
    },
    {
      name: "slug",
      type: "text",
      unique: true,
      label: "Slug",
    },
    {
      name: "cover_image",
      type: "upload",
      relationTo: "media",
      label: "Cover Image",
    },
    {
      name: "description",
      label: "Description",
      type: "textarea",
    },
    {
      name: 'short_description',
      type: 'text',
      label:'Short Desciption'
    }
  ],
};
export default ClothesCollection