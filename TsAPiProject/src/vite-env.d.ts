/// <reference types="vite/client" />

type langType = {
    name: string,
    code: string
}

type LangTypeCode = "ja"|"hi"|"es"|"fr"

type WordType = {
    word: string,
    meaning: string,
    options: string[]
}

interface StateType{
    loading: boolean,
    result: string[],
    error?: string,
    words: WordType[]
}

type translationType = {
    translations: {
        text: string
    }[]
}