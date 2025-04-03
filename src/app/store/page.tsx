"use client";

import { createGame } from "../actions/game-actions";
import NavBar from "@/components/nav-bar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, Check } from "lucide-react";
import Link from "next/link";
import { useActionState } from "react";

const EGameCategories = {
    ACTION: 0,
    FPS: 1,
    RPG: 2,
    MMORPG: 3,
    SPORTS: 4,
    CAR: 5
};

const initialState = {
    values: {
        name: "",
        category: "",
        publisher: "",
        size: "",
        releaseDate: "",
    },
    errors: {
        name: "",
        category: "",
        publisher: "",
        size: "",
        releaseDate: "",
    }
};

export default function StorePage() {
    const [state, formAction, pending] = useActionState(
        async (prevState: typeof initialState, formData: FormData) => {
            return await createGame(prevState, formData);
        },
        initialState
    );

    return (
        <>
            <NavBar active="Store" />

            <main className="flex justify-center bg-emerald-600 min-h-screen">
                <div className="bg-emerald-900 min-w-2/3 m-6 p-6 rounded min-h-1/4">
                    <h2 className="text-lg font-bold">Store</h2>
                    <div>
                        <form action={formAction}>
                            <div className="mb-4 mt-4">
                                <Input 
                                    placeholder="Nome do Jogo" 
                                    name="name" 
                                    aria-invalid={!!state?.errors.name}
                                    defaultValue={state?.values.name} 
                                    className="mb-1"
                                />
                                <span className="text-sm text-destructive">
                                    {state?.errors.name}
                                </span>
                            </div>

                            <div className="mb-4">
                                <Select 
                                    name="category" 
                                    defaultValue={state?.values.category}
                                >
                                    <SelectTrigger className="w-full mb-1">
                                        <SelectValue placeholder="Selecione a categoria" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="0">Ação</SelectItem>
                                        <SelectItem value="1">FPS</SelectItem>
                                        <SelectItem value="2">RPG</SelectItem>
                                        <SelectItem value="3">MMORPG</SelectItem>
                                        <SelectItem value="4">Esportes</SelectItem>
                                        <SelectItem value="5">Corrida</SelectItem>
                                    </SelectContent>
                                </Select>
                                <span className="text-sm text-destructive">
                                    {state?.errors.category}
                                </span>
                            </div>

                            <div className="mb-4">
                                <Input 
                                    placeholder="Desenvolvedora" 
                                    name="publisher" 
                                    aria-invalid={!!state?.errors.publisher}
                                    defaultValue={state?.values.publisher}
                                    className="mb-1"
                                />
                                <span className="text-sm text-destructive">
                                    {state?.errors.publisher}
                                </span>
                            </div>

                            <div className="mb-4">
                                <Input 
                                    placeholder="Tamanho (GB)" 
                                    name="size" 
                                    type="number"
                                    aria-invalid={!!state?.errors.size}
                                    defaultValue={state?.values.size}
                                    className="mb-1"
                                />
                                <span className="text-sm text-destructive">
                                    {state?.errors.size}
                                </span>
                            </div>

                            <div className="mb-4">
                                <Input 
                                    placeholder="Data de Lançamento" 
                                    name="releaseDate" 
                                    type="date"
                                    aria-invalid={!!state?.errors.releaseDate}
                                    defaultValue={state?.values.releaseDate}
                                    className="mb-1"
                                />
                                <span className="text-sm text-destructive">
                                    {state?.errors.releaseDate}
                                </span>
                            </div>

                            <div className="flex justify-end gap-2 mt-4">
                                <Button asChild variant="outline">
                                    <Link href="/games">
                                        <ArrowLeft className="mr-2 h-4 w-4"/>Cancelar
                                    </Link>
                                </Button>
                                <Button disabled={pending}>
                                    <Check className="mr-2 h-4 w-4"/>
                                    {pending ? "Enviando..." : "Cadastrar"}
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        </>
    );
}