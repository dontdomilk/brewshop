import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';

const DropdownFilter = ({id, value, onChange, items}) => {
    const [open, setOpen] = useState(false);

    return (
        <div className="dropdown-filter-wrapper" >
            {}

        </div>
    )

}


DropdownFilter.propTypes = {
    id: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    items: PropTypes.arrayOf(PropTypes.shape({
        displayName: PropTypes.string,
        value: PropTypes.string
    })).isRequired
}

export default DropdownFilter;