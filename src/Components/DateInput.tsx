import React from 'react';

type IDateInput = React.ComponentProps<'input'> & {
  label: string;
};
const DataInput = ({ label, ...props }: IDateInput) => {
  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <input type="date" name={label} id={label} {...props} />
    </div>
  );
};

export default DataInput;
