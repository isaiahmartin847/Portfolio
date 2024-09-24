import NavBar from "../components/nav"
import DownloadBtn from "./components/download-btn"
import ShowPdf from "./components/view_pdf"

const Home = () => {

    return (
        <>
            <NavBar
            btn1Text="Home"
            btn1Url="/"

            />
            <ShowPdf />
        </>
    )
}



export default Home