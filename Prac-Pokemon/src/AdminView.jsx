import { useEffect, useState } from 'react';

function AdminView() {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('attendance') || '[]');
    setRecords(stored);
  }, []);

  return (
    <div className="admin-view">
      <h1>Registros de Asistencia</h1>
      <table>
        <thead>
          <tr>
            <th>Tipo</th>
            <th>Fecha y hora</th>
            <th>Turno</th>
            <th>Coordenadas</th>
            <th>Foto</th>
          </tr>
        </thead>
        <tbody>
          {records.map(rec => (
            <tr key={rec.id}>
              <td>{rec.type}</td>
              <td>{new Date(rec.timestamp).toLocaleString()}</td>
              <td>{rec.shift === 'day' ? 'Diurno' : 'Nocturno'}</td>
              <td>{rec.lat}, {rec.lon}</td>
              <td>{rec.image && <img src={rec.image} alt="" width={50} />}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminView;
