import './App.css'
import React from 'react';

import UsuarioInfo from './components/condicional/UsuarioInfo';
import ParOuImpar from './components/condicional/ParOuImpar';
import TabelaProdutos from './components/repeticao/TabelaProdutos';
import ListaAlunos from './components/repeticao/ListaAlunos';
import Familia from './components/basicos/Familia';
import FamiliaMembro from './components/basicos/FamiliaMembro';
import Aleatorio from './components/basicos/Aleatorio';
import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';
import Card from './components/layout/Card';



export default () =>
    <div className="App">
        <h1>Fundamentos React</h1>

        <div className="Cards">
        <Card titulo=" #8 - Renderização Condicional" color="#982395">
            <ParOuImpar numero={21}></ParOuImpar>
            <UsuarioInfo usuario={{nome: 'Fernado'}}/>
            <UsuarioInfo usuario={{}}/>
            <UsuarioInfo/>
        </Card>

        <Card titulo=" #7 - Desafio Repetição" color="#3A9AD9">
            <TabelaProdutos></TabelaProdutos>
        </Card>

    
        <Card titulo=" #6 - Repetição" color="#FF4C65">
            <ListaAlunos></ListaAlunos>
        </Card>

        <Card titulo=" #5 Componente com Filhos" color="#00C8F8">
            <Familia sobrenome ="Silva">
                <FamiliaMembro nome ="Pedro"/>
               <FamiliaMembro nome ="Ana"/>
                <FamiliaMembro nome ="Gustavo" /> 
            </Familia>
        </Card>

        <Card titulo=" #4 Desafio Aleatório" color="#FA6900">
            <Aleatorio min={1} max={60} />
        </Card>

        <Card titulo=" #3 Fragmento" color="#E94C6F">
            <Fragmento />
        </Card>

        <Card titulo=" #2 Com Parâmetro" color="#E8B71A">
            <ComParametro
                titulo="Situação do Aluno"
                aluno="Pedro"
                nota={9.3}
            />
        </Card>

        <Card titulo=" #1 Primeiro Componente" color="#588C73">
            <Primeiro></Primeiro>
        </Card>

        </div>

    </div>

