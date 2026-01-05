/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import Blog1Data from "../../data/blog1.json";
import Link from "next/link";
import thumparallaxUp from "../../common/thumparallaxUp";

const BlogsList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 3;

  useEffect(() => {
    setTimeout(() => {
      if (window.simpleParallax) thumparallaxUp();
    }, 1000);
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = Blog1Data.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(Blog1Data.length / postsPerPage);

  return (
    <>
      <section className="blog-pg section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="posts">
                {currentPosts.map((item) => {
                  const linkServiceDetail = `/servicios/${item.slug}`;
                  return (
                    <div className="item mb-80" key={item.id}>
                      <div className="img">
                        <Link href={linkServiceDetail}>
                          <a>
                            <img
                              src={item.image}
                              alt=""
                              className="thumparallax"
                            />
                          </a>
                        </Link>
                      </div>
                      <div className="content">
                        <div className="date">
                          <h5>
                            <Link href={linkServiceDetail}>
                              <a>
                                <span className="num">{item.date2[1]}</span>
                                {/* <span>{item.date2[0]}</span> */}
                              </a>
                            </Link>
                          </h5>
                        </div>
                        <div className="cont">
                          <div className="tags">
                            <Link href="#">Servicios</Link>
                            <Link href="/">{item.by}</Link>
                          </div>
                          <h4 className="title">
                            <Link href={linkServiceDetail}>{item.title}</Link>
                          </h4>
                          <p>{item.description}</p>
                          <Link href={linkServiceDetail} className="more">
                            Leer Más
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                })}
                <div className="pagination">
                  {[...Array(totalPages)].map((_, i) => (
                    <span
                      key={i}
                      className={currentPage === i + 1 ? "active" : ""}
                      onClick={() => setCurrentPage(i + 1)}
                      style={{ cursor: "pointer" }}
                    >
                      <Link
                        href=""
                        onClick={(e) => {
                          e.preventDefault();
                          setCurrentPage(i + 1);
                        }}
                        className={currentPage === i + 1 ? "active" : ""}
                      >
                        <a>{i + 1}</a>
                      </Link>
                    </span>
                  ))}

                  {currentPage < totalPages && (
                    <span
                      onClick={() => setCurrentPage(currentPage + 1)}
                      style={{ cursor: "pointer" }}
                    >
                      <Link href="#">
                        <a>
                          <i className="fas fa-angle-right"></i>
                        </a>
                      </Link>
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogsList;
