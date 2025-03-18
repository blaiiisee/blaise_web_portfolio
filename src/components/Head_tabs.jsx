import * as React from 'react';
import Navbutton from './Nav_btns';


export default function MakeTab() {
    /*
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
    */

  return (
    <div style={nav_style}>
        <Navbutton  Name={'Home'} State={'selected'} />
        <Navbutton Name={'Projects'} State={'deselected'} />
        <Navbutton Name={'Contact'} State={'deselected'} />
    </div>
  );
}

const nav_style = {
    width: 'fit-content',
    display: 'flex',
    backgroundColor: '#222222',
    borderRadius: 30,
    boxShadow: '0px 0px 15px #222222',
}