import { useEffect, useState, type ChangeEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { atualizar, buscar, cadastrar } from "../../services/Service";
import type Categoria from "../../models/Categoria";
import type Produto from "../../models/Produto";
import { toastAlerta } from "../../util/toastAlerta";

function FormProduto() {
    const [categorias, setCategorias] = useState<Categoria[]>([]);

    const [categoria, setCategoria] = useState<Categoria>({
        id: 0,
        nome: '',
        descricao: '',
    });

    const [produto, setProduto] = useState<Produto>({
        id: 0,
        nome: '',
        preco: 0,
        foto: '',
        categoria: null,
    });

    let navigate = useNavigate();
    const { id } = useParams<{ id: string }>();

    async function buscarProdutoPorId(id: string) {
        await buscar(`/produtos/${id}`, setProduto);
    }

    async function buscarCategorias() {
        await buscar('/categorias', setCategorias);
    }

    useEffect(() => {
        buscarCategorias();
        if (id !== undefined) {
            buscarProdutoPorId(id);
        }
    }, [id]);

    useEffect(() => {
        setProduto({
            ...produto,
            categoria: categoria,
        });
    }, [categoria]);

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setProduto({
            ...produto,
            [e.target.name]: e.target.value,
            categoria: categoria,
        });
    }

    function retornar() {
        navigate('/produtos');
    }

    async function gerarNovoProduto(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();

        if (id !== undefined) {
            try {
                await atualizar(`/produtos`, produto, setProduto);
                toastAlerta('Produto atualizado com sucesso', 'sucesso');
                retornar();
            } catch (error: any) {
                toastAlerta('Erro ao atualizar o Produto', 'erro');
            }
        } else {
            try {
                await cadastrar(`/produtos`, produto, setProduto);
                toastAlerta('Produto cadastrado com sucesso', 'sucesso');
                retornar();
            } catch (error: any) {
                toastAlerta('Erro ao cadastrar o Produto', 'erro');
            }
        }
    }

    const carregandoCategoria = categoria.nome === '';

    return (
        <div className="container flex flex-col items-center justify-center mx-auto">
            <h1 className="text-4xl text-center my-8">
                {id !== undefined ? 'Editar Produto' : 'Cadastrar Produto'}
            </h1>

            <form onSubmit={gerarNovoProduto} className="flex flex-col w-1/2 gap-4">
                <div className="flex flex-col gap-2">
                    <label htmlFor="nome">Nome do produto</label>
                    <input
                        value={produto.nome}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        type="text"
                        placeholder="Nome"
                        name="nome"
                        required
                        className="border-2 border-slate-700 rounded p-2"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="preco">Preço do produto</label>
                    <input
                        value={produto.preco}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        type="number"
                        step=".01"
                        placeholder="Preço"
                        name="preco"
                        required
                        className="border-2 border-slate-700 rounded p-2"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="foto">Foto do produto</label>
                    <input
                        value={produto.foto}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        type="text"
                        placeholder="Link da Foto"
                        name="foto"
                        required
                        className="border-2 border-slate-700 rounded p-2"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <p>Categoria do produto</p>
                    <select name="categoria" id="categoria" className='border p-2 border-slate-800 rounded' onChange={(e) => buscar(`/categorias/${e.currentTarget.value}`, setCategoria)}>
                        <option value="" selected disabled>Selecione uma categoria</option>
                        {categorias.map((categoria) => (
                            <option value={categoria.id} key={categoria.id}>{categoria.nome}</option>
                        ))}
                    </select>
                </div>
                <button
                    disabled={carregandoCategoria}
                    type='submit'
                    className='rounded disabled:bg-slate-200 bg-slate-400 hover:bg-slate-800 text-white font-bold w-1/2 mx-auto block py-2'
                >
                    {id !== undefined ? 'Editar' : 'Cadastrar'}
                </button>
            </form>
        </div>
    );
}

export default FormProduto;
