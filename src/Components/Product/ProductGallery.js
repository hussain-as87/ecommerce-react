import React from 'react';
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import LeftButton from './LeftButton';
import RightButton from './RightButton';

const ProductGallery = ({ images, imageCover }) => {
    const imgs = images.map(image => ({ original: image }));
/*
    const galleryStyles = {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    };

    const imageStyles = {
        objectFit: 'cover',
        width: '100%',

    };*/

    return (
        <div className="product-gallary-card d-flex justfiy-content-center align-items-center pt-2">
            <ImageGallery
                items={imgs}
                defaultImage={imageCover}
                showFullscreenButton={false}
                isRTL={true}
                showPlayButton={false}
                showThumbnails={false}
                renderRightNav={RightButton}
                renderLeftNav={LeftButton}
    /*            renderCustomControls={() => null} // Disable default navigation controls
                renderFullscreenButton={() => null} // Disable fullscreen button
                renderPlayPauseButton={() => null} // Disable play button
                renderThumbInner={() => null} // Disable thumbnail view
                renderItem={(item) => (
                    <div style={galleryStyles}>
                        <img src={item.original} alt={item.original} style={imageStyles} />
                    </div>
                )}*/
            />
        </div>
    );
};

export default ProductGallery;
