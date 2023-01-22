const db = require('../connection')
const collection = require('../collection')
const { ObjectId } = require('mongodb')
module.exports.uploadimagehelper = async (imagedata)=>{
    console.log(imagedata)
    return new Promise(async(resolve, reject) => {
        await db.get().collection(collection.imagecollection).insertOne(imagedata).then((data)=>{
            resolve(data.insertedId)
        })
        
    })

}
module.exports.getallimagehelper = async()=>{
    return new Promise(async(resolve, reject) => {
        let images = await db.get().collection(collection.imagecollection).find().toArray()
        resolve(images)
    })
}
module.exports.getimage = async(id)=>{
    return new Promise(async(resolve, reject) => {
        let images = await db.get().collection(collection.imagecollection).find({_id:ObjectId(id)}).toArray()
        console.log(images)
        resolve(images)
        
    })
}