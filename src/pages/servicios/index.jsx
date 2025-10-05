import React from 'react'
import MainLayout from '../../layouts/main'
import PageHeader from '../../components/Page-header'
import BlogsList from '../../components/Blogs-List'

const Blogs = () => {
  React.useEffect(() => {
    document.querySelector('body').classList.add('index3')
  }, [])
    return (
      <MainLayout>
        <PageHeader
          title="Nuestros Servicios"
          fullPath={[
            { id: 1, name: "inicio", url: "/" },
            { id: 2, name: "servicios", url: "/servicios" },
          ]}
          image="/assets/img/pg3.jpg"
        />
        <BlogsList />
      </MainLayout>
    );
}

export default Blogs;