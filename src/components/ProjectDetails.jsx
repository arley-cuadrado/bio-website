import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../../public/Data.json';

export default function ProjectDetails() {
    const { projectId } = useParams();
    const project = data.find((p) => p.id === projectId);

    return(
        <div id='project-details' className='mainMargin colorFullWidth'>
            {project ? (
                <div>
                    <section className='centered content-centered'>
                        <h2>{project.title}</h2>
                        <p>{project.bio}</p>
                        {/* Renderiza aquí más detalles del proyecto según sea necesario */}
                    </section>    
                </div>
            ) : (
                <p className='centered content-centered'>Project not found {projectId} 😔 <br/> Working to fix it...</p>
            )}

            
        </div>
    )

}