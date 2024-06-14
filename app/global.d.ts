import { Descendant } from "slate"
import { MongoClient } from "mongodb";

declare global {
    var _mongoClientPromise: Promise<MongoClient>
}

interface User {
    _id: string,
    email: string,
    password: string
    createdAt: Date
    lastModified: Date
}

export type Note = {
    _id: string,
    content: string,
    title: string
    createdAt: Date
    lastModified: Date
    email: string
}