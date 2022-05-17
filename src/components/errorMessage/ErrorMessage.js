import img from './error.gif';

const ErrorMessage = () => {
  return (
    <div
      className='error-wrapper'
      style={{
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        alignItems: 'center',
      }}
    >
      <img src={img} alt='error' style={{ width: '100px' }} />
      <p style={{ fontSize: '24px' }}>Something went wrong</p>
    </div>
  );
};

export default ErrorMessage;
