import axios from 'axios'

export const getAllPersons = () => {
    return axios.get("http://localhost:3001/api/persons")
        .then((response) => {
            return response.data
        })
}

export const createPerson = (personToAddToState) => {
    return axios.post("http://localhost:3001/api/persons", personToAddToState)
        .then((response) => {
            return response.data
        })
}

export const deletePerson = (id) => {
    return axios.delete(`http://localhost:3001/api/persons/${id}`)
        .then((response) => {
            return response.data
        })
}

export const updatePersonNumber = (id, personToAddToState) => {
    return axios.put(`http://localhost:3001/persons/${id}`, personToAddToState)
        .then((response) => {
            return response.data
        })
}