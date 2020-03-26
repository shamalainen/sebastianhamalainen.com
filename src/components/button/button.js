import React from 'react';

import ButtonInternal from './button.internal';
import ButtonExternal from './button.external';
import ButtonPlain from './button.plain';
import './button.scss';

const Button = ({
  linkTo, className, linkTargetType, children, noLink, onClick, primary, secondary, center,
}) => {
  if (primary) {
    className += ' button--primary';
  }

  if (secondary) {
    className += ' button--secondary';
  }

  if (center) {
    className += ' button--center';
  }

  const buttonProps = {
    linkTo, className, children, onClick,
  };


  if (linkTargetType === 'external') {
    return <ButtonExternal {...buttonProps} />;
  } if (linkTargetType !== 'external' && !noLink) {
    return <ButtonInternal {...buttonProps} />;
  }

  return <ButtonPlain {...buttonProps} />;
};

export default Button;
