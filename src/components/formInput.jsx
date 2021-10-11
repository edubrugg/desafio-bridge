import React, { useState } from 'react';

import { Input, Button } from 'rbx';

const FormInput = () => {


    return (
        <>
            <Input type="text" placeholder="Digite um número maior que 100" />
            <Button state="focused" color={"info"}>Enviar</Button>
        </>
    );
}
 
export default FormInput;