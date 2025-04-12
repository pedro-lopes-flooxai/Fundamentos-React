import React from 'react';

import Aleatorio from './components/basicos/Aleatorio';
import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';
import Card from './components/layout/Card';

export default () =>
    <div id="app">
        <h1>Fundamentos React</h1>
        <Card titulo=" #4 Desafio Aleatório">
            <Aleatorio min={1} max={60} />
        </Card>

        <Card titulo=" #3 Fragmento">
            <Fragmento/>
        </Card>
        <Card titulo="Exemplo de Card"></Card>

        
        <Card titulo=" #2 Com Parâmetro">
            <ComParametro
                titulo="Situação do Aluno"
                aluno="Pedro"
                nota={9.3}
            />
        </Card>

        <Card titulo=" #1 Primeiro Componente">
            <Primeiro></Primeiro>
        </Card>
        
    </div>

