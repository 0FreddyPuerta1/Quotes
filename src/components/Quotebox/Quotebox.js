import './Quotebox.css';
import quotes from '../../assets/quotes.json'
import colors from '../../assets/colors.json'
import Button from '../Button/Button';

const Quotebox = ({i, next}) => {
    const newQuote = quotes[Math.floor(i*quotes.length)]["quote"]
    const authorOfQuote = quotes[Math.floor(i*quotes.length)]["author"]
    const color = colors[Math.floor(i*colors.length)]["color"]
    return(
        <div className={`Quotebox`}>
            <p className={`${color}-lblcolor`}>{`"${newQuote}"`}</p>
            <label className={`${color}-lblcolor`}>{`-${authorOfQuote}`}</label>
            <Button i={i} next={next}/>
        </div>
    );

}


export default Quotebox;