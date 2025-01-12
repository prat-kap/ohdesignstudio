/* eslint-disable react/prop-types */
import { useRef, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { motion, AnimatePresence } from 'framer-motion';

import BreadCrumb from 'src/components/BreadCrumb';
import RouterLinks from 'src/components/RouterLinks';
import Logo from 'src/assets/logo_white.png';

import { portfolioFilterLinks } from 'src/data/constants';

import 'src/components/HorizontalContainer/HorizontalContainer.css';

const HorizontalContainer = (props) => {
  const { components, page } = props;
  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [activeTab, setActiveTab] = useState('work-page');

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  const ScrollToSection = () => {
    const location = useLocation();
    useEffect(() => {
      if (location.hash) {
        const element = document.querySelector(location.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', inline: 'start' });
        }
      }
    }, [location]);
    return null;
  };

  const variants = {
    hidden: { opacity: 0, x: -100, display: 'none' },
    visible: { opacity: 1, x: 0, display: 'flex' },
    exit: { opacity: 0, x: 100, display: 'none' },
  };

  return (
    <>
      <ScrollToSection />
      <Container
        fluid
        className='horizontal-container'
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUpOrLeave}
        onMouseLeave={handleMouseUpOrLeave}
        style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
      >
        <Row className='action-row'>
          <div className='logo-wrapper'>
            <Link to='/'>
              <img
                className='application-logo'
                src={Logo}
                alt='Oh! Design Studio Logo'
                // onClick={() => window.scrollTo(0, 0)}
              />
            </Link>
          </div>
          {page === 'work' && (
            <div
              className='portfolio-filter-wrapper'
              onClick={() => setActiveTab('fiter-page')}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                fill='currentColor'
                className='bi bi-search filter-icon'
                viewBox='0 0 16 16'
              >
                <path d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0' />
              </svg>
              <span>FILTER</span>
            </div>
          )}
          <div className='hamburger'>
            <Link to='/#router-links'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='currentColor'
                className='bi bi-list hamburger-icon'
                viewBox='0 0 16 16'
              >
                <path
                  fillRule='evenodd'
                  d='M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5'
                />
              </svg>
            </Link>
          </div>
        </Row>
        <Row className='scroll-row'>
          {page === 'work' ? (
            <AnimatePresence mode='wait'>
              {activeTab === 'work-page' && (
                <motion.div
                  className='scroll-item-container'
                  key='work-page'
                  variants={variants}
                  initial='hidden'
                  animate='visible'
                  exit='exit'
                  transition={{ duration: 0.2 }}
                >
                  {components.map((component) => {
                    return (
                      <Col
                        className={`scroll-item-${component.props.page}`}
                        key={component.props.id}
                      >
                        {component}
                      </Col>
                    );
                  })}
                </motion.div>
              )}
              {activeTab === 'fiter-page' && (
                <motion.div
                  className='scroll-item-container'
                  key='fiter-page'
                  variants={variants}
                  initial='hidden'
                  animate='visible'
                  exit='exit'
                  transition={{ duration: 0.2 }}
                >
                  <Col className='scroll-item-portfolio-filter'>
                    <RouterLinks
                      id='portfolio-filter'
                      page='filter-page'
                      data={portfolioFilterLinks}
                      setActiveTab={setActiveTab}
                    />
                  </Col>
                </motion.div>
              )}
            </AnimatePresence>
          ) : (
            <div className='scroll-item-container'>
              {components.map((component) => {
                return (
                  <Col
                    className={`scroll-item-${component.props.page}`}
                    key={component.props.id}
                  >
                    {component}
                  </Col>
                );
              })}
            </div>
          )}
        </Row>
        <Row className='breadcrumb-row'>
          <BreadCrumb />
        </Row>
      </Container>
    </>
  );
};

export default HorizontalContainer;
