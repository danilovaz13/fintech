import React from 'react';
import { useData } from '../Context/DataContext';

const style: React.CSSProperties = {
  padding: 'var(--gap) var(--gap-s)',
  backgroundColor: 'var(--color-3)',
  border: 'none',
  borderRadius: 'var(--gap)',
  color: 'var(--color-2)',
  fontWeight: '600',
  textTransform: 'capitalize',
};

function MonthName(n: number) {
  const date = new Date();
  date.setMonth(date.getMonth() + n);

  return new Intl.DateTimeFormat('pt-BR', { month: 'long' }).format(date);
}

function formtDate(date: Date) {
  const dd = String(date.getDate()).padStart(2, '0');
  const mm = String(date.getMonth() + 1).padStart(2, '0');
  const yyyy = date.getFullYear();
  return `${yyyy}-${mm}-${dd}`;
}

const MesBtn = ({ n }: { n: number }) => {
  const { setInicio, setFinal } = useData();

  function setMonth(n: number) {
    const date = new Date();
    date.setMonth(date.getMonth() + n);

    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    const LastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);

    setInicio(formtDate(firstDay));
    setFinal(formtDate(LastDay));
  }

  return (
    <button style={style} onClick={() => setMonth(n)}>
      {MonthName(n)}
    </button>
  );
};

export default MesBtn;
