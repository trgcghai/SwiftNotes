import { User } from "../global";

export async function getUser(email: string) {
    const res = await fetch('/api/users');
    const data = await res.json();

    return data.users.find((user: User) => user.email == email)
} 