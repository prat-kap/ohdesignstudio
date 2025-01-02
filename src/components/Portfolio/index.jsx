import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { useMatch } from 'react-router-dom';

import { portfolios } from 'src/data/constants';

import 'src/components/Portfolio/Portfolio.css';

const textMotion = {
  rest: {
    display: 'none',
    type: 'tween',
    x: '-10%',
    opacity: 0,
  },
  hover: {
    display: 'block',
    opacity: 1,
    x: '0%',
    transition: {
      type: 'tween',
      stiffness: 300,
      damping: 30,
    },
  },
};

const Portfolio = () => {
  const routeName = useMatch('portfolio/*');
  const filterName = routeName?.params['*'];

  const [portfolioData, setPortfolioData] = useState([...portfolios]);

  useEffect(() => {
    const arr = filterName
      ? portfolios.filter((item) => item.category === filterName)
      : [...portfolios];
    setPortfolioData(arr);
    return () => {
      setPortfolioData([]);
    };
  }, [filterName]);

  let rows = [];
  if (portfolioData.length > 4) {
    rows = [
      portfolioData.slice(0, Math.ceil(portfolioData.length / 2)),
      portfolioData.slice(Math.ceil(portfolioData.length / 2)),
    ];
  } else rows = portfolioData;

  return (
    <Container
      fluid
      className='portfolio-section-wrapper h-100 d-flex flex-column'
    >
      {rows.map((row, rowIndex) => (
        <div
          id='portfolios-list'
          className='postfolio-list h-50'
          key={rowIndex}
        >
          {row.map((portfolio, index) => (
            <motion.div
              className='portfolios-inner h-100'
              key={index}
              initial='rest'
              whileHover='hover'
              animate='rest'
            >
              <a href={portfolio.link} rel={portfolio.link}>
                <img
                  src={portfolio.src}
                  className='portfolio-image'
                  alt='best branding agencies in Mumbai'
                />
                <motion.div
                  className='portfolios-thumb-hover'
                  variants={textMotion}
                  style={{
                    backgroundColor: portfolio.contentOnHover.bgColor,
                  }}
                >
                  <div className='thumb-title'>
                    {portfolio.contentOnHover.heading}
                  </div>
                  <div className='thumb-sub-title'>
                    {portfolio.contentOnHover.subHeading}
                  </div>
                  <ul className='thumb-lists'>
                    {portfolio.contentOnHover.listsContent.map(
                      (item, listIndex) => (
                        <li key={listIndex}>{item}</li>
                      )
                    )}
                  </ul>
                </motion.div>
              </a>
            </motion.div>
          ))}
        </div>
      ))}
    </Container>
  );
};

export default Portfolio;
