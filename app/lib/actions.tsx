'use server'
import clientPromise from "../middleware/connectDB"

export async function getUser(email: string) {
    const client = await clientPromise
    try {
        const db = client.db('notedb')
        const user = await db.collection('users').find({ email }).toArray()
        return user
    } catch (e: any) {
        return e
    }
}