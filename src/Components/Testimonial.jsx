import React, { useRef } from "react";
import './Testimonial.css';
import next_icon from '../assets/next-icon.png';
import back_icon from '../assets/back-icon.png';
import user_1 from '../assets/user-1.png';
import user_2 from '../assets/user-2.png';
import user_3 from '../assets/user-3.png';
import user_4 from '../assets/user-4.png';
const Testimonial = () => {

    const slider = useRef();

    let tx = 0;

    const slideforward = () => {

        if (tx > -50) {

            tx -= 25;

        }

        slider.current.style.transform = `translateX(${tx}%)`;
    }


    const slidebackward = () => {

        if (tx < 0) {
            tx += 25;
        }


        slider.current.style.transform = `translateX(${tx}%)`;

    }

    return (
        <div className="testimonials">
            <img src={next_icon} alt="error" className="next-btn" onClick={slideforward} />
            <img src={back_icon} alt="error" className="back-btn" onClick={slidebackward} />
            <div className="slider">
                <ul ref={slider}>
                    <li>
                        <div className="slide">
                            <div className="userinfo">
                                <img src={user_1} alt="error" />
                                <div>
                                    <h3>William Jackson</h3>
                                    <span>Edusity,USA</span>
                                </div>
                            </div>
                            <p>choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="userinfo">
                                <img src={user_2} alt="error" />
                                <div>
                                    <h3>Steve Smith</h3>
                                    <span>Edusity,USA</span>
                                </div>
                            </div>
                            <p>choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="userinfo">
                                <img src={user_3} alt="error" />
                                <div>
                                    <h3>Larry Page</h3>
                                    <span>Edusity,USA</span>
                                </div>
                            </div>
                            <p>choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="userinfo">
                                <img src={user_4} alt="error" />
                                <div>
                                    <h3>Barack Ostin</h3>
                                    <span>Edusity,USA</span>
                                </div>
                            </div>
                            <p>choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Testimonial;

