import clientPromise from '../../lib/mongodb.ts'

export default async function handler(req, res){
    const client = await clientPromise
    const db = client.db('portfolio_website')
    const projectName = req.query.project
    
    console.log(projectName)
    
    if(projectName){
        const project = await db.collection('projects').findOne({"projectId" : projectName}) 
        res.json({status: 200, data: project})
    } else {
        const projects = await db.collection('projects').find().toArray()
        res.json({status: 200, data: projects})
    }
}