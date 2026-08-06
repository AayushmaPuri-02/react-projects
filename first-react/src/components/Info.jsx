import Profile from '../assets/profile.jpg'

export default function Info(){
    return(
        <>
        <main>
            <img src={Profile} alt='Profiel Picture'></img>
            <h1>Aayushma Puri</h1>
            <p className=''>Frontend Developer</p>
            <p className='info'>aayushmapuri.website</p>
            <div className="btns">
                <button className="email btn"><i class="fa-regular fa-envelope" style={{ color: "black" }} ></i> Email</button>
                <button className="Linkden btn"><i class="fa-brands fa-linkedin-in"></i>Linkden</button>
            </div>
        </main>
        </>
    )
}
