import { Outlet } from "react-router-dom";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Main } from "../../components/Main";
import { useEffect, useState } from "react";
import { LoadingPage } from "../LoadingPage/LoadingPage";

export const HomePage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {isLoading
        ? <LoadingPage />
        : (
          <div>
            <Header />
            <Main />
            <Footer />
            <Outlet />
          </div>
        )}
    </div>
  );
}

export default HomePage;