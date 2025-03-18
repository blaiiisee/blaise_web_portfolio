import { p } from 'motion/react-client';
import * as React from 'react';


export default function NavButton({Name, State}) {
    if(State == 'selected') {
        return (
            <div style={div_style_selected} className={'nav_btn'}>
                <p style={btn_style}>{Name}</p>
            </div>
          );
    } else {
        return (
            <div style={div_style_default} className={'nav_btn'}>
                <p style={btn_style}>{Name}</p>
            </div>
          );
    }
}

const btn_style = {
    color: 'white',
    fontSize: 10,
    marginLeft: 20,
    marginRight: 20
}

const div_style_selected = {
    borderRadius: 20,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 3,
    marginBottom: 3
}

const div_style_default = {
    borderRadius: 20,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 3,
    marginBottom: 3
}
