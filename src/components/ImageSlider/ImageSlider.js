import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { css } from '@emotion/react';
import { Icon } from '@newrelic/gatsby-theme-newrelic';

const ImageSlider = ({ images, height }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleClickNext = () => {
    const nextImageIndex = selectedImageIndex + 1;
    setSelectedImageIndex(nextImageIndex % images.length);
  };

  return (
    <div
      css={css`
        position: relative;
        margin-bottom: 2rem;
      `}
    >
      <button
        onClick={handleClickNext}
        css={css`
          position: absolute;
          top: 38%;
          right: 0;
          background: none;
          color: var(--color-white);
          border: none;
          cursor: pointer;
        `}
      >
        <Icon name="chevron-right" size="4rem" />
      </button>
      {CreateImageBlock(images[selectedImageIndex], height)}
    </div>
  );
};

ImageSlider.propTypes = {
  images: PropTypes.array,
  height: PropTypes.number,
};

const CreateImageBlock = (image, height) => {
  return (
    <a
      href={image}
      target="_blank"
      rel="noreferrer"
      css={css`
        height: ${height}px;
        width: 100%;
        margin-right: 1rem;
      `}
    >
      <img
        src={image}
        alt="placeholder-text"
        css={css`
          height: ${height}px;
          width: 100%;
          box-sizing: border-box;
          box-shadow: inset 0px 0px 0px 4px var(--divider-color);
          border-radius: 4px;
          padding: 0.25rem;
        `}
      />
    </a>
  );
};

const noImagePlaceholder =
  'https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png';

export default ImageSlider;
