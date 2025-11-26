import React from 'react';
import { Link } from 'react-router-dom';
import { useContent } from '../context/ContentContext';

const Home = () => {
    const { content } = useContent();
    const { hero, reason } = content.home;

    return (
        <>
            {/* slider_area_start */}
            <div className="slider_area">
                <div className="single_slider  d-flex align-items-center slider_bg_1 overlay2">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-9">
                                <div className="slider_text ">
                                    <span>{hero.subtitle}</span>
                                    <h3> {hero.title}</h3>
                                    <p>With so much to consume and such little time, coming up <br />
                                        with relevant title ideas is essential</p>
                                    <Link to="/about" className="boxed-btn3">{hero.buttonText}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* slider_area_end */}

            {/* reson_area_start  */}
            <div className="reson_area section_padding">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="section_title text-center mb-55">
                                <h3><span>{reason.title}</span></h3>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6">
                            <div className="single_reson">
                                <div className="thum">
                                    <div className="thum_1">
                                        <img src="/img/help/1.png" alt="" />
                                    </div>
                                </div>
                                <div className="help_content">
                                    <h4>Collecting Fund</h4>
                                    <p>{reason.description}</p>
                                    <a href="#" className="read_more">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single_reson">
                                <div className="thum">
                                    <div className="thum_1">
                                        <img src="/img/help/2.png" alt="" />
                                    </div>
                                </div>
                                <div className="help_content">
                                    <h4>Blood Camp</h4>
                                    <p>Lorem ipsum, or lipsum as it is
                                        sometimes known, is dummy
                                        text used in laying out print.</p>
                                    <a href="#" className="read_more">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single_reson">
                                <div className="thum">
                                    <div className="thum_1">
                                        <img src="/img/help/3.png" alt="" />
                                    </div>
                                </div>
                                <div className="help_content">
                                    <h4>Friendly Volunteer</h4>
                                    <p>Lorem ipsum, or lipsum as it is
                                        sometimes known, is dummy
                                        text used in laying out print.</p>
                                    <a href="#" className="read_more">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* reson_area_end  */}

            {/* latest_activites_area_start  */}
            <div className="latest_activites_area">
                <div className=" video_bg_1 video_activite  d-flex align-items-center justify-content-center">
                    <a className="popup-video" href="https://www.youtube.com/watch?v=MG3jGHnBVQs">
                        <i className="flaticon-ui"></i>
                    </a>
                </div>
                <div className="container">
                    <div className="row justify-content-end">
                        <div className="col-lg-7">
                            <div className="activites_info">
                                <div className="section_title">
                                    <h3> <span>Watch Our Latest  </span><br />
                                        Activities</h3>
                                </div>
                                <p className="para_1">Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do
                                    eiusmod tempor incididunt  ut labore dolore magna aliqua.
                                    enim minim veniam, quis nostrud exercitation.</p>
                                <p className="para_2">Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do
                                    eiusmod tempor incididunt  ut labore dolore magna aliqua.
                                    enim minim veniam, quis nostrud exercitation. tempor
                                    incididunt  ut labore dolore magna aliqua. enim minim
                                    veniam, quis nostrud exercitation.</p>
                                <a href="#" data-scroll-nav='1' className="boxed-btn4">Donate Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* latest_activites_area_end  */}

            {/* popular_causes_area_start  */}
            <div className="popular_causes_area section_padding">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="section_title text-center mb-55">
                                <h3><span>Popular Causes</span></h3>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="causes_active owl-carousel">
                                <div className="single_cause">
                                    <div className="thumb">
                                        <img src="/img/causes/1.png" alt="" />
                                    </div>
                                    <div className="causes_content">
                                        <div className="custom_progress_bar">
                                            <div className="progress">
                                                <div className="progress-bar" role="progressbar" style={{ width: '30%' }} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100">
                                                    <span className="progres_count">
                                                        30%
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="balance d-flex justify-content-between align-items-center">
                                            <span>Raised: ₦5000.00 </span>
                                            <span>Goal: ₦9000.00 </span>
                                        </div>
                                        <h4>Help us to Send Food</h4>
                                        <p>The passage is attributed to an
                                            unknown typesetter in the century
                                            who is thought</p>
                                        <Link className="read_more" to="/cause-details">Read More</Link>
                                    </div>
                                </div>
                                <div className="single_cause">
                                    <div className="thumb">
                                        <img src="/img/causes/2.png" alt="" />
                                    </div>
                                    <div className="causes_content">
                                        <div className="custom_progress_bar">
                                            <div className="progress">
                                                <div className="progress-bar" role="progressbar" style={{ width: '30%' }} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100">
                                                    <span className="progres_count">
                                                        30%
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="balance d-flex justify-content-between align-items-center">
                                            <span>Raised: ₦5000.00 </span>
                                            <span>Goal: ₦9000.00 </span>
                                        </div>
                                        <h4>Clothes For Everyone</h4>
                                        <p>The passage is attributed to an
                                            unknown typesetter in the century
                                            who is thought</p>
                                        <Link className="read_more" to="/cause-details">Read More</Link>
                                    </div>
                                </div>
                                <div className="single_cause">
                                    <div className="thumb">
                                        <img src="/img/causes/3.png" alt="" />
                                    </div>
                                    <div className="causes_content">
                                        <div className="custom_progress_bar">
                                            <div className="progress">
                                                <div className="progress-bar" role="progressbar" style={{ width: '30%' }} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100">
                                                    <span className="progres_count">
                                                        30%
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="balance d-flex justify-content-between align-items-center">
                                            <span>Raised: ₦5000.00 </span>
                                            <span>Goal: ₦9000.00 </span>
                                        </div>
                                        <h4>Water For All Children</h4>
                                        <p>The passage is attributed to an
                                            unknown typesetter in the century
                                            who is thought</p>
                                        <Link className="read_more" to="/cause-details">Read More</Link>
                                    </div>
                                </div>
                                <div className="single_cause">
                                    <div className="thumb">
                                        <img src="/img/causes/1.png" alt="" />
                                    </div>
                                    <div className="causes_content">
                                        <div className="custom_progress_bar">
                                            <div className="progress">
                                                <div className="progress-bar" role="progressbar" style={{ width: '30%' }} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100">
                                                    <span className="progres_count">
                                                        30%
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="balance d-flex justify-content-between align-items-center">
                                            <span>Raised: ₦5000.00 </span>
                                            <span>Goal: ₦9000.00 </span>
                                        </div>
                                        <h4>Help us to Send Food</h4>
                                        <p>The passage is attributed to an
                                            unknown typesetter in the century
                                            who is thought</p>
                                        <Link className="read_more" to="/cause-details">Read More</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* popular_causes_area_end  */}

            {/* counter_area_start  */}
            <div className="counter_area">
                <div className="container">
                    <div className="counter_bg overlay">
                        <div className="row">
                            <div className="col-lg-3 col-md-6">
                                <div className="single_counter d-flex align-items-center justify-content-center">
                                    <div className="icon">
                                        <i className="flaticon-calendar"></i>
                                    </div>
                                    <div className="events">
                                        <h3 className="counter">120</h3>
                                        <p>Finished Event</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="single_counter d-flex align-items-center justify-content-center">
                                    <div className="icon">
                                        <i className="flaticon-heart-beat"></i>
                                    </div>
                                    <div className="events">
                                        <h3 className="counter">120</h3>
                                        <p>Finished Event</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="single_counter d-flex align-items-center justify-content-center">
                                    <div className="icon">
                                        <i className="flaticon-in-love"></i>
                                    </div>
                                    <div className="events">
                                        <h3 className="counter">120</h3>
                                        <p>Finished Event</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="single_counter d-flex align-items-center justify-content-center">
                                    <div className="icon">
                                        <i className="flaticon-hug"></i>
                                    </div>
                                    <div className="events">
                                        <h3 className="counter">120</h3>
                                        <p>Finished Event</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* counter_area_end  */}

            {/* our_volunteer_area_start  */}
            <div className="our_volunteer_area section_padding">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="section_title text-center mb-55">
                                <h3><span>Our Volunteer</span></h3>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6">
                            <div className="single_volenteer">
                                <div className="volenteer_thumb">
                                    <img src="/img/volenteer/1.png" alt="" />
                                </div>
                                <div className="voolenteer_info d-flex align-items-end">
                                    <div className="social_links">
                                        <ul>
                                            <li>
                                                <a href="#"> <i className="fa fa-facebook"></i> </a>
                                            </li>
                                            <li>
                                                <a href="#"> <i className="fa fa-pinterest"></i> </a>
                                            </li>
                                            <li>
                                                <a href="#"> <i className="fa fa-linkedin"></i> </a>
                                            </li>
                                            <li>
                                                <a href="#"> <i className="fa fa-twitter"></i> </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="info_inner">
                                        <h4>Sakil khan</h4>
                                        <p>Donner</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single_volenteer">
                                <div className="volenteer_thumb">
                                    <img src="/img/volenteer/2.png" alt="" />
                                </div>
                                <div className="voolenteer_info d-flex align-items-end">
                                    <div className="social_links">
                                        <ul>
                                            <li>
                                                <a href="#"> <i className="fa fa-facebook"></i> </a>
                                            </li>
                                            <li>
                                                <a href="#"> <i className="fa fa-pinterest"></i> </a>
                                            </li>
                                            <li>
                                                <a href="#"> <i className="fa fa-linkedin"></i> </a>
                                            </li>
                                            <li>
                                                <a href="#"> <i className="fa fa-twitter"></i> </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="info_inner">
                                        <h4>Emran Ahmed</h4>
                                        <p>Volunteer</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single_volenteer">
                                <div className="volenteer_thumb">
                                    <img src="/img/volenteer/3.png" alt="" />
                                </div>
                                <div className="voolenteer_info d-flex align-items-end">
                                    <div className="social_links">
                                        <ul>
                                            <li>
                                                <a href="#"> <i className="fa fa-facebook"></i> </a>
                                            </li>
                                            <li>
                                                <a href="#"> <i className="fa fa-pinterest"></i> </a>
                                            </li>
                                            <li>
                                                <a href="#"> <i className="fa fa-linkedin"></i> </a>
                                            </li>
                                            <li>
                                                <a href="#"> <i className="fa fa-twitter"></i> </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="info_inner">
                                        <h4>Sabbir Ahmed</h4>
                                        <p>Volunteer</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* our_volunteer_area_end  */}

            {/* news__area_start  */}
            <div className="news__area section_padding">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="section_title text-center mb-55">
                                <h3><span>News & Updates</span></h3>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="news_active owl-carousel">
                                <div className="single__blog d-flex align-items-center">
                                    <div className="thum">
                                        <img src="/img/news/1.png" alt="" />
                                    </div>
                                    <div className="newsinfo">
                                        <span>July 18, 2019</span>
                                        <Link to="/single-blog">
                                            <h3>Pure Water Is More
                                                Essential</h3>
                                        </Link>
                                        <p>The passage experienced a
                                            surge in popularity during the
                                            1960s when used it on their
                                            sheets, and again.</p>
                                        <Link className="read_more" to="/single-blog">Read More</Link>
                                    </div>
                                </div>
                                <div className="single__blog d-flex align-items-center">
                                    <div className="thum">
                                        <img src="/img/news/2.png" alt="" />
                                    </div>
                                    <div className="newsinfo">
                                        <span>July 18, 2019</span>
                                        <Link to="/single-blog">
                                            <h3>Pure Water Is More
                                                Essential</h3>
                                        </Link>
                                        <p>The passage experienced a
                                            surge in popularity during the
                                            1960s when used it on their
                                            sheets, and again.</p>
                                        <Link className="read_more" to="/single-blog">Read More</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* news__area_end  */}

            <div data-scroll-index='1' className="make_donation_area section_padding">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="section_title text-center mb-55">
                                <h3><span>Make a Donation</span></h3>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <form action="#" className="donation_form">
                                <div className="row align-items-center">
                                    <div className="col-md-4">
                                        <div className="single_amount">
                                            <div className="input_field">
                                                <div className="input-group">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text" id="basic-addon1">₦</span>
                                                    </div>
                                                    <input type="text" className="form-control" placeholder="40,200" aria-label="Username" aria-describedby="basic-addon1" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="single_amount">
                                            <div className="fixed_donat d-flex align-items-center justify-content-between">
                                                <div className="select_prise">
                                                    <h4>Select Amount:</h4>
                                                </div>
                                                <div className="single_doonate">
                                                    <input type="radio" id="blns_1" name="radio-group" defaultChecked />
                                                    <label htmlFor="blns_1">10</label>
                                                </div>
                                                <div className="single_doonate">
                                                    <input type="radio" id="blns_2" name="radio-group" />
                                                    <label htmlFor="blns_2">30</label>
                                                </div>
                                                <div className="single_doonate">
                                                    <input type="radio" id="Other" name="radio-group" />
                                                    <label htmlFor="Other">Other</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="donate_now_btn text-center">
                                <a href="#" className="boxed-btn4">Donate Now</a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
