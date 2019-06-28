import React, { Component } from 'react';

class Content extends Component {
    render() {
        return (
            <section id="services">
                <div className="container">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <a href="index.html">Trang chủ</a>
                        </li>
                        <li className="breadcrumb-item active">Blog</li>
                    </ol>
                    <div className="row">
                        <div className="col-md-8">
                            <div className="card mb-4">
                                <img className="card-img-top" src="/static/images/mangcut.jpg" alt="Card image cap" />
                                <div className="card-body">
                                    <h2 className="card-title"><a href="">9 loại trái cây mùa hè đặc sản Việt Nam nhất định phải thưởng thức ngay kẻo lỡ</a></h2>
                                    <p className="card-text">Ngày đăng: 03/06/2019</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="mb-3">
                                <div className="search-container">
                                    <form action="/sss">
                                        <input type="text" placeholder="Nội dung..." name="search" />
                                        <button type="submit"><i className="fa fa-search"></i></button>
                                    </form>
                                </div>
                            </div>
                            <div className="card my-4">

                            </div>
                            <div className="card my-4">

                            </div>
                        </div>
                    </div>
                    <h3 className="my-4">Tin nổi bật</h3>
                    <div className="row">
                        <div className="col-lg-6 portfolio-item">
                            <div className="card h-100">
                                <a href="#"><img className="card-img-top" src="/static/images/man.jpg" alt /></a>
                                <div className="card-body">
                                    <h4 className="card-title">
                                        <a href="#">Kinh nghiệm phân biệt và tiêu chí chọn mận Hà Nội tươi, giòn</a>
                                    </h4>
                                    <p className="card-text">Mùa mận đã đến trong những tháng gần đây từ Bắc vào Nam. Trong khi đó, mận Trung Quốc gắn mác mận Hà Nội gây bối rối cho người tiêu dùng. Vậy hãy lưu ngay những bí kíp để tránh mua nhầm mận Tàu cùng cách chọn được mận tươi ngon.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 portfolio-item">
                            <div className="card h-100">
                                <a href="#"><img className="card-img-top" src="/static/images/banhu.jpg" alt /></a>
                                <div className="card-body">
                                    <h4 className="card-title">
                                        <a href="#">Vòng quanh châu Á khám phá nét độc đáo trong phong tục ăn mừng Tết Đoan Ngọ (mùng 5 tháng 5)</a>
                                    </h4>
                                    <p className="card-text">Vì chịu ảnh hưởng của nền văn hóa Hán học nên không chỉ Việt Nam mà một số nước châu Á vẫn gìn giữ truyền thống mừng tết Đoan Ngọ (mùng 5 tháng 5 âm lịch) vào hằng năm. </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 portfolio-item">
                            <div className="card h-100">
                                <a href="#"><img className="card-img-top" src="/static/images/khoedep.jpg" alt /></a>
                                <div className="card-body">
                                    <h4 className="card-title">
                                        <a href="#">Ăn uống healthy với thực đơn 3 món ăn đẹp đa khỏe dáng từ cam</a>
                                    </h4>
                                    <p className="card-text">Xu hướng ăn uống "healthy" đang oanh tạc thực đơn ăn uống của rất nhiều chị em, nhất là dân văn phòng. Cam là một trong những nguyên liệu được ưu ái trong rất nhiều thực đơn healthy. Cùng thực hiện menu 3 món ăn tốt cho sức khỏe và vóc dáng từ cam: ức gà sốt cam, salad bơ cam và nước cam thạch sương sáo nhé!</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 portfolio-item">
                            <div className="card h-100">
                                <a href="#"><img className="card-img-top" src="/static/images/monchay.jpg" alt /></a>
                                <div className="card-body">
                                    <h4 className="card-title">
                                        <a href="#">10 món chay ngon, độc đáo cho mùa lễ Phật Đản thêm thịnh soạn</a>
                                    </h4>
                                    <p className="card-text">Nếu trước đây mọi người thường quan niệm ăn chay chỉ dành cho tín đồ Phật giáo thì ngày nay đã được lan rộng đến những người không tôn giáo. Vì món ăn chay không chỉ đa dạng mà còn được chăm chút đẹp mắt, ngon miệng. Hãy cùng khám phá 10 món chay ngon và đầy màu sắc qua bài viết này nhé!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ul class="pagination justify-content-center">
                        <li class="page-item">
                            <a class="page-link" href="#" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                                <span class="sr-only">Previous</span>
                            </a>
                        </li>
                        <li class="page-item">
                            <a class="page-link" href="#">1</a>
                        </li>
                        <li class="page-item">
                            <a class="page-link" href="#">2</a>
                        </li>
                        <li class="page-item">
                            <a class="page-link" href="#">3</a>
                        </li>
                        <li class="page-item">
                            <a class="page-link" href="#" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                                <span class="sr-only">Next</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </section>
        );
    }
}

export default Content;