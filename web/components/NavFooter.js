import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

// Menú de Navegació de Peu de Pàgina
function NavFooter() {


    const [isActive, setActive] = useState({
        inici: "",
        presentacio: "",
        objectius: "",
        organitzacio: ""
    })

    const { inici, presentacio, objectius, organitzacio } = isActive;

    // Ruta que mostra el navegador
    const { pathname } = useRouter();

    // Aquesta funció s'executa quan el compoment s'ha acabat de muntar.
    useEffect(() => {

        // Passem la ruta actual i posem en estat actiu el botó corresponent
        switch (pathname) {
            case "/":
                setActive({
                    inici: "is-active",
                    presentacio: "",
                    objectius: "",
                    organitzacio: ""
                })
                break;
            case "/presentacio":
                setActive({
                    inici: "",
                    presentacio: "is-active",
                    objectius: "",
                    organitzacio: ""
                })
                break;
            case "/objectius":
                setActive({
                    inici: "",
                    presentacio: "",
                    objectius: "is-active",
                    organitzacio: ""
                })
                break;
            case "/organitzacio":
                setActive({
                    inici: "",
                    presentacio: "",
                    objectius: "",
                    organitzacio: "is-active"
                })
                break;
            default:
                setActive({
                    inici: "is-active",
                    presentacio: "",
                    objectius: "",
                    organitzacio: ""
                })
                break;
        }

    }, []); // Així només s'executa un cop

    return (<div className="hero-foot">
        <nav className="tabs is-boxed is-fullwidth">
            <div className="container">
                <ul>
                    <Link href="/"><li className={inici}><a>Inici</a></li></Link>
                    <Link href="/presentacio"><li className={presentacio}><a>Presentació</a></li></Link>
                    <Link href="/objectius"><li className={objectius}><a>Objectius</a></li></Link>
                    <Link href="/organitzacio"><li className={organitzacio}><a>Organització</a></li></Link>
                </ul>
            </div>
        </nav>
    </div>)

}

export default NavFooter;