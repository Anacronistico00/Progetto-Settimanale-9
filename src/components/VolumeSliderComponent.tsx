import { useState } from 'react';

const VolumeSliderComponent: React.FC = () => {
  const [volume, setVolume] = useState(50); // Stato per il valore del volume

  const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setVolume(Number(event.target.value));
  };

  return (
    <div className='d-flex align-items-center w-75'>
      <i className='bi bi-volume-down-fill text-white'></i>
      <input
        id='volume-slider'
        type='range'
        min='0'
        max='100'
        value={volume}
        onChange={handleVolumeChange}
        style={{
          width: '100%',
          cursor: 'pointer',
          accentColor: '#6c757d',
        }}
      />
    </div>
  );
};

export default VolumeSliderComponent;
