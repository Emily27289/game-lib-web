import { redirect } from "next/navigation";


const API_URL ="http://localhost:8080/api/game";

export async function getGames(){
    const response = await fetch(API_URL);
    const data = await response.json();
    return data;
}

export async function createGame(initialState: any, form: FormData){
    const body = {
        name: form.get('name'),
        category: form.get('category'),
        publisher: form.get('publisher'),
        size: form.get('size'),
        releaseDate: form.get('releaseDate')
    }

    const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    });
    if (!response.ok) {
        const errors = await response.json();
        return{
            values:{
                name: form.get('name'),
                category: form.get('category'),
                publisher: form.get('publisher'),
                size: form.get('size'),
                releaseDate: form.get('releaseDate'),
            },
            errors:{
                name: errors.find(error => error.field === 'name')?.message,
                category: errors.find(error => error.field === 'category')?.message,
                publisher: errors.find(error => error.field === 'publisher')?.message,
                size: errors.find(error => error.field ==='size')?.message,
                releaseDate: errors.find(error => error.field ==='releaseDate')?.message,
            }
        }
    }

    redirect('/library');
}
