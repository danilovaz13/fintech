import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { IVenda } from '../Context/DataContext';

const dadosGrafico = [
  {
    data: '2024-01-05',
    pago: 3000,
    processando: 3000,
    falha: 2000,
  },
  {
    data: '2024-01-06',
    pago: 34000,
    processando: 5000,
    falha: 6000,
  },

  {
    data: '2024-01-07',
    pago: 20000,
    processando: 5000,
    falha: 6000,
  },
];

const GraficoVendas = ({ data }: { data: IVenda[] }) => {
  return (
    <ResponsiveContainer width={'99%'} height={400}>
      <LineChart data={dadosGrafico}>
        <XAxis dataKey="data" />
        <YAxis dataKey="" />
        <Tooltip />
        <Legend />
        <CartesianGrid stroke="#f5f5f5" />
        <Line type="monotone" dataKey="pago" stroke="#A36AF9" strokeWidth={3} />
        <Line
          type="monotone"
          dataKey="processando"
          stroke="#FBCB21"
          strokeWidth={3}
        />
        <Line
          type="monotone"
          dataKey="falha"
          stroke="#000000"
          strokeWidth={3}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default GraficoVendas;
