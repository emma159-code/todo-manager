
import Login from "../components/Login";

interface LoginPageProps {
    onRegister: () => void;
}

function LoginPage({ onRegister }: LoginPageProps) {
    return (
        <Login onRegister={onRegister} />
    );
}

export default LoginPage;
