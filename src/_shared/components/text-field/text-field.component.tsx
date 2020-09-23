import React from 'react';
import './text-field.styles.scss';

export const TextField: React.FC<{ label: string; value: string | number }> = ({
  label,
  value,
}) => {
  return (
    <div className="text-field">
      <span className="text-field__label">{label}:</span>{' '}
      <span className="text-field__value">{value}</span>
    </div>
  );
};
