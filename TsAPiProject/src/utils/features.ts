import axios from "axios";
import { generate } from "random-words";
import _ from "lodash";

const generateMCQ = (
    meaning: {Text:string}[],
    index: number
): string[] => {
    const correctAns:string = meaning[index].Text
    const allMeaningExceptForCorrect = meaning.filter((i) => i.Text !== correctAns)
    const incorrectOptions: string[] = _.sampleSize(allMeaningExceptForCorrect, 3).map((i) => i.Text)

    const mcqOptions = _.shuffle([...incorrectOptions, correctAns])

    return mcqOptions
}

export const translateWords = async(params: LangTypeCode) => {

    try {

        //originally words is either string or string[] but to use map we forced type assertion of string[]
        const words = (generate(8) as string[]).map((word:string) => ({
            Text: word
        }))
        // console.log("Words", words) //array of objs -> eact index has a random word
        const response = await axios.post("https://microsoft-translator-text-api3.p.rapidapi.com/translate", words, 
        {
            params: {
                to: params,
                from: 'en',
                textType: 'plain'
            },
            headers: {
                'x-rapidapi-key': 'a1c08cbea0mshd940eed59c00fe5p1164ddjsn60d810de5dd3',
                'x-rapidapi-host': 'microsoft-translator-text-api3.p.rapidapi.com',
                'Content-Type': 'application/json'
            },
        })
        
        const received:translationType[] = response.data

        const arr:WordType[] = received.map((item, index) => {

            const options: string[] = generateMCQ(words, index)

            return{
                word: item.translations[0].text,
                meaning: words[index].Text,
                options: options
            }
        })

        return arr
    } 
    catch (error) {
        console.log(error)
        throw new Error("Something Went wrong")
    }
}

export const countMatchingElements = (arr1: string[], arr2:string[]): number => {
    if(arr1.length !== arr2.length){
        throw new Error("Unequal Arrays")
    }

    let matchingCount = 0

    for(let i = 0; i < arr1.length; i++){
        if(arr1[i] === arr2[i]) matchingCount++
    }

    return matchingCount
}