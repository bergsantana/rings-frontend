import axios from "axios"
import { Ring } from "../interfaces/ring"

const API_HOST = import.meta.env.VITE_API_HOST

const api = axios.create({baseURL: API_HOST})

function useAPI(){
    const { token } = JSON.parse(localStorage.getItem('authUser') ?? '{}' )


    console.log(`is token ok`, token)

    const getAllRings = async () => {
        const req = await api.get('/ring', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return req.data
    }

    const createRing = async (ring: Ring) => {
        const req = await api.post(`/ring`, {
            ...ring
        }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return req
    }

    const updateRing = async (ring: Ring) => {
        const req = await api.put(`/ring`, {
            ...ring
        },
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    )
        return req
    }

    const deleteRing = async (id: number) => {
        const req = await api.delete(`/ring/${id}`, {
            headers: {
                Authorization:  `Bearer ${token}`
            }
        })
        return req
    }

    const login = async (email: string, password: string) => {
        return await api.post('/auth/login', {
            email,
            password
        })

    }

    const register = async (email: string, password: string, name: string) => {
        return await api.post('/user/register', {
            email,
            name,
            password
        })

    }
 

    return { login, register, getAllRings, createRing, updateRing, deleteRing}
}

export default {api, useAPI}