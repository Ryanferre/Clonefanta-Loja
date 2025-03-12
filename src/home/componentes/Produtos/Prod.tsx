import axios from 'axios';
import { useEffect, useState } from 'react';
import Img2 from "../../imagens/r2.png"

type Produto= {
    ID: number;
    Valor: string;
    Nome: string;
    pathFile: string
   }

const Product= ()=>{
    const [ resBd, setresBd ]= useState< Produto[] >([])


    useEffect(()=>{

            axios.get('http://localhost:4567/Produtos')
          .then(response => {
            setresBd(response.data)  //dados retornados da API
          })
          .catch(error => {
            console.error('Erro ao buscar os produtos:', error);
          });
        }, [])

    return(
        <section className='h-full w-full flex justify-center items-center bg-orange-700'>
          <ul className='h-96 w-full p-0 bg-slate-500 overflow-scroll flex flex-col gap-6'>
            {resBd.map((prod)=>(
                <li className='m-0 flex flex-row items-center justify-between w-60' key={prod.ID}>
                    <img className='w-28' src={Img2}/>
                    <h1>{prod.Valor}</h1>
                </li>
            ))}
          </ul>
        </section>
    )
}

export default Product