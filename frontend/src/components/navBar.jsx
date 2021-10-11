import React from "react";

import { Navbar, Button } from 'rbx';

const NavBar = () => {
    return (
        <Navbar>
        <Navbar.Brand>
          <Navbar.Item href="https://bridge.ufsc.br/">
            <img
              src="https://bridge.ufsc.br/assets/bridge-10f33ba50e7282b5dba9b778efd64394e58a56c7df331decce3745fb5a77a930.svg"
              alt=""
              role="presentation"
              width="112"
              height="28"
            />
          </Navbar.Item>
          <Navbar.Burger />
        </Navbar.Brand>
        <Navbar.Menu>
          <Navbar.Segment align="start">
            <Navbar.Item>Desafio | Desenvolvimento Web Full Stack</Navbar.Item>
            
          </Navbar.Segment>
          <Navbar.Segment align="end">
          <Navbar.Item>Eduardo Bruggmann Pedro</Navbar.Item>
          <Navbar.Item href="https://github.com/edubrugg">
            <Button state="focused" color="black">
                 GitHub
             </Button>
          </Navbar.Item>
            
            
          </Navbar.Segment>
        </Navbar.Menu>
      </Navbar>
    );
}
 
export default NavBar;