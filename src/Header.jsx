import CreateIcon from '@mui/icons-material/Create';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';

import React from 'react'

function Header() {
  return (
    <header>
        <h1>
            <FormatListNumberedIcon />
            <CreateIcon />
              To Do Application
        </h1>
    </header>
  )
}

export default Header