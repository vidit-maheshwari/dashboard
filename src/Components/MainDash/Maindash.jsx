
import Cards from "../Cards/Cards"
import PortfolioButton from '../Portfolio Button/PortfolioButton'
import './Mainsdash.css'

// import { cardsData } from "../../Data/Data"



const Maindash = () => {
  
  return (
    <>
    <h1 className='heading text-3xl font-normal mt-16 ml-10 underline underline-offset-8'>Dashboard</h1>
      <div className="Maindash">
        <div className="portfolioButton flex gap-4 ml-10 mt-10">
            <PortfolioButton/>
        </div>
        <div className="cards flex gap-4 ml-10 mt-10 ">
            <Cards/>
        </div>
        <div className="transctions">
            transctions
        </div>
      </div>
    
    </>
  )
}

export default Maindash;
