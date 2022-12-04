import dotenv from 'dotenv'
dotenv.config()

import BunnyNet from './lib/BunnyNet.js'

const {
  BUNNY_NET_ACCESS_KEY,
  BUNNY_NET_PULLZONE,
  BUNNY_NET_STORAGEZONE_NAME,
  BUNNY_NET_STORAGEZONE_REGION,
  BUNNY_NET_STORAGEZONE_PASSWORD,
} = process.env

const bunny = new BunnyNet({
  pullzone: BUNNY_NET_PULLZONE,
  accessKey: BUNNY_NET_ACCESS_KEY,
  storageZoneName: BUNNY_NET_STORAGEZONE_NAME,
  storageZoneRegion: BUNNY_NET_STORAGEZONE_REGION,
  storageZonePassword: BUNNY_NET_STORAGEZONE_PASSWORD
})

// GET all pullzones
// console.log( await bunny.pullzone.list() )

// List files in edge storage
console.log( await bunny.storage.list('images') )
