
import Register from "../components/Register";

interface RegisterPageProps {
    onLogin: () => void;
}

function RegisterPage({ onLogin }: RegisterPageProps) {
    return (
        <Register onLogin={onLogin} />
    );
}

export default RegisterPage;
