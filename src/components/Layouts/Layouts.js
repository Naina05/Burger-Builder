import React from 'react';

// import Aux from '../../hoc/Aux';
import classes from './Layouts.css';

import Toolbar  from '../../components/Navigation/Toolbar/Toolbar' ;

const layout = ( props ) => (
    <div>
        <Toolbar/>
        <main className={classes.Content}>
            {props.children}
        </main>
    </div>
);

export default layout;