
import Cards from "../Cards/Cards"
import PortfolioButton from '../Portfolio Button/PortfolioButton'
import SearchBar from "../SearchBar/SearchBar"
import StockTicker from "../Stock Ticker/StockTicker"
import './Mainsdash.css'


// import { cardsData } from "../../Data/Data"



const Maindash = () => {
  
  return (
    <>
    <div className="flex">
    <h1 className='heading text-3xl font-normal mt-16 ml-10 underline underline-offset-8'>Dashboard</h1>
    <span className="mt-16 ml-44"><SearchBar/></span>
    </div>
      <div className="Maindash">
        <div className="portfolioButton flex gap-4 ml-10 mt-10">
            <PortfolioButton name="New Portfolio" sign="+"/>
            <PortfolioButton name="Current Portfolio" sign=""/>
        </div>
        <div className="cards flex gap-4 ml-10 mt-10 ">
            <Cards/>
        </div>
        <div className="transctions mt-6 ml-10 flex gap-7">
            <StockTicker/>
            <StockTicker/>
        </div>
      </div>
    </>
  )
}

export default Maindash;
