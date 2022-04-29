import './Button.css';
import '../../backgrounds.css';
import colors from '../../assets/colors.json'

const Button = ({i, next}) => {
    const color = colors[Math.floor(i*colors.length)]["color"]
    return(
        <div className={`Button ${color}-color`} onClick={next}>
            <i class="fa-solid fa-angles-right fa-xl"></i>
        </div>
    );
}


export default Button