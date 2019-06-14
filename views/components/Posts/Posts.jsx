import React, { Component } from 'react';
import Layout from '../Layout/Layout';
import PostSmall from './PostSmall';

class Posts extends Component {
  
handleTitleChange(e){
  this.setState({title:e.target.value})
}
handleSubjectChange(e){
  this.setState({body:e.target.value})
}
    render() {
        return (
            <Layout title="Công thức">
              <section id="services">
                <div className="container">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <a href="/">Trang chủ</a>
                    </li>
                    <li className="breadcrumb-item active">Công thức</li>
                </ol>
                    <div className="row">
                    <div className="col-lg-12 text-center">
                        <h2 className="section-heading text-uppercase">Công thức</h2>
                        <h3 className="section-subheading text-muted">Còn tình cảm nào chân thành hơn tình yêu dành cho thức ăn</h3>
                    </div>
                    </div>
                    <h2>Món chính</h2>
                    <div className="row">
                    <PostSmall>Canh</PostSmall>
                    <PostSmall>Gà</PostSmall>
                    <PostSmall>Gà</PostSmall>
                    <PostSmall>Gà</PostSmall>
                    <PostSmall>Gà</PostSmall>
                    <PostSmall>Gà</PostSmall>
                    <PostSmall>Gà</PostSmall>
                    <PostSmall>Gà</PostSmall>
                  </div><br/>

                  <h2>Món chay</h2>
                    <div className="row">
                    <PostSmall>Gà</PostSmall>
                    <PostSmall>Gà</PostSmall>
                    <PostSmall>Gà</PostSmall>
                    <PostSmall>Gà</PostSmall>
                    <PostSmall>Gà</PostSmall>
                    <PostSmall>Gà</PostSmall>
                    <PostSmall>Gà</PostSmall>
                    <PostSmall>Gà</PostSmall>
                  </div><br/>

                  <h2>Ăn vặt</h2>
                    <div className="row">
                    <PostSmall>Gà</PostSmall>
                    <PostSmall>Gà</PostSmall>
                    <PostSmall>Gà</PostSmall>
                    <PostSmall>Gà</PostSmall>
                    <PostSmall>Gà</PostSmall>
                    <PostSmall>Gà</PostSmall>
                    <PostSmall>Gà</PostSmall>
                    <PostSmall>Gà</PostSmall>
                  </div><br/>

                  <h2>Giảm cân</h2>
                    <div className="row">
                    <PostSmall>Gà</PostSmall>
                    <PostSmall>Gà</PostSmall>
                    <PostSmall>Gà</PostSmall>
                    <PostSmall>Gà</PostSmall>
                    <PostSmall>Gà</PostSmall>
                    <PostSmall>Gà</PostSmall>
                    <PostSmall>Gà</PostSmall>
                    <PostSmall>Gà</PostSmall>
                  </div><br/>

                  <h2>Bánh ngọt</h2>
                    <div className="row">
                    <PostSmall>Gà</PostSmall>
                    <PostSmall>Gà</PostSmall>
                    <PostSmall>Gà</PostSmall>
                    <PostSmall>Gà</PostSmall>
                    <PostSmall>Gà</PostSmall>
                    <PostSmall>Gà</PostSmall>
                    <PostSmall>Gà</PostSmall>
                    <PostSmall>Gà</PostSmall>
                  </div><br/>

                  <h2>Thức uống</h2>
                    <div className="row">
                    <PostSmall>Gà</PostSmall>
                    <PostSmall>Gà</PostSmall>
                    <PostSmall>Gà</PostSmall>
                    <PostSmall>Gà</PostSmall>
                    <PostSmall>Gà</PostSmall>
                    <PostSmall>Gà</PostSmall>
                    <PostSmall>Gà</PostSmall>
                    <PostSmall>Gà</PostSmall>
                  </div>

                </div>
              </section>
            </Layout>
        );
    }
}

export default Posts;