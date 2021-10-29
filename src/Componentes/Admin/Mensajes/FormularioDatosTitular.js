import * as React from 'react';
import ListSubheader from  '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import Mensaje from './Mensaje';


export default function NestedList(props) {
  console.log("Mensajes: " + JSON.stringify(props.mensajes));
  const [modalIsOpen, setModalIsOpen] = React.useState(false);
  
  const cursoMensaje = (curso) => {
    console.log("paso por aca: " + curso);
    setModalIsOpen(false);
    props.cursoMensaje(curso);
}

  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
        Nested List Items
      </ListSubheader>
      }
    >
        { props.mensajes.map((data,index) => ( 
            <Mensaje mensaje={data} value = {index} cursoMensaje={cursoMensaje} /> 
            )  
        )};

    </List>
   
  );
}