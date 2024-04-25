import NavBar from "../components/nav"
import ShowPdf from "./components/view_pdf"

const Home = () => {

    return (
        <>
            <NavBar
            btn1Text="Home"
            btn1Url="/"
            btn2Text="Projects"
            btn2Url="#"
            btn3Text="Reach out"
            btn3Url="#"
            />
            <ShowPdf />
        </>
    )
}



export default Home