import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroeById } from "../helpers/getHeroeById";
import { useMemo } from "react";

export const HeroPage = () => {

    const { id } = useParams();
    const heroe = useMemo(() => getHeroeById(id), [id]);

    const heroImg = `/assets/heroes/${ id }.jpg`;

    const navigate = useNavigate();

    const onReturn = () => {
        navigate(-1);
    }

    if (!heroe){
        return <Navigate to={'/'}/>
    }

    return(
        <>
            <div className="row mt-5">
                <div className="col-4">
                    <img src={heroImg} alt={ heroe.superhero} className="img-thumbnail"/>
                </div>
                <div className="col-8">
                    <h3>{heroe.superhero}</h3>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"> <b>Alter ego:</b> {heroe.alter_ego} </li>
                        <li className="list-group-item"> <b>Publisher:</b> {heroe.publisher} </li>
                        <li className="list-group-item"> <b>First apearance:</b> {heroe.first_appearance} </li>
                    </ul>

                    <h5 className="mt-3"> Characters </h5>
                    <p>{ heroe.characters}</p>

                    <button className="btn btn-primary" onClick={ onReturn }>Regresar</button>

                </div>
            </div>
        </>
    );
};