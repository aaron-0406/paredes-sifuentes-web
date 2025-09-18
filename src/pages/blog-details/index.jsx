import React from "react";
import MainLayout from "../../layouts/main";
import PageHeader from "../../components/Page-header";
import PostDetails from "../../components/Post-details";

const BlogDetails = () => {
  React.useEffect(() => {
    document.querySelector('body').classList.add('index3')
  }, [])
  return (
    <MainLayout>
      <PageHeader
        title="post details"
        fullPath={[
          { id: 1, name: "inicio", url: "/home" },
          { id: 2, name: "servicios", url: "/services" },
          { id: 3, name: "especialidad", url: "/blog-details" },
        ]}
      />
      <PostDetails />
    </MainLayout>
  );
};

export default BlogDetails;
