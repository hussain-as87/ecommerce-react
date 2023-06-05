import React from 'react';
import UnopDropdown from 'unop-react-dropdown';
import sortImage from '../../assets/images/sort.png';

const SearchResultCount = ({title, sort, onChangeSort}) => {
    return (
        <div className="d-flex justify-content-between pt-3 px-2">
            <div className="sub-tile">{title}</div>
            <div className="search-count-text d-flex">
                <UnopDropdown
                    trigger={
                        <p className="mx-1">
                            <img width="20px" height="20px" className="ms-1" src={sortImage} alt=""/>
                            Order by
                        </p>
                    }
                    delay={0}
                    align="CENTER"
                    hover
                >
                    <div className="card-filter">
                        <div
                            className={`border-bottom card-filter-item ${sort === '-createdAt' ? 'active' : ''}`}
                            onClick={() => onChangeSort('-createdAt')}
                        >
                            latest
                        </div>
                        <div
                            className={`border-bottom card-filter-item ${sort === '-sold' ? 'active' : ''}`}
                            onClick={() => onChangeSort('-sold')}
                        >
                            selling
                        </div>
                        <div
                            className={`border-bottom card-filter-item ${sort === '-ratingQuantity' ? 'active' : ''}`}
                            onClick={() => onChangeSort('-ratingQuantity')}
                        >
                            rating
                        </div>
                        <div
                            className={`border-bottom card-filter-item ${sort === 'price' ? 'active' : ''}`}
                            onClick={() => onChangeSort('price')}
                        >
                            most cheap
                        </div>
                        <div
                            className={`card-filter-item ${sort === '-price' ? 'active' : ''}`}
                            onClick={() => onChangeSort('-price')}
                        >
                            most expensive
                        </div>
                    </div>
                </UnopDropdown>
            </div>
        </div>
    );
};

export default SearchResultCount;
