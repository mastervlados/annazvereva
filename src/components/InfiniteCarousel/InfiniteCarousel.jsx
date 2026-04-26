// AdaptiveCarousel.jsx
import { useRef, useEffect, useState, useCallback } from 'react';
import styles from './InfiniteCarousel.module.scss';

function InfiniteCarousel({ images }) {
  const trackRef = useRef(null);
  const [showPrevBtn, setShowPrevBtn] = useState(false);
  const [showNextBtn, setShowNextBtn] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Проверка, нужно ли показывать кнопки навигации
  const checkButtons = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    const { scrollLeft, scrollWidth, clientWidth } = track;
    setShowPrevBtn(scrollLeft > 0);
    setShowNextBtn(scrollLeft + clientWidth < scrollWidth - 5);
  }, []);

  // Проверка при загрузке и ресайзе
  useEffect(() => {
    checkButtons();
    window.addEventListener('resize', checkButtons);
    return () => window.removeEventListener('resize', checkButtons);
  }, [checkButtons, images]);

  // Прокрутка влево
  const scrollPrev = () => {
    if (trackRef.current) {
      const cardWidth = trackRef.current.children[0]?.offsetWidth || 200;
      trackRef.current.scrollBy({ left: -cardWidth - 16, behavior: 'smooth' });
      setTimeout(checkButtons, 300);
    }
  };

  // Прокрутка вправо
  const scrollNext = () => {
    if (trackRef.current) {
      const cardWidth = trackRef.current.children[0]?.offsetWidth || 200;
      trackRef.current.scrollBy({ left: cardWidth + 16, behavior: 'smooth' });
      setTimeout(checkButtons, 300);
    }
  };

  // Drag to scroll (мышкой)
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - trackRef.current.offsetLeft);
    setScrollLeft(trackRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - trackRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    trackRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    checkButtons();
  };

  return (
    <div className={styles.carousel}>
      {/* Кнопка "назад" */}
      {showPrevBtn && (
        <button 
          className={`${styles.btn} ${styles.btnPrev}`} 
          onClick={scrollPrev}
          aria-label="Прокрутить назад"
        >
          ←
        </button>
      )}
      
      {/* Трек с фото */}
      <div 
        ref={trackRef}
        className={`${styles.track} ${isDragging ? styles.dragging : ''}`}
        onScroll={checkButtons}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        {images.map((image, idx) => (
          <div key={idx} className={styles.slide}>
            <img 
              src={image.src} 
              alt={image.alt || `Фото ${idx + 1}`}
              className={styles.image}
              draggable={false}
            />
            {image.name && <div className={styles.name}>{image.name}</div>}
          </div>
        ))}
      </div>
      
      {/* Кнопка "вперед" */}
      {showNextBtn && (
        <button 
          className={`${styles.btn} ${styles.btnNext}`} 
          onClick={scrollNext}
          aria-label="Прокрутить вперед"
        >
          →
        </button>
      )}
    </div>
  );
}

export default InfiniteCarousel;