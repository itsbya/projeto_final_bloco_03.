import { Link } from "react-router-dom";
import ListaProdutos from "../../componentes/produtos/ListaProdutos";

function Home() {
    return (
        <>
            <div className="bg-slate-800 flex justify-center">
                <div className='container grid grid-cols-1 md:grid-cols-2 text-white px-4 py-8 md:py-16'>
                    <div className="flex flex-col gap-6 items-center md:items-start justify-center text-center md:text-left">
                        <h2 className='text-5xl font-bold leading-tight'>Seja bem vindo!</h2>
                        <p className='text-xl opacity-90'>Aqui você encontra os melhores medicamentos e produtos de saúde para você e sua família!</p>

                        <div className="flex gap-4">
                            <Link to="/produtos" className='rounded-lg bg-white text-slate-800 py-3 px-6 font-semibold hover:bg-slate-100 transition-colors shadow-lg'>
                                Ver produtos
                            </Link>
                        </div>
                    </div>

                    <div className="flex justify-center mt-8 md:mt-0">
                        <img 
                            src="https://ik.imagekit.io/o02kjfcyy/produtos_farmacia/home.webp" 
                            alt="Imagem Home" 
                            className='w-full max-w-md drop-shadow-2xl rounded-2xl transform hover:scale-105 transition-transform duration-300' 
                        />
                    </div>
                </div>
            </div>

            <div className="bg-slate-50 py-12">
                <div className="container mx-auto px-4">
                    <h3 className="text-3xl font-bold text-slate-800 mb-8 border-b-4 border-teal-500 w-fit pb-2">
                        Nossos Destaques
                    </h3>
                    <ListaProdutos />
                </div>
            </div>
        </>
    );
}

export default Home;
