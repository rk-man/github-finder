import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";
import Alert from "./components/layout/Alert";

//Importing pages components
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import User from "./pages/User";

///IMPORTING CONTEXTS
import { GitHubProvider } from "./context/github/GitHubContext";
import { AlertContextProvider } from "./context/alert/AlertContext";

function App() {
    return (
        <GitHubProvider>
            <AlertContextProvider>
                <Router>
                    <div className="flex flex-col justify-between h-screen">
                        <NavBar />
                        <main className="container mx-auto px-3 pb-12">
                            
                            <Alert />
                            <Routes>
                                <Route path="/user/:login" element={<User />}></Route>
                                <Route path="/" element={<Home />} />
                                <Route path="/about" element={<About />} />
                                <Route
                                    path="/notfound"
                                    element={<NotFound />}
                                />
                                {/* if any of the other routes were requested -> unhandled routes, then it should go to the below route */}
                                <Route path="/*" element={<NotFound />} />
                            </Routes>
                        </main>
                        <Footer />
                    </div>
                </Router>
            </AlertContextProvider>
        </GitHubProvider>
    );
}

export default App;
