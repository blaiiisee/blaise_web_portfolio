import * as React from 'react';
import TechTag from './Tech_tag';
import GitHubIcon from '@mui/icons-material/GitHub';

function MakeLog({ Img, Name, Technologies, Description, Link, Placeholder }) {
    const logStyles = {
        ...logStyle,
        opacity: Placeholder ? '0%' : '100%'
    };

    return (
        <div className="project_log" style={logStyles}>
            {/* Image Section */}
            <div style={imageContainerStyle}>
                <img src={`/project_imgs/${Img}`} alt={`${Name} project`} style={imageStyle} />
            </div>

            {/* Content Section */}
            <div style={contentStyle}>
                <h1 style={titleStyle}>{Name}</h1>

                {/* Technology Tags */}
                <div style={rowStyle}>
                    {Technologies.map((tech, index) => (
                        <TechTag key={index} Technology={tech} />
                    ))}
                </div>

                {/* Description */}
                <div style={descriptionContainer}>
                    <p style={descriptionStyle}>{Description}</p>
                </div>

                {/* GitHub Link Button */}
                <a href={Link} target="_blank" rel="noopener noreferrer" style={linkStyle}>
                    <button className="extlink_btn" style={buttonStyle}>
                        <GitHubIcon style={iconStyle} />
                        View on GitHub
                    </button>
                </a>
            </div>
        </div>
    );
}

export default MakeLog;

// Styles
const logStyle = {
    width: '70%',
    height: '40%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundcolor: 'rgba(255, 255, 255, 0.20)',
    borderRadius: '2em',
    boxShadow: '0px 20px 20px rgba(46, 46, 46, 0.25)',
    backdropFilter: 'blur(9px)',
    WebkitBackdropFilter: 'blur(9px)',
    marginTop: '2em',
    border: '2px solid rgba(255, 255, 255, 0.6)'
};

const imageContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    width: '30%',
};

const imageStyle = {
    width: '100%',
    height: 'auto',
    borderRadius: '1em',
    margin: '2em',
    boxShadow: '0px 1px 10px rgba(20, 20, 20, 0.8)',
};

const contentStyle = {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
};

const titleStyle = {
    fontSize: '1.6em',
    textAlign: 'right',
    margin: '1.3em 1.5em 0 0',
    fontWeight: 'bold',
};

const rowStyle = {
    display: 'flex',
    justifyContent: 'flex-end',
    marginRight: '2.5em',
    marginTop: '0.5em',
};

const descriptionContainer = {
    display: 'flex',
    justifyContent: 'flex-end',
    marginRight: '2.5em',
    marginTop: '1.5em',
};

const descriptionStyle = {
    width: '95%',
    textAlign: 'right',
    margin: 0,
};

const linkStyle = {
    alignSelf: 'flex-end',
    marginRight: '2.5em',
    marginTop: '1.5em',
    textDecoration: 'none',
};

const buttonStyle = {
    display: 'flex',
    alignItems: 'center',
};

const iconStyle = {
    height: '1em',
    width: 'auto',
    marginRight: '0.3em',
};
