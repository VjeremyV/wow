import { useState } from 'react'
import axios, { AxiosError } from 'axios'

export default function Login() {
    const [data, setData] = useState({
        email: '',
        password: '',
        remember: false,
    })
    const [errors, setErrors] = useState<Record<string, string[]>>({})
    const [processing, setProcessing] = useState(false)

    const submit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setProcessing(true)
        setErrors({})

        try {
            await axios.post('/login', data)
            window.location.href = '/dashboard'
        } catch (error) {
            const axiosError = error as AxiosError<{ errors: Record<string, string[]> }>

            if (axiosError.response?.status === 422) {
                setErrors(axiosError.response.data.errors)
            } else {
                alert('Une erreur est survenue.')
            }
        } finally {
            setProcessing(false)
        }
    }

    return (
        <div className="max-w-md mx-auto mt-10">
            <h1 className="text-2xl mb-4">Se connecter</h1>
            <form onSubmit={submit}>
                <input
                    type="email"
                    value={data.email}
                    onChange={(e) => setData({ ...data, email: e.target.value })}
                    placeholder="Email"
                />
                {errors.email && <div className="text-red-600">{errors.email[0]}</div>}

                <input
                    type="password"
                    value={data.password}
                    onChange={(e) => setData({ ...data, password: e.target.value })}
                    placeholder="Mot de passe"
                />
                {errors.password && <div className="text-red-600">{errors.password[0]}</div>}

                <button disabled={processing} type="submit">
                    Connexion
                </button>
            </form>
        </div>
    )
}
