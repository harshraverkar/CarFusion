import React, { useEffect } from "react";
import { Container, Row, Col} from "reactstrap";
import { useParams } from "react-router-dom";
import blogData from "../assets/data/blogData.js";
import Helmet from "../components/Helmet/Helmet";
import { Link } from "react-router-dom";

import "../styles/blog-details.css";

const BlogDetails = () => {
  const { slug } = useParams();
  const blog = blogData.find((blog) => blog.title === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [blog]);

  return (
    <Helmet title={blog.title}>
      <section>
        <Container>
          <Row>
            <Col lg="8" md="8">
              <div className="blog__details">
                <img src={blog.imgUrl} alt="" className="w-100" />
                <h2 className="section__title mt-4">{blog.title}</h2>

                <div className="blog__publisher d-flex align-items-center gap-4 mb-4">
                  <span className="blog__author">
                    <i class="ri-user-line"></i> {blog.author}
                  </span>

                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i class="ri-calendar-line"></i> {blog.date}
                  </span>

                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i class="ri-time-line"></i> {blog.time}
                  </span>
                </div>

                <p className="section__description">{blog.description}</p>
                <h6 className="ps-5 fw-normal">
                <blockquote className="fs-5 text-center " style={{ fontFamily: 'sans-serif' }}>{blog.quote}</blockquote>

                </h6>
                <p className="section__description">{blog.description}</p>
              </div>

            </Col>

            <Col lg="4" md="4">
              <div className="recent__post mb-4">
                <h5 className=" fw-bold">Recent Posts</h5>
              </div>
              {blogData
    .filter((item) => item.title !== blog.title) // Exclude the current post
    .map((item) => (
      <div className="recent__blog-post mb-4" key={item.id}>
        <div className="recent__blog-item d-flex gap-3">
          <img src={item.imgUrl} alt="" className="w-25 rounded-2" />
          <h6>
            <Link to={`/blogs/${item.title}`}>{item.title}</Link> {/* Use item.title here */}
          </h6>
        </div>
      </div>
    ))}
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default BlogDetails;
