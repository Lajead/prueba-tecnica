import { useEffect, useRef, useState } from 'react';

function AttendanceForm() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [image, setImage] = useState(null);
  const [position, setPosition] = useState({ lat: null, lon: null });
  const [shift, setShift] = useState('day');

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(stream => {
        if (videoRef.current) videoRef.current.srcObject = stream;
      })
      .catch(console.error);
    navigator.geolocation.getCurrentPosition(pos => {
      setPosition({ lat: pos.coords.latitude, lon: pos.coords.longitude });
    });
  }, []);

  const capture = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (!video || !canvas) return;
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(video, 0, 0);
    const dataUrl = canvas.toDataURL('image/png');
    setImage(dataUrl);
  };

  const save = (type) => {
    const records = JSON.parse(localStorage.getItem('attendance') || '[]');
    records.push({
      id: Date.now(),
      type,
      timestamp: new Date().toISOString(),
      lat: position.lat,
      lon: position.lon,
      shift,
      image,
    });
    localStorage.setItem('attendance', JSON.stringify(records));
    alert('Registro guardado');
    setImage(null);
  };

  return (
    <div className="attendance-form">
      <h1>Registro de Asistencia</h1>
      <video ref={videoRef} autoPlay playsInline />
      <button onClick={capture}>Tomar foto</button>
      {image && <img src={image} alt="captura" width={200} />}
      <canvas ref={canvasRef} style={{ display: 'none' }} />
      <div>
        <label>Turno: </label>
        <select value={shift} onChange={e => setShift(e.target.value)}>
          <option value="day">Diurno (9am-7pm)</option>
          <option value="night">Nocturno</option>
        </select>
      </div>
      <div>
        <button onClick={() => save('entrada')}>Registrar Entrada</button>
        <button onClick={() => save('salida')}>Registrar Salida</button>
      </div>
    </div>
  );
}

export default AttendanceForm;
