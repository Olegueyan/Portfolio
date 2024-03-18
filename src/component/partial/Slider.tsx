import { useEffect, useState } from "react";

interface SliderProps
{
    images: Array<string>;
}

const Slider = (props: SliderProps) =>
{
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isOverlayOpen, setIsOverlayOpen] = useState(false);
    const [overlayImageIndex, setOverlayImageIndex] = useState(0);

    useEffect(() =>
    {
        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
    }, [currentSlide]);

    const nextSlide = () =>
    {
        setCurrentSlide((prevSlide) => (prevSlide === props.images.length - 1 ? 0 : prevSlide + 1));
    };

    const prevSlide = () =>
    {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? props.images.length - 1 : prevSlide - 1));
    };

    const openOverlay = (index: number) =>
    {
        setIsOverlayOpen(true);
        setOverlayImageIndex(index);
    };

    const closeOverlay = () => setIsOverlayOpen(false);

    return (
        <div className="Slider">
            <div className="Slider_slides">
                <button className="Slider_prev" onClick={prevSlide}>
                    &#10094;
                </button>
                {props.images.map((image, index) => (
                    <div key={index} className={index === currentSlide ? "Slider_slides_slide active animate" : "Slider_slides_slide"}>
                        <img src={image} alt={`Slide ${index + 1}`} onClick={() => openOverlay(index)} />
                    </div>
                ))}
                <button className="Slider_next" onClick={nextSlide}>
                    &#10095;
                </button>
            </div>
            {isOverlayOpen && (
                <div className="Overlay" onClick={closeOverlay}>
                    <div className="Overlay_content">
                        <img src={props.images[overlayImageIndex]} alt={`Slide ${overlayImageIndex + 1}`} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Slider;