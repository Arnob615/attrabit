import { useEffect, useState } from "react";
import { BiArrowFromBottom } from 'react-icons/bi';
import { classNames } from '../../utils/classNames';


const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        }
    }, []);

    return (
        <div class="fixed bottom-2 right-2">
            <button type="button" 
                    onClick={scrollToTop} 
                    className={classNames(
                    isVisible ? "opacity-100 inline-flex items-center p-2 rounded-full shadow-sm text-white bg-pink-600 transform hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500" : "opacity-0"
                    )}>
                <BiArrowFromBottom class="w-5 h-5" aria-hidden="true" />
            </button>
        </div>
    )

}

export default ScrollToTop;