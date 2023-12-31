import React from 'react'
import Carousel from 'react-grid-carousel'
import Card from '../../components/Card/Card';
 
const MorePlace = () => {
   
    const CustomRightArrowButton = ({ onClick, disabled, children }) => (
        <button
          onClick={onClick}
          disabled={disabled}
          style={{
            fontSize: '40px',
            color: '#000',
            cursor: 'pointer',
            position : 'absolute',
            bottom: '-8.5%',
            right : '44.5%'
          }}
        >
          {children}
        </button>
      );

    const CustomLeftArrowButton = ({ onClick, disabled, children }) => (
        <button
          onClick={onClick}
          disabled={disabled}
          style={{
            fontSize: '40px',
            color: '#000',
            cursor: 'pointer',
            position : 'absolute',
            bottom: '-8.5%',
            left : '44.5%'
          }}
        >
            
                {children}
            
        </button>
      );

      const MyDot = ({ isActive }) => (
        <span
          style={{
            display: 'inline-block',
            height: isActive ? '8px' : '5px',
            width: isActive ? '8px' : '5px',
            borderRadius : '50%',
            background: isActive ? 'black' : 'grey',
            marginTop : '65px'
          }}
        ></span>
      )

  return (
    <section id='moreplace' className='container py-12 px-24 relative'>
      <h3 className='text-center text-2xl font-semibold py-5'>MORE PLACE</h3>
        <Carousel cols={3} rows={2} loop gap={10} showDots={true} dotColorActive='#000' dotColorInactive='grey' arrowRight={<CustomRightArrowButton>{'>'}</CustomRightArrowButton>} arrowLeft={<CustomLeftArrowButton>{'<'}</CustomLeftArrowButton>} dot={MyDot}>
        <Carousel.Item>
            <Card img = 'https://picsum.photos/800/600?random=1'/>
        </Carousel.Item>
        <Carousel.Item>
            <Card img = 'https://picsum.photos/800/600?random=2'/>
        </Carousel.Item>
        <Carousel.Item>
            <Card img = 'https://picsum.photos/800/600?random=3'/>
        </Carousel.Item>
        <Carousel.Item>
            <Card img = 'https://picsum.photos/800/600?random=4'/>
        </Carousel.Item>
        <Carousel.Item>
            <Card img = 'https://picsum.photos/800/600?random=5'/>
        </Carousel.Item>
        <Carousel.Item>
            <Card img = 'https://picsum.photos/800/600?random=6'/>
        </Carousel.Item>
        <Carousel.Item>
            <Card img = 'https://picsum.photos/800/600?random=7'/>
        </Carousel.Item>
        <Carousel.Item>
            <Card img = 'https://picsum.photos/800/600?random=8'/>
        </Carousel.Item>
        <Carousel.Item>
            <Card img = 'https://picsum.photos/800/600?random=9'/>
        </Carousel.Item>
        <Carousel.Item>
            <Card img = 'https://picsum.photos/800/600?random=10'/>
        </Carousel.Item>
        <Carousel.Item>
            <Card img = 'https://picsum.photos/800/600?random=11'/>
        </Carousel.Item>
        <Carousel.Item>
            <Card img = 'https://picsum.photos/800/600?random=12'/>
        </Carousel.Item>
        
        </Carousel>
    </section>
  )
};

export default MorePlace;

