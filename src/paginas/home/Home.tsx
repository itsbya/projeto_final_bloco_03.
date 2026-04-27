import { Link } from "react-router-dom";

function Home() {
    return (
        <>
            <div className="bg-slate-700 flex justify-center">
                <div className='container grid grid-cols-2 text-white'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className='text-5xl font-bold'>Seja bem vindo!</h2>
                        <p className='text-xl'>Aqui você encontra os melhores medicamentos e produtos de saúde!</p>

                        <div className="flex justify-around gap-4">
                            <Link to="/produtos" className='rounded bg-white text-slate-800 py-2 px-4'>Ver produtos</Link>
                        </div>
                    </div>

                    <div className="flex justify-center ">
                        <img src="https://ik.imagekit.io/o02kjfcyy/produtos_farmacia/home.webp" alt="Imagem Home" className='w-2/3' />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
