import React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import  data from '../../public/Data.json';

export default function FeaturedCard(){

    const [dataproject, setDataproject] = React.useState();

    const listProjects = data.map(project => (
        <div key={project.id} className='card'>
            <img src={project.imageUrl} alt={project.title} />
            <section className='cardInfo'>
                <h2>{project.title}</h2>
                <p>{project.bio}</p>
                <Link to={`/project/${project.id}`} className='color-link'>
                    View Details
                </Link>
            </section>
        </div>  
    ));

    useEffect(() => {
        setDataproject(listProjects)
    }, [])
    
    
    return(
        <main id='featured' className='featured mainMargin'>
            <article className='centered'>
                <h2>Featured Projects</h2>
                <section>{dataproject}</section>
            </article>
        </main>
    )

}