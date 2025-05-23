import * as React from 'react';

function MakeFeature({ Icon, Name, Left, Top, Width, SVGs}) {
    return (
        <div className={`FeatureSet_${Name}`} style={{ ...style, left: Left ,  top: Top, width: Width}}>
            <Icon style={icon_style}/>
            <div style={{display: 'flex', flexDirection: 'column', width: '100%', height: '100%'}}>
                <div style={style_top}>
                    <p style={{marginTop: '0.35em'}}>{Name}</p>
                </div>
                <div style={style_bottom}>
                {SVGs.map((svg, index) => (
                        <img key={index} src={`/${svg}.svg`} alt={svg} style={svg_style} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MakeFeature

const style = {
    height: '4em',
    position: 'fixed',
    zIndex: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.20)',
    display: 'flex',
    flexDirection: 'row',
    borderRadius: '15px',
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
    alignItems: 'center',
    backdropFilter: 'blur(6.2px)',
    WebkitBackdropFilter: 'blur(6.2px)',
    border: '1px solid rgba(255, 255, 255, 0.3)'
}

const style_top = {
    height: '50%',
    justifyContent: 'center',
    alignItems: 'left',
    fontSize: '1.2em',
    textAlign: 'left',
    fontWeight: 'bold',
    color: '#222222'
}

const style_bottom = {
    height: '50%',
    fontSize: '1em',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: '0.5em'
}

const icon_style = {
    height: '1.5em', 
    width: 'auto',
    top: '50%',
    margin: '0.3em',
    marginLeft: '0.6em',
    marginRight: '0.6em',
    color: '#222222'
}

const svg_style = {
    height: '1.3em',
    width: 'auto',
};