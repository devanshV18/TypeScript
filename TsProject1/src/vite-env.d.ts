/// <reference types="vite/client" />


type TodoItemType = {
    title: string,
    isCompleted: boolean,
    id: string
}

type WordType = {
    word: string,
    meaning: string,
    options: string[]
}

type StateType = {
    loading: boolean,
    result: string[],
    error?: string,
    words: WordType[]
}