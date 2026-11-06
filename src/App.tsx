
import { useState } from "react";

import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
    const [currentPage, setCurrentPage] = useState<"login" | "register">("login");

    return (
        <>
            {currentPage === "login" ? (
                <LoginPage
                    onRegister={() => setCurrentPage("register")}
                />
            ) : (
                <RegisterPage
                    onLogin={() => setCurrentPage("login")}
                />
            )}
        </>
    );
}

export default App;
