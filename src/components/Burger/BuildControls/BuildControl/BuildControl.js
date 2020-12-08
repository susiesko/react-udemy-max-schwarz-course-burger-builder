import React from 'react';
import PropTypes from 'prop-types';

import classes from './BuildControl.module.css';

const buildControl = props => (
    <div className={classes.BuildControl}>
        <div className={classes.Label}>{props.label}</div>
        <button className={classes.Less}>Less</button>
        <button className={classes.More} onClick={props.added}>More</button>
    </div>
);

buildControl.propTypes = {

};

export default buildControl;
