import * as React from 'react';

export default function NavButton({ Name, State, onClick }) {
    const btnRef = React.useRef(null);

    React.useEffect(() => {
        const btn = btnRef.current;
        if (!btn) return;

        const handleHover = () => {
            btn.style.background = div_style_hovered.background;
            btn.style.color = div_style_hovered.color;
        };

        const handleOut = () => {
            btn.style.background = State === 'selected' 
                ? div_style_selected.background 
                : div_style_default.background;
            btn.style.color = State === 'selected' 
                ? div_style_selected.color 
                : div_style_default.color;
        };

        btn.addEventListener('mouseover', handleHover);
        btn.addEventListener('mouseout', handleOut);

        return () => {
            // Cleanup to prevent duplicate listeners
            btn.removeEventListener('mouseover', handleHover);
            btn.removeEventListener('mouseout', handleOut);
        };
    }, [State]); // Depend on `State` only to update when selected

    return (
        <div
            ref={btnRef} // ✅ Attach ref here
            onClick={() => onClick(Name)}
            style={State === 'selected' ? div_style_selected : div_style_default}
            className="nav_btn"
            id={'btn_' + Name}
        >
            <p style={btn_style}>{Name}</p>
        </div>
    );
}

const btn_style = {
    color: 'white',
    fontSize: 10,
    marginLeft: 20,
    marginRight: 20
};

const div_style_selected = {
    borderRadius: 20,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 3,
    marginBottom: 3,
    background: '#3d3d3d',
    color: '#ffffff'
};

const div_style_default = {
    borderRadius: 20,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 3,
    marginBottom: 3,
    background: '#222222',
    color: '#dddddd'
};

const div_style_hovered = {
    borderRadius: 20,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 3,
    marginBottom: 3,
    background: '#3d3d3d',
    color: '#dddddd'
};
