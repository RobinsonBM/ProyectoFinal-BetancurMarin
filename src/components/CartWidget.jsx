import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import '../styles/components/CartWidget.scss';

function CartWidget() {
  return (
    <div className="carButton">
      <FontAwesomeIcon className="carShopping" icon={faCartShopping}/>
      <div className="noti">3</div>
    </div>
  )
}
export default CartWidget
