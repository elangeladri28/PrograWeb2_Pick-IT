import { CCarousel, CCarouselItem, CImage} from "@coreui/react";
import '@coreui/coreui/dist/css/coreui.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProductCarousel = () => {
    return (
        <CCarousel controls>
            <CCarouselItem>
                <CImage className="d-block mw-100" src="../assets/pc-parts.jpg" alt="slide 1" />
            </CCarouselItem>
            <CCarouselItem>
                <CImage className="d-block mw-100" src="../assets/white-parts.jpg" alt="slide 2" />
            </CCarouselItem>
            <CCarouselItem>
                <CImage className="d-block mw-100" src="../assets/red-parts.jpg" alt="slide 3" />
            </CCarouselItem>
        </CCarousel>
    );
}

export default ProductCarousel;