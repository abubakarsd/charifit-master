import React from 'react';
import Bradcam from '../components/Bradcam';
import BlogSidebar from '../components/BlogSidebar';
import { Link } from 'react-router-dom';

const Blog = () => {
    return (
        <>
            <Bradcam title="Blog" />

            {/* ================Blog Area ================= */}
            <section className="blog_area section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 mb-5 mb-lg-0">
                            <div className="blog_left_sidebar">
                                <article className="blog_item">
                                    <div className="blog_item_img">
                                        <img className="card-img rounded-0" src="/img/blog/single_blog_1.png" alt="" />
                                        <a href="#" className="blog_item_date">
                                            <h3>15</h3>
                                            <p>Jan</p>
                                        </a>
                                    </div>

                                    <div className="blog_details">
                                        <Link className="d-inline-block" to="/single-blog">
                                            <h2>Google inks pact for new 35-storey office</h2>
                                        </Link>
                                        <p>That dominion stars lights dominion divide years for fourth have don't stars is that
                                            he earth it first without heaven in place seed it second morning saying.</p>
                                        <ul className="blog-info-link">
                                            <li><a href="#"><i className="fa fa-user"></i> Travel, Lifestyle</a></li>
                                            <li><a href="#"><i className="fa fa-comments"></i> 03 Comments</a></li>
                                        </ul>
                                    </div>
                                </article>

                                <article className="blog_item">
                                    <div className="blog_item_img">
                                        <img className="card-img rounded-0" src="/img/blog/single_blog_2.png" alt="" />
                                        <a href="#" className="blog_item_date">
                                            <h3>15</h3>
                                            <p>Jan</p>
                                        </a>
                                    </div>

                                    <div className="blog_details">
                                        <Link className="d-inline-block" to="/single-blog">
                                            <h2>Google inks pact for new 35-storey office</h2>
                                        </Link>
                                        <p>That dominion stars lights dominion divide years for fourth have don't stars is that
                                            he earth it first without heaven in place seed it second morning saying.</p>
                                        <ul className="blog-info-link">
                                            <li><a href="#"><i className="fa fa-user"></i> Travel, Lifestyle</a></li>
                                            <li><a href="#"><i className="fa fa-comments"></i> 03 Comments</a></li>
                                        </ul>
                                    </div>
                                </article>

                                <article className="blog_item">
                                    <div className="blog_item_img">
                                        <img className="card-img rounded-0" src="/img/blog/single_blog_3.png" alt="" />
                                        <a href="#" className="blog_item_date">
                                            <h3>15</h3>
                                            <p>Jan</p>
                                        </a>
                                    </div>

                                    <div className="blog_details">
                                        <Link className="d-inline-block" to="/single-blog">
                                            <h2>Google inks pact for new 35-storey office</h2>
                                        </Link>
                                        <p>That dominion stars lights dominion divide years for fourth have don't stars is that
                                            he earth it first without heaven in place seed it second morning saying.</p>
                                        <ul className="blog-info-link">
                                            <li><a href="#"><i className="fa fa-user"></i> Travel, Lifestyle</a></li>
                                            <li><a href="#"><i className="fa fa-comments"></i> 03 Comments</a></li>
                                        </ul>
                                    </div>
                                </article>

                                <article className="blog_item">
                                    <div className="blog_item_img">
                                        <img className="card-img rounded-0" src="/img/blog/single_blog_4.png" alt="" />
                                        <a href="#" className="blog_item_date">
                                            <h3>15</h3>
                                            <p>Jan</p>
                                        </a>
                                    </div>

                                    <div className="blog_details">
                                        <Link className="d-inline-block" to="/single-blog">
                                            <h2>Google inks pact for new 35-storey office</h2>
                                        </Link>
                                        <p>That dominion stars lights dominion divide years for fourth have don't stars is that
                                            he earth it first without heaven in place seed it second morning saying.</p>
                                        <ul className="blog-info-link">
                                            <li><a href="#"><i className="fa fa-user"></i> Travel, Lifestyle</a></li>
                                            <li><a href="#"><i className="fa fa-comments"></i> 03 Comments</a></li>
                                        </ul>
                                    </div>
                                </article>

                                <article className="blog_item">
                                    <div className="blog_item_img">
                                        <img className="card-img rounded-0" src="/img/blog/single_blog_5.png" alt="" />
                                        <a href="#" className="blog_item_date">
                                            <h3>15</h3>
                                            <p>Jan</p>
                                        </a>
                                    </div>

                                    <div className="blog_details">
                                        <Link className="d-inline-block" to="/single-blog">
                                            <h2>Google inks pact for new 35-storey office</h2>
                                        </Link>
                                        <p>That dominion stars lights dominion divide years for fourth have don't stars is that
                                            he earth it first without heaven in place seed it second morning saying.</p>
                                        <ul className="blog-info-link">
                                            <li><a href="#"><i className="fa fa-user"></i> Travel, Lifestyle</a></li>
                                            <li><a href="#"><i className="fa fa-comments"></i> 03 Comments</a></li>
                                        </ul>
                                    </div>
                                </article>

                                <nav className="blog-pagination justify-content-center d-flex">
                                    <ul className="pagination">
                                        <li className="page-item">
                                            <a href="#" className="page-link" aria-label="Previous">
                                                <i className="ti-angle-left"></i>
                                            </a>
                                        </li>
                                        <li className="page-item">
                                            <a href="#" className="page-link">1</a>
                                        </li>
                                        <li className="page-item active">
                                            <a href="#" className="page-link">2</a>
                                        </li>
                                        <li className="page-item">
                                            <a href="#" className="page-link" aria-label="Next">
                                                <i className="ti-angle-right"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <BlogSidebar />
                    </div>
                </div>
            </section>
            {/* ================Blog Area ================= */}
        </>
    );
};

export default Blog;
