import { Link, useLocation } from 'react-router-dom';

import 'src/components/BreadCrumb/BreadCrumb.css';

const BreadCrumb = () => {
  const location = useLocation();
  const pathSegments = location.pathname
    .split('/')
    .filter((segment) => segment);
  const breadcrumbPaths = pathSegments.map((segment, index) => {
    const path = `/${pathSegments.slice(0, index + 1).join('/')}`;
    return { label: segment, path };
  });

  return (
    <ul className='d-flex p-2 gap-6 breadcrumbContainer'>
      <li className='breadcrumb-links'>
        <Link to='/'>Home</Link>
        {breadcrumbPaths.length !== 0 && (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            fill='currentColor'
            className='bi bi-chevron-right breadcrumbArrow'
            viewBox='0 0 16 16'
          >
            <path
              fillRule='evenodd'
              d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708'
            />
          </svg>
        )}
      </li>
      {breadcrumbPaths.map((breadcrumb, index) => {
        const isLast = index === breadcrumbPaths.length - 1;
        return (
          <li
            key={breadcrumb.path}
            className='breadcrumb-links'
            aria-current={isLast ? 'page' : undefined}
          >
            {!isLast ? (
              <>
                <Link to={breadcrumb.path}>
                  {breadcrumb.label.replace(/%20/g, ' ')}
                </Link>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='16'
                  fill='currentColor'
                  className='bi bi-chevron-right breadcrumbArrow'
                  viewBox='0 0 16 16'
                >
                  <path
                    fillRule='evenodd'
                    d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708'
                  />
                </svg>
              </>
            ) : (
              breadcrumb.label.replace(/%20/g, ' ')
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default BreadCrumb;
