import path from 'path'

import { payloadCloud } from '@payloadcms/plugin-cloud'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { webpackBundler } from '@payloadcms/bundler-webpack'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { buildConfig } from 'payload/config'

import Users from './collections/Users'


import { cloudStorage } from '@payloadcms/plugin-cloud-storage'

import { s3Adapter } from '@payloadcms/plugin-cloud-storage/s3'
import { getGenerateURL } from './adapters/generateFileUrl'
// import { Collection } from 'mongodb'
import Media  from './collections/Media'
import Cloth from './collections/Cloth'
import ClothesCollection from './collections/Collection'
import Carousel from './collections/carousel'





const adapter = s3Adapter({
  config: {
    credentials: {
      accessKeyId: process.env.R2_ACCESS_KEY_ID,
      secretAccessKey: process.env.R2_SECRET_ACCESS_KEY
    },
    endpoint : "https://56a96cd9b44059ba1faf3cac3e16caa5.r2.cloudflarestorage.com",
    region: process.env.R2_REGION
  },
  bucket: process.env.R2_BUCKET_NAME,

})



let uploadOptions, endpoint


if (process.env.R2_ENDPOINT != "") {
  endpoint = process.env.R2_ENDPOINT
}


// if (process.env.PAYLOAD_PUBLIC_CLOUD_STORAGE_ADAPTER === 's3') {
//   uploadOptions = {
//     useTempFiles: true,
//   }

// }
export default buildConfig({
  admin: {  
    user: Users.slug,
    bundler: webpackBundler(),
  },
  editor: lexicalEditor({}),
 cors:"*", 

  collections: [Users,Cloth,ClothesCollection,Media, Carousel],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
  plugins: [payloadCloud(),cloudStorage({
    enabled: true,
    collections: {
      'media': {
        disablePayloadAccessControl : true, 
        disableLocalStorage:true,
        generateFileURL : getGenerateURL(process.env.R2_ENDPOINT),
        adapter: adapter, 
      },
    },
  }),],
  db: mongooseAdapter({
    url: process.env.DATABASE_URI,
  }),
  
})