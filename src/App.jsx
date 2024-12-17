import React,{Component} from "react";
import Navbar from "./Components/Navbar"
import Bg from "./Components/Bg"
import Cards from "./Components/Cards"
import "./style.css"
import cardData from "./db"
import Footer from "./Components/Footer"
import Bottom from "./Components/Bottom"
export default class App extends Component {
    render() {
        return(
            <>
                <Navbar/>
        <Bg/>
        <div style={{display:"flex", flexWrap:"wrap",gap:"20px",backgroundColor:"rgba(248,241,231,1)"}}>
                {cardData.map(data => <Cards key={data.imgSrc}
            imgSrc={data.imgSrc}
            alt={data.alt}
            head={data.head}
            content={data.content}
            btext={data.btext}
            />)}
        </div>
        <div style={{backgroundColor:"#eee8de"}}><Footer/></div>
        <Bottom/>
            </>
        )
            
    }
}