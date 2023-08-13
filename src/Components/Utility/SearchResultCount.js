import React from 'react';
import UnopDropdown from 'unop-react-dropdown';
import sortImage from '../../assets/images/sort.png';

const SearchResultCount = ({title, sort, onChangeSort}) => {
    return (
        <div className="shop__product__option">
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="shop__product__option__left">
                        <p>{title}</p>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="shop__product__option__right">
                        <p>Sort by:</p>
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
            </div>
        </div>
    );
};

export default SearchResultCount;

