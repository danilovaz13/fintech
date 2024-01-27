import React from 'react';
import DataInput from './DateInput';

const DataRange = () => {
  const [inicio, setInicio] = React.useState('');
  const [final, setFinal] = React.useState('');

  return (
    <form className="box flex" onSubmit={(e) => e.preventDefault()}>
      <DataInput
        label="Início"
        value={inicio}
        onChange={({ target }) => setInicio(target.value)}
      />
      {inicio}
      <DataInput
        label="Final"
        value={final}
        onChange={({ target }) => setFinal(target.value)}
      />
      {final}
    </form>
  );
};

export default DataRange;
