import React from 'react';
import { Checkbox } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { CheckboxSelected } from '../Icons/Checkbox/CheckboxSelected';
import { CheckboxOpen } from '../Icons/Checkbox/CheckboxOpen';

const styles = {
    root: {
        padding: "124px",
    }
}

const TmpCheckbox = withStyles({
    root: {
        padding: 0,
    },
})(Checkbox);

const UserCheckbox: React.FC = ({ children }) => {
    const handleClick = (value: string) => {
        console.log(value);
    }
    console.log()
    return (
        <TmpCheckbox
            icon={<CheckboxOpen />}
            checkedIcon={<CheckboxSelected />}
        />
    );
}

export default UserCheckbox;