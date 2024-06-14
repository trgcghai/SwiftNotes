import clientPromise from "@/app/middleware/connectDB";

export async function GET(req: Request, res: Response) {
    try {
        const client = await clientPromise;
        const db = client.db("notedb");
        const users = await db.collection("users").find({}).toArray();
        return Response.json({ users });
    } catch (error) {
        console.error(error);
        return Response.json({ message: "Internal server error" });
    }
}

export async function PUT(req: Request, res: Response) {
    try {
        return Response.json({ message: "hello world" });
    } catch (error) {
        console.error(error);
        return Response.json({ message: "Internal server error" });
    }
}
export async function POST(req: Request, res: Response) {
    try {
        return Response.json({ message: "hello world" });
    } catch (error) {
        console.error(error);
        return Response.json({ message: "Internal server error" });
    }
}

export async function DELETE(req: Request, res: Response) {
    try {
        return Response.json({ message: "hello world" });
    } catch (error) {
        console.error(error);
        return Response.json({ message: "Internal server error" });
    }
}
