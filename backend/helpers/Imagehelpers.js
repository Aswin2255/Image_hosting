const db = require('../connection')
const collection = require('../collection')
module.exports.uploadimagehelper = async (imagedata)=>{
    return new Promise(async(resolve, reject) => {
        await db.get().collection(collection.imagecollection).insertOne(imagedata).then((data)=>{
            resolve(data.insertedId)
        })
        
    })

}
module.exports.getallimagehelper = async()=>{
    return new Promise(async(resolve, reject) => {
        let images = await db.get().collection(collection.imagecollection).find().toArray()
        console.log(images)
        resolve(images)
    })
}