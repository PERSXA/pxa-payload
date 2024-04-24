import { CollectionConfig } from 'payload/types';

const Media: CollectionConfig = {
  slug: 'media',
  access:{
      read:({req})=>true
  },
  upload: true,

  fields: [
      {
        name: 'Title',
        type: 'text',
      },
  ],
};

export default Media
