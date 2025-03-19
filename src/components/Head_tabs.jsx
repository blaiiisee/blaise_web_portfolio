import * as React from 'react';
import NavButton from './Nav_btns';


export default function MakeTab() {
    /*
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
    */

  const [selectedTab, setSelectedTab] = React.useState('Home'); // Default selected tab

  const handleClick = (name) => {
      setSelectedTab(name); // Update selected tab
  };

  React.useEffect(() => {
    const sections = ["home", "projects", "contact"];

    sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
            section.style.opacity = id === selectedTab.toLowerCase() ? "1" : "0";
        }
    });
  }, [selectedTab]); // Runs whenever selectedTab changes

  return (
      <div style={nav_style}>
          <NavButton Name={'Home'} State={selectedTab === 'Home' ? 'selected' : 'deselected'} onClick={handleClick} />
          <NavButton Name={'Projects'} State={selectedTab === 'Projects' ? 'selected' : 'deselected'} onClick={handleClick} />
          <NavButton Name={'Contact'} State={selectedTab === 'Contact' ? 'selected' : 'deselected'} onClick={handleClick} />
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