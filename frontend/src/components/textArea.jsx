import React from 'react';

import { Message } from 'rbx';

const TextArea = () => {
    return (
            <Message color="info">
            <Message.Header>
                <p>Você sabe o que é um número duodigito?</p>
            </Message.Header>
            <Message.Body>
                <p>Um número duodigito é aquele cujo seus algarismos têm no <strong>máximo 2 distintos números</strong>.</p>
                <p>Logo abaixo temos alguns exemplos de números duodigito:</p>
                <ul>
                    <li>101</li>
                    <li>322</li>
                    <li>5577</li>
                    <li>11777</li>
                </ul>
            </Message.Body>
            <Message.Body>
                <p>
                    Neste App você deve informar um número maior que 100, que 
                    vamos calcular qual é o menor número duodigito múltiplo do número informado.
                </p>
            </Message.Body>
            </Message>

    );
}
 
export default TextArea;