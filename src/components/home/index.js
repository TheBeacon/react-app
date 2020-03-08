import React, { Component } from 'react'
import { Carousel, WingBlank } from 'antd-mobile';
import './index.css'
export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [
                {
                    id: 1,
                    img: "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/68caca6f6cda76280dabe48ca92f23a7.jpg?thumb=1&w=720&h=360",
                },
                {
                    id: 2,
                    img: "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/4b223e8d31a49b32e28bfc891df909f0.jpg?thumb=1&w=720&h=360"
                },
                {
                    id: 3,
                    img: "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/8ab01cce3c45907bebb8df28086ac3ca.jpg?thumb=1&w=720&h=360"
                }
            ],
            imgHeight: "3.6rem",
            list: [
                {
                    id: 1,
                    img: "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/cb65daec7ef7b52cc785f88f78efba37.png?thumb=1&w=144&h=152"
                },
                {
                    id: 2,
                    img: "//i8.mifile.cn/v1/a1/eb5024fe-dfe3-6e53-3e18-675bef5fa06e.webp"
                },
                {
                    id: 3,
                    img: "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/8a3d25fdc76472277b6d342d12aa7ebe.jpg?thumb=1&w=144&h=152"
                },
                {
                    id: 4,
                    img: "//i8.mifile.cn/v1/a1/e8bc849a-0a3b-21a0-6810-7da3a3903dee.webp"
                },
                {
                    id: 5,
                    img: "//i8.mifile.cn/v1/a1/7dbcbf87-6a58-adb6-2f3f-bb3dae3e9c80.webp"
                },
                {
                    id: 6,
                    img: "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/64f3988b6216e4c1ab62a7f50df3e816.png?thumb=1&w=144&h=152"
                },
                {
                    id: 7,
                    img: "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/9ea68dee2bfa0e55a82236b0d968e975.png?thumb=1&w=144&h=152"
                },
                {
                    id: 8,
                    img: "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/96c780016ea196743905dc93f9249c39.png?thumb=1&w=144&h=152"
                },
                {
                    id: 9,
                    img: "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/9425031cdd7af22d9a23a5ae16d1f57c.jpg?thumb=1&w=144&h=152"
                },
                {
                    id: 10,
                    img: "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/f11f9df6b0b0b428f8c8fc3267131830.png?thumb=1&w=144&h=152"
                },
            ]
        }
    }
    componentDidMount() {
        // simulate img loading
        setTimeout(() => {
            this.setState({

            });
        }, 100);
    }
    render() {
        console.log(this.state);
        return (
            <div id="home">
                <div className="header">
                    <div className="search">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAAAyCAYAAAD2vz2aAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MjQ2OUE2MkU0RTQ4MTFFNzgxOTZBRDJFQjk4Qjk0NjQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MjQ2OUE2MkY0RTQ4MTFFNzgxOTZBRDJFQjk4Qjk0NjQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpCOUQ0QkM2RjREQ0MxMUU3ODE5NkFEMkVCOThCOTQ2NCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpCOUQ0QkM3MDREQ0MxMUU3ODE5NkFEMkVCOThCOTQ2NCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PiL8gcIAAAF1SURBVHja7Ju/LwRRFEbf+FVsQ0dBdJKNSksUSqVCr6AhKxGVwn+gVUpQEI1So5XoZUOhEbKMDiESIeOTzPbvzpoxz5wvOd3duzsn++7cSXajZMU9OOeGXPmTiHtxIU7FoYh/oe+ZmPKsjSMJS1yY+RS7YrNDcTdi1Le4y4WbHrEorsRcUW8asrB2BsSxWEeYLVtiCWG2bIsJhPmnV+zkeV3/TZhLv2HzCLNlFWG2TIqRvHYZa97FR84XXEvnUSeZEft/LexZDIvXnIVFop6uCQ3RnaHHeBmO5FMBstrPjZdiTUyLlww9Bqs6w87FcobX9Vd56B+IZoZjXVlhP0f0qAwfJKS1ookw+w0HYaEFYQVs+j4ZE7Oed6o3sVfA00OphW2IBUN9S5xU+Uhad6A+ZhhDnyAMYQhDGMIQRhCGMIQhDGEEYQhDGMIQhjCCMIQhDGEIIwhDWFHCLP81vPOsezT0/BK3nj0tP1i59qxrGXrG3wIMAK5yNsqRAjAyAAAAAElFTkSuQmCC" />
                        <input type="text" placeholder="搜索商品名称" />
                        <span className="iconfont icon-gerenzhongxin1"></span>
                    </div>
                    <ul className="list1">
                        <li>推荐</li>
                        <li>手机</li>
                        <li>智能</li>
                        <li>电视</li>
                        <li>笔记</li>
                        <li>家电</li>
                    </ul>
                </div>
                <div className="main">
                    <WingBlank>
                        <Carousel autoplay={true}>
                            {
                                this.state.data.map((item) => {
                                    return <ul key={item.id}>
                                        <li>
                                            <img style={{ width: '7.6rem', height: this.state.imgHeight }} src={item.img} />
                                        </li>
                                    </ul>
                                })
                            }
                        </Carousel>
                    </WingBlank>
                    <ul className="list">
                        {
                            this.state.list.map((item) => {
                                return <li key={item.id}><img src={item.img} /></li>
                            })
                        }
                    </ul>
                    <div className="multi-pro">
                        <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/d692a30ee3d586c4274575eec255d3c5.jpg?thumb=1&w=358&h=508" />
                        <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/4aea81c738383c9787b49c3d5e6a7ab0.jpg?thumb=1&w=358&h=252" />
                        <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/267e988a99b5cf4e960747e8aa5fa831.jpg?thumb=1&w=358&h=252" />
                    </div>
                    <p className="img1"><a><img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/e43b5a06b599931dfb06538c7e2c5c2f.jpg?thumb=1&w=720&h=280" /></a></p>
                    <p className="culling">
                        <a>
                            <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/e32eea5c3c27062019f9ac6434b351df.jpg?thumb=1&w=720&h=440" />
                        </a>
                    </p>
                </div>
            </div>
        )
    }
}
