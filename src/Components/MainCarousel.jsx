import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './MainCarousel.css'
const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};


export default function MainCarousel() {
    return (
        <Carousel responsive={responsive}
            swipeable={true}
            draggable={true}
            infinite={true}
            autoPlay={true}
        >
            <div> <img className="carousel-image" src="https://rukminim1.flixcart.com/fk-p-flap/844/140/image/5caae9b9cf2ea44c.jpg?q=50" alt="" /></div>
            <div> <img className="carousel-image" src="https://rukminim1.flixcart.com/fk-p-flap/3376/560/image/c0a20efedfd4d36d.jpg?q=50" alt="" /></div>
            <div> <img className="carousel-image" src="https://rukminim1.flixcart.com/fk-p-flap/50/50/image/552eb4d0a182b83f.jpg?q=50" alt="" /></div>
            {/* <div> <img className="carousel-image" src="https://rukminim1.flixcart.com/fk-p-flap/3376/560/image/c0a20efedfd4d36d.jpg?q=50" alt="" /></div> */}
        </Carousel>
    )
}
