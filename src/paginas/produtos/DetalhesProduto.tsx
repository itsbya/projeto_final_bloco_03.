import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type Produto from "../../models/Produto";
import { buscar } from "../../services/Service";
import { ShoppingCart } from "@phosphor-icons/react";
import { toastAlerta } from "../../util/toastAlerta";
import { PulseLoader } from "react-spinners";

function DetalhesProduto() {
    const [produto, setProduto] = useState<Produto | null>(null);
    const { id } = useParams<{ id: string }>();

    async function buscarProduto(id: string) {
        try {
            await buscar(`/produtos/${id}`, setProduto);
        } catch (error) {
            toastAlerta('Erro ao carregar detalhes do produto', 'erro');
        }
    }

    useEffect(() => {
        if (id) {
            buscarProduto(id);
        }
    }, [id]);

    function adicionarAoCarrinho() {
        if (produto) {
            let carrinho = JSON.parse(localStorage.getItem('carrinho') || '[]');
            carrinho.push(produto);
            localStorage.setItem('carrinho', JSON.stringify(carrinho));
            toastAlerta('Produto adicionado ao carrinho!', 'sucesso');
        }
    }

    if (!produto) {
        return (
            <div className="flex justify-center py-20">
                <PulseLoader color="#0D9488" size={20} />
            </div>
        );
    }

    return (
        <div className="container mx-auto my-12 p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white p-8 rounded-2xl shadow-lg">
                <div className="flex justify-center">
                    <img src={produto.foto} alt={produto.nome} className="max-h-[500px] object-contain" />
                </div>
                <div className="flex flex-col justify-center space-y-6">
                    <span className="text-teal-600 font-bold uppercase tracking-widest">{produto.categoria?.nome}</span>
                    <h1 className="text-4xl font-bold text-slate-800">{produto.nome}</h1>
                    <p className="text-3xl font-bold text-slate-900">
                        {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(produto.preco)}
                    </p>
                    <p className="text-slate-600 text-lg leading-relaxed">
                        Este é um produto de alta qualidade disponível em nossa farmácia. 
                        Garantimos a procedência e a eficácia de todos os itens em nosso estoque.
                    </p>
                    <button 
                        onClick={adicionarAoCarrinho}
                        className="flex items-center justify-center gap-3 bg-teal-500 text-white py-4 px-8 rounded-xl font-bold text-xl hover:bg-teal-600 transition shadow-md"
                    >
                        <ShoppingCart size={32} /> Adicionar ao Carrinho
                    </button>
                </div>
            </div>
        </div>
    );
}

export default DetalhesProduto;
