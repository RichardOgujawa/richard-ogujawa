import clientPromise from '../../lib/mongodb.ts'

export default async function handler(req, res){
    const client = await clientPromise
    const db = client.db('portfolio_website')
    const filter = req.query.filter
    
    console.log(filter)
    
    if(filter){
        const project = await db.collection('projects').find({"type" : filter}).toArray()
        res.json({status: 200, data: project})
    } else {
        const projects = await db.collection('projects').find().toArray()
        res.json({status: 200, data: projects})
    }
}