import { useEffect, useState } from "react";
import { DNA } from "react-loader-spinner";
import { buscar } from "../../services/Service";
import type Produto from "../../models/Produto";
import CardProduto from "./CardProduto";

function ListaProdutos() {
    const [produtos, setProdutos] = useState<Produto[]>([]);

    async function buscarProdutos() {
        try {
            await buscar('/produtos', setProdutos);
        } catch (error: any) {
            alert('Erro ao buscar produtos');
        }
    }

    useEffect(() => {
        buscarProdutos();
    }, [produtos.length]);

    return (
        <>
            {produtos.length === 0 && (
                <div className="flex justify-center py-10">
                    <DNA visible={true} height="200" width="200" ariaLabel="dna-loading" />
                </div>
            )}
            <div className="flex justify-center w-full my-4">
                <div className="container flex flex-col">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {produtos.map((produto) => (
                            <CardProduto key={produto.id} produto={produto} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default ListaProdutos;
