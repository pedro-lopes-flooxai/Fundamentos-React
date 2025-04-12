import './App.css'
import React from 'react';

import Aleatorio from './components/basicos/Aleatorio';
import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';
import Card from './components/layout/Card';

export default () =>
    <div className="App">
        <h1>Fundamentos React</h1>

        <div className="Cards">

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

