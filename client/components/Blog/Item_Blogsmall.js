import React, { Component } from 'react';

class Item_Blogsmall extends Component {
    render() {
        return (
            <div className="col-lg-6 portfolio-item">
                <div className="card h-100">
                    <img className="card-img-top" src="/static/images/man.jpg" alt="image" />
                    <div className="card-body">
                        <h4 className="card-title">
                            <a href={this.props.link}>Kinh nghiệm phân biệt và tiêu chí chọn mận Hà Nội tươi, giòn</a>
                        </h4>
                        <p className="card-text">Mùa mận đã đến trong những tháng gần đây từ Bắc vào Nam. Trong khi đó, mận Trung Quốc gắn mác mận Hà Nội gây bối rối cho người tiêu dùng. Vậy hãy lưu ngay những bí kíp để tránh mua nhầm mận Tàu cùng cách chọn được mận tươi ngon.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Item_Blogsmall;