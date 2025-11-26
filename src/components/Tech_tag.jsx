import * as React from 'react';

const styles = {
    JavaScript: {
        backgroundColor: 'rgba(255, 236, 65, 0.2)',
        border: '2px solid #a37f08',
        color: 'rgb(163, 127, 8)'
    },
    TypeScript: {
        backgroundColor: 'rgba(65, 255, 166, 0.2)',
        border: '2px solid #08a389ff',
        color: 'rgba(8, 163, 111, 1)'
    },
    BackEnd: {
        backgroundColor: 'rgba(65, 255, 97, 0.2)',
        border: '2px solid rgb(8, 163, 47)',
        color: 'rgb(8, 163, 47)'
    },
    FrontEnd: {
        backgroundColor: 'rgba(255, 65, 138, 0.2)',
        border: '2px solid rgb(163, 8, 80)',
        color: 'rgb(163, 8, 80)'
    },
    ReactJS: {
        backgroundColor: 'rgba(65, 132, 255, 0.2)',
        border: '2px solid rgb(8, 80, 163)',
        color: 'rgb(8, 80, 163)'
    },
    Default: {
        backgroundColor: 'rgba(34, 34, 34, 0.2)',
        border: '2px solid #222222',
        color: '#222222'
    }
};

function TechTag({ Technology }) {
    const { backgroundColor, border, color } = styles[Technology] || styles.Default;

    return (
        <div style={{ ...tagStyle, backgroundColor, border }}>
            <p style={{ ...textStyle, color }}>{Technology}</p>
        </div>
    );
}

export default TechTag;

const tagStyle = {
    width: 'max-content',
    height: '1.5em',
    borderRadius: '2em',
    fontWeight: '500',
    marginLeft: '0.5em',
    display: 'flex',
    alignItems: 'center'
};

const textStyle = {
    marginLeft: '0.4em',
    marginRight: '0.4em',
    marginTop: '0em',
    marginBottom: '0em'
};
