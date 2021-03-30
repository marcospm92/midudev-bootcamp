import axios from 'axios'

export const getAllPersons = () => {
    return axios.get("http://localhost:3001/persons")
        .then((response) => {
            return response.data
        })
}

export const createPerson = (personToAddToState) => {
    return axios.post("http://localhost:3001/persons", personToAddToState)
        .then((response) => {
            return response.data
        })
}