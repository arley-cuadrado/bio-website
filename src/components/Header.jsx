import Image from "../assets/me.jpg"
export default function Header() {

    const user = {
        name: 'Arley',
        profession: 'Computer Engineer, Front-end developer, UX/UI Designer',
        bio: 'Diploma in Data Analytics in Business Management',
        imageUrl: '../assets/me.jpg', 
        imageSize: 50,
    }

    return(

        <header id='me' className='colorFullWidth'>
            <div>
            <img 
                className='avatar'
                src={Image}
                alt={`Potho of ${user.name}`}
                style={{
                    width: user.imageSize,
                    height: user.imageSize,
                }}
            />
            <h1>Hello, I'm {user.name}!</h1>
            <p>
                {user.profession}<br/>
                {user.bio}
            </p>
            </div>
        </header>
    
    )
        
    

}