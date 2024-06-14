import { Note, User } from "../global"

export async function getNotesByUser(email: string) {
    const res = await fetch('/api/notes')
    const data = await res.json()

    if (data && data.notes) {
        return data.notes.filter((note: Note) => {
            return note.email == email
        })
    }
    return []
}

export async function getNoteById(id: string) {
    const res = await fetch('/api/notes')
    const data = await res.json()

    if (data && data.notes) {
        return data.notes.filter((note: Note) => {
            return note._id == id
        })
    }
    return []
}

export async function createNote(email: string) {
    let randomId = (() => {
        const characters = '0123456789abcdef';
        let result = '';
        const charactersLength = characters.length;
        for (let i = 0; i < 24; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result
    })()
    const res = await fetch('/api/notes', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ id: randomId, title: 'untitled', content: '', createdAt: new Date(), lastModified: new Date(), email })
    })
    return { res, randomId }
}

export async function saveNote(id: string, content: string) {
    const title = JSON.parse(content)[0].text

    const res = await fetch('/api/notes', {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ id, title, content })
    })
    return res
}

export async function deleteNote(id: string) {
    const res = await fetch('/api/notes?id=' + id, {
        method: 'DELETE',
    })
    return res
}