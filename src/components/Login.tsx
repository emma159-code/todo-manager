
import {
    useState,
    type FormEvent,
    type ChangeEvent
} from "react";

interface LoginProps {
    onRegister?: () => void;
}

interface LoginFormData {
    email: string;
    password: string;
}

function Login({ onRegister }: LoginProps) {

    const [formData, setFormData] = useState<LoginFormData>({
        email: "",
        password: ""
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        console.log("Login data:", formData);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg">

                <h1 className="text-3xl font-bold text-center mb-8">
                    Welcome back
                </h1>

                <form onSubmit={handleSubmit} className="space-y-5">

                    <div>
                        <label htmlFor="email" className="block mb-2 font-medium">
                            Email
                        </label>

                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block mb-2 font-medium">
                            Password
                        </label>

                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Enter your password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-green-500 text-white font-semibold py-3 rounded-lg hover:bg-green-600 transition"
                    >
                        Log In
                    </button>

                </form>

                <p className="text-center text-sm text-gray-600 mt-6">
                    Don't have an account?{" "}

                    <button
                        type="button"
                        onClick={onRegister}
                        className="text-green-600 font-semibold hover:underline"
                    >
                        Register
                    </button>
                </p>

            </div>
        </div>
    );
}

export default Login;
