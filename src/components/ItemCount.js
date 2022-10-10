import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import { injectStyle } from "react-toastify/dist/inject-style";
import '../styles/components/ItemCount.scss'

if (typeof window !== "undefined") {
    injectStyle();
}

function ItemCount(props) {
    const { personajes } = props
    const [stock, setStock] = useState(10)
    const [value, setValue] = useState(0);

    useEffect(() => {
    }, [personajes])

    const handlerLess = () => {
        if (value > 0) {
            setValue(value - 1);
        } else {
            toast.warn('No puedes restar mas de Cero', {
                icon: "🥴",
                position: "top-right",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "dark"
            });
        }

    }

    const handlerPlus = () => {
        if (value < stock) {
            setValue(value + 1);
        } else if (value === stock) {
            toast.warn('Alcanzaste el Stock maximo', {
                icon: "👌",
                position: "top-right",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "dark"
            });
        }
    }

    return (
        <div className="contenedor container pt-4">
            {personajes.map((personaje) => {
                return (
                    <>
                        <div className="item">
                            <img src={personaje.image} alt="" />
                            <h1>{personaje.name}</h1>
                            <p>Ver Detalle</p>
                            <div className="contador">
                                <FontAwesomeIcon className="icons" onClick={handlerLess} icon={faMinus} />
                                <p className="m-0"> {value} </p>
                                <FontAwesomeIcon className="icons" onClick={handlerPlus} icon={faPlus} />
                            </div>
                        </div>
                        <ToastContainer />
                    </>
                )
            })
            }
        </div>
    )
}
export default ItemCount