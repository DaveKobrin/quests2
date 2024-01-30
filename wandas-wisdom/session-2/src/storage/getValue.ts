import {GetValueFunction} from "../interfaces";

const getValue: GetValueFunction = (key: string): string => {
    const storedValue: string = sessionStorage.getItem(key) as string

    return storedValue
}

export default getValue
