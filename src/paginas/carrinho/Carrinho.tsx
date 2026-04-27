import { useEffect, useState } from "react";
import type Produto from "../../models/Produto";
import { Trash } from "@phosphor-icons/react";

function Carrinho() {
    const [itens, setItens] = useState<Produto[]>([]);

    useEffect(() => {
        const carrinho = JSON.parse(localStorage.getItem('carrinho') || '[]');
        setItens(carrinho);
    }, []);

    function removerItem(index: number) {
        const novoCarrinho = [...itens];
        novoCarrinho.splice(index, 1);
        setItens(novoCarrinho);
        localStorage.setItem('carrinho', JSON.stringify(novoCarrinho));
    }

    function limparCarrinho() {
        setItens([]);
        localStorage.removeItem('carrinho');
    }

    const total = itens.reduce((acc, item) => acc + item.preco, 0);

    return (
        <div className="container mx-auto my-8 p-4">
            <h1 className="text-4xl font-bold mb-8 text-center text-slate-800">Seu Carrinho</h1>
            
            {itens.length === 0 ? (
                <p className="text-center text-xl text-slate-600">O carrinho está vazio.</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="md:col-span-2 space-y-4">
                        {itens.map((item, index) => (
                            <div key={index} className="flex items-center justify-between border p-4 rounded-lg bg-white shadow-sm">
                                <div className="flex items-center gap-4">
                                    <img src={item.foto} alt={item.nome} className="w-16 h-16 object-contain" />
                                    <div>
                                        <h2 className="font-bold text-lg">{item.nome}</h2>
                                        <p className="text-slate-600">{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(item.preco)}</p>
                                    </div>
                                </div>
                                <button onClick={() => removerItem(index)} className="text-red-500 hover:text-red-700 transition">
                                    <Trash size={24} />
                                </button>
                            </div>
                        ))}
                    </div>
                    
                    <div className="bg-slate-100 p-6 rounded-lg h-fit space-y-6">
                        <h2 className="text-2xl font-bold border-b pb-4">Resumo</h2>
                        <div className="flex justify-between text-xl font-bold">
                            <span>Total</span>
                            <span>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(total)}</span>
                        </div>
                        <button className="w-full bg-teal-500 text-white py-3 rounded-lg font-bold hover:bg-teal-600 transition">
                            Finalizar Compra
                        </button>
                        <button onClick={limparCarrinho} className="w-full text-slate-600 hover:underline">
                            Limpar Carrinho
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Carrinho;
