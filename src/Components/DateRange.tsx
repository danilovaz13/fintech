import React from 'react';
import DataInput from './DateInput';

const DataRange = () => {
  const [inicio, setInicio] = React.useState('');
  const [final, setFinal] = React.useState('');

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <DataInput
        label="Início"
        value={inicio}
        onChange={({ target }) => setInicio(target.value)}
      />
      <p>{inicio}</p>
      <DataInput
        label="Final"
        value={final}
        onChange={({ target }) => setFinal(target.value)}
      />
      <p>{final}</p>
    </form>
  );
};

export default DataRange;
