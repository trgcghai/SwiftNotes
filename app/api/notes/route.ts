import { Note } from '@/app/global';
import clientPromise from '@/app/middleware/connectDB';
import { ObjectId } from 'mongodb';
import email from 'next-auth/providers/email';
import { NextURL } from 'next/dist/server/web/next-url';
import { TRACE_OUTPUT_VERSION } from 'next/dist/shared/lib/constants';
import { NextRequest } from 'next/server';
import z from 'zod'

const noteSchema = z.object({
    id: z.string(),
    title: z.string(),
    createdAt: z.date(),
    lastModified: z.date(),
    email: z.string(),
    content: z.string()
})

export async function GET(req: Request, res: Response) {
    try {
        const client = await clientPromise;
        const db = client.db('notedb');
        const notes = await db.collection('notes').find({}).toArray();
        return Response.json({ notes })
    } catch (error) {
        console.error(error);
        return Response.json({ message: 'Internal server error' })
    }
}

const updateNote = noteSchema.omit({ createdAt: true, email: true, lastModified: true })
export async function PUT(req: Request, res: Response) {
    try {
        const client = await clientPromise
        const db = client.db('notedb')
        const draftData = await req.json()
        const validatedData = updateNote.parse(draftData)
        const { id, title, content } = validatedData
        const insertRes = await db.collection('notes').updateOne({ _id: new ObjectId(id) }, { '$set': { title, content, lastModified: new Date() } })
        return Response.json({ insertRes })
    } catch (error) {
        console.error(error);
        return Response.json({ message: 'Internal server error' })
    }
}

const createNote = noteSchema.omit({})
export async function POST(req: Request, res: Response) {
    try {
        const client = await clientPromise
        const db = client.db('notedb')
        let draftData = await req.json()
        draftData = {
            ...draftData,
            createdAt: new Date(draftData.createdAt),
            lastModified: new Date(draftData.lastModified)
        }
        const validatedData = createNote.parse(draftData)
        const { id, email, title, content, createdAt, lastModified } = validatedData
        const result = await db.collection('notes').insertOne({ _id: new ObjectId(id), email, title, content, createdAt, lastModified })
        return Response.json({ result })
    } catch (error) {
        console.error(error);
        return Response.json({ message: 'Internal server error' })
    }
}

export async function DELETE(req: NextRequest, res: Response) {
    try {
        const searchParams = req.nextUrl.searchParams
        const id = searchParams.get('id') || ''
        const client = await clientPromise
        const db = client.db('notedb')
        const result = await db.collection('notes').deleteOne({ _id: new ObjectId(id) })
        return Response.json({ result })
    } catch (error) {
        console.error(error);
        return Response.json({ message: 'Internal server error' })
    }
}
