import { SetValueFunction } from "../interfaces"

const setValue: SetValueFunction = (key: string, value: string): void => {
    sessionStorage.setItem(key, value)
}

export default setValue
