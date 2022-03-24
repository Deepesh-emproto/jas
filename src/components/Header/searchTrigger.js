import React from 'react';
import { shape, string } from 'prop-types';
import { Search as SearchIcon } from 'react-feather';
import { useIntl } from 'react-intl';
import Icon from "@magento/venia-ui/lib/components/Icon"
import "../../index.css";

import { useStyle } from '@magento/venia-ui/lib/classify';
import defaultClasses from '@magento/venia-ui/lib/components/Header/searchTrigger.module.css';
import { useSearchTrigger } from '@magento/peregrine/lib/talons/Header/useSearchTrigger';

const SearchTrigger = React.forwardRef((props, ref) => {
    const { active, onClick } = props;

    const talonProps = useSearchTrigger({
        onClick
    });
    const { handleClick } = talonProps;
    const { formatMessage } = useIntl();

    const classes = useStyle(defaultClasses, props.classes);

    const searchClass = active ? classes.open : classes.root;

    const searchText = formatMessage({
        id: 'searchTrigger.search',
        defaultMessage: 'Search'
    });

    return (
        <button
            className={searchClass}
            data-cy="SearchTrigger-button "
            aria-label={searchText}
            ref={ref}
        >
            <span data-cy="SearchTrigge   r-label" className={classes.label}>
            <input type='text' placeholder='Search' className='InputBar' onChange={(event)=>event.target.value}/>
            </span>   
        </button>  
    )   
});

SearchTrigger.propTypes = {
    classes: shape({
        root: string,
        open: string
    })
};

export default SearchTrigger;
