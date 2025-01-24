const LeftSectionComponent = () => {
  return (
    <section className='h-100 d-none d-md-block px-3 mt-2'>
      <div className='d-flex align-items-center mb-3'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='20'
          height='24'
          version='1.1'
          viewBox='0 0 20 24'
          className='me-1'
          style={{ fill: 'white' }}
        >
          <path
            fillRule='nonzero'
            stroke='none'
            strokeWidth='1'
            d='M14.5498331,5.79055576 L14.8667346,5.79824073 C15.6519271,5.85753895 17.9167852,6.09354452 19.3663083,8.18658259 C19.2454992,8.2761902 16.6786385,9.72115188 16.7091378,12.7589876 C16.7390911,16.3870553 19.9696682,17.5970079 20,17.6265086 C19.9696682,17.7155832 19.487499,19.3381578 18.3096405,21.0185738 C17.2829229,22.4941235 16.2256873,23.9394547 14.5345925,23.9689736 C12.9038728,23.9984743 12.3599697,23.0246181 10.4887983,23.0246181 C8.61624942,23.0246181 8.01243658,23.9394547 6.47193668,23.9984743 C4.84148068,24.056773 3.60409403,22.4336653 2.57735781,20.9595512 C0.463094554,17.9799264 -1.13731196,12.5531248 1.03685791,8.89465382 C2.09390733,7.06587112 4.02671959,5.91602544 6.10974825,5.88615523 C7.71015477,5.85753895 9.18984525,6.91939744 10.1566562,6.91939744 C11.1229398,6.91939744 12.8433271,5.68057112 14.8667346,5.79824073 Z M14.882569,-1.50990331e-14 C15.034318,1.42063421 14.4589476,2.81085604 13.6110595,3.84623659 C12.7325883,4.85257077 11.3405768,5.6504798 9.94727779,5.53248307 C9.76560653,4.17140151 10.4624841,2.72297789 11.2498451,1.83563692 C12.1267465,0.799444643 13.6413789,0.0602553239 14.882569,-1.50990331e-14 Z'
          ></path>
        </svg>
        <h2 className='text-white fs-3'> Music</h2>
      </div>

      <div className='text-center'>
        <input
          type='text'
          placeholder='Cerca'
          className='textInput rounded-1 p-0 bg-black border-1 w-100 mb-2'
        />
      </div>
      <div className='justify-content-start flex-grow-1 pe-2'>
        <div className='d-flex flex-column'>
          <div className='sideMenuItem mt-3 rounded-2 p-1'>
            <i className='bi bi-house-door  text-danger'></i>
            <a
              href='#home'
              className='p-0 text-decoration-none text-white ms-2'
            >
              Home
            </a>
          </div>
          <div className='sideMenuItem mt-3 rounded-2 p-1'>
            <i className='bi bi-grid text-danger'></i>
            <a
              href='#features'
              className='p-0 text-decoration-none text-white ms-2'
            >
              Novità
            </a>
          </div>
          <div className='sideMenuItem mt-3 rounded-2 p-1'>
            <i className='bi bi-broadcast text-danger'></i>
            <a
              href='#pricing'
              className='p-0 text-decoration-none text-white ms-2'
            >
              Radio
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeftSectionComponent;
