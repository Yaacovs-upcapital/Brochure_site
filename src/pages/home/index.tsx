import "./home.css"

import { ReactComponent as LogoWhite } from "../../assets/icons/Logo-White-App.svg"

const Home = () => {
    return (
        <div className="page-container">
            <div className="home-jumbotron">
                <div className="home-jumbotron-overlay"></div>

                <div className="jumbotron-content">
                    <div>
                        <LogoWhite />
                    </div>
                    <div>
                        <h1>עולם חדש של תנאי תשלום</h1>
                        <h1> לטובת כל הצדדים</h1>
                    </div>
                    
                </div>
            </div>
        </div>
    )
};

export default Home;
