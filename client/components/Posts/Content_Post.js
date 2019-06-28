import React, { Component } from 'react';
import PostSmall from './PostSmall';

class Content_Post extends Component {
    render() {
        return (
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
                    <div className="post" id="portfolio">
                        <h2>Món chính</h2>
                        <div className="row">
                            <PostSmall href="/static/images/thitheo.jpg">Thịt heo xào tiêu</PostSmall>
                            <PostSmall href="/static/images/raumuc.jpg">Râu mực nướng áp chảo</PostSmall>
                            <PostSmall href="/static/images/thitbachi.jpg">Thịt ba chỉ rang tôm</PostSmall>
                            <PostSmall href="/static/images/sushi.jpg">Sushi hoa</PostSmall>
                            <PostSmall href="/static/images/canhngao.jpg">Canh ngao nấu đậu hủ</PostSmall>
                            <PostSmall href="/static/images/mixao.jpg">Mì xào bò rau cải</PostSmall>
                            <PostSmall href="/static/images/cathu.jpg">Cá thu chiên giòn sốt ớt</PostSmall>
                            <PostSmall href="/static/images/tomchien.jpg">Tôm chiên hành gừng</PostSmall>
                        </div><br />

                        <h2>Món chay</h2>
                        <div className="row">
                            <PostSmall href="/static/images/nammo.jpg">Nấm mỡ xào chay</PostSmall>
                            <PostSmall href="/static/images/bunbi.jpg">Bún bì chay</PostSmall>
                            <PostSmall href="/static/images/tauhuky.jpg">Tàu hũ ky cuốn chay</PostSmall>
                            <PostSmall href="/static/images/canhraucu.jpg">Canh rau củ chay</PostSmall>
                            <PostSmall href="/static/images/dauhuchien.jpg">Đậu hũ non chiên xù</PostSmall>
                            <PostSmall href="/static/images/goichay.jpg">Gỏi chay</PostSmall>
                            <PostSmall href="/static/images/michay.jpg">Mì chay kiểu Nhật</PostSmall>
                            <PostSmall href="/static/images/mixaogion.jpg">Mì xào giòn chay</PostSmall>
                        </div><br />

                        <h2>Ăn vặt</h2>
                        <div className="row">
                            <PostSmall href="/static/images/banhgato.jpg">Bánh gato cuộn dâu tây</PostSmall>
                            <PostSmall href="/static/images/chesua.jpg">Chè sữa đậu đỏ khoai môn</PostSmall>
                            <PostSmall href="/static/images/kemchuoi.jpg">Kem chuối</PostSmall>
                            <PostSmall href="/static/images/chehatsen.jpg">Chè hạt sen nhãn nhục</PostSmall>
                            <PostSmall href="/static/images/khoaitay.jpg">Khoai tây nướng cay</PostSmall>
                            <PostSmall href="/static/images/banhtrang.jpg">Bánh tráng trộn</PostSmall>
                            <PostSmall href="/static/images/pudding.jpg">Pudding cà phê</PostSmall>
                            <PostSmall href="/static/images/phomai.jpg">Bánh phô mai cuộn kem</PostSmall>
                        </div><br />

                        <h2>Giảm cân</h2>
                        <div className="row">
                            <PostSmall href="/static/images/dau.jpg">Salad dâu</PostSmall>
                            <PostSmall href="/static/images/chagio.jpg">Chả giò chay</PostSmall>
                            <PostSmall href="/static/images/oi.jpg">Nước ép ổi</PostSmall>
                            <PostSmall href="/static/images/bungao.jpg">Bún gạo xào chay</PostSmall>
                            <PostSmall href="/static/images/sandwich.jpg">Bánh mì sandwich dưa leo</PostSmall>
                            <PostSmall href="/static/images/cantay.jpg">Nước ép cần tây</PostSmall>
                            <PostSmall href="/static/images/canhngheu.jpg">Canh nghêu đậu hũ</PostSmall>
                            <PostSmall href="/static/images/ucga.jpg">Salad ức gà bắp cải tím</PostSmall>
                        </div><br />

                        <h2>Thức uống</h2>
                        <div className="row">
                            <PostSmall href="/static/images/suahatsen.jpg">Sữa hạt sen</PostSmall>
                            <PostSmall href="/static/images/tratac.jpg">Trà tắc</PostSmall>
                            <PostSmall href="/static/images/chanh.jpg">Chanh mật ong</PostSmall>
                            <PostSmall href="/static/images/duahau.jpg">Nước ép dưa hấu</PostSmall>
                            <PostSmall href="/static/images/chanhbacha.jpg">Siro chanh bạc hà</PostSmall>
                            <PostSmall href="/static/images/vai.jpg">Trà vải</PostSmall>
                            <PostSmall href="/static/images/caphe.jpg">Cà phê sữa nóng</PostSmall>
                            <PostSmall href="/static/images/luu.jpg">Nước ép lựu và chanh tươi</PostSmall>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Content_Post;