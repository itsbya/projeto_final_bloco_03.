import { useEffect, useState } from "react";
import { PulseLoader } from "react-spinners";
import { buscar } from "../../services/Service";
import CardCategoria from "./CardCategoria";
import type Categoria from "../../models/Categoria";

function ListaCategorias() {
    const [categorias, setCategorias] = useState<Categoria[]>([]);

    async function buscarCategorias() {
        try {
            await buscar('/categorias', setCategorias);
        } catch (error: any) {
            alert('Erro ao buscar categorias');
        }
    }

    useEffect(() => {
        buscarCategorias();
    }, [categorias.length]);

    return (
        <>
            {categorias.length === 0 && (
                <div className="flex justify-center py-10">
                    <PulseLoader color="#0D9488" size={20} />
                </div>
            )}
            <div className="flex justify-center w-full my-4">
                <div className="container flex flex-col">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {categorias.map((categoria) => (
                            <CardCategoria key={categoria.id} categoria={categoria} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default ListaCategorias;
