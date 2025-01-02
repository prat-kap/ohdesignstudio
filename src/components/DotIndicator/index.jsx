import 'src/components/DotIndicator/DotIndicator.css';

const DotIndicator = () => {
  return (
    <span className='dot-indicator'>
      {[...Array(5)].map((_, index) => (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='16'
          height='16'
          fill='currentColor'
          className='bi bi-circle-fill'
          viewBox='0 0 16 16'
          key={index}
        >
          <circle cx='8' cy='8' r='8' />
        </svg>
      ))}
    </span>
  );
};

export default DotIndicator;
