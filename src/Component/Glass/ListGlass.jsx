import React, { Component } from 'react'
import glass from './glass.json';
import styleGlass from './glass.css';

export default class ListGlassess extends Component {
    list = glass;
    state = {
        glass: this.list[0]
    };
    renderbody = () => {
        let temp = [];
        for (let i = 0; i < this.list.length; i++) {
            temp.push(<img src={"./glassesImage/g" + (i + 1) + ".jpg"} alt=""
                key={i} onClick={() => { this.handleChangeGlasses(this.list[i].id) }} />);
        }
        return temp;
    }
    handleChangeGlasses = (id) => {
        let index = this.list.findIndex(item => item.id === id);
        this.setState({
            glass: this.list[index]
        });
    }
    render() {
        const { glass } = this.state;
        return (

            <div>
                <div className="container-fluid header">
                    <div className="title">
                        <h1 className="text-center">TRY GLASSES APP ONLINE</h1>
                    </div>
                </div>
                <div>

                    <div className="container  " >

                        <div className="row ">

                            <div className="row">
                                <div className="col-6 content">
                                    <img src="./glassesImage/model.jpg" className="people" alt="" width={"70%"} />
                                    <img src="./glassesImage/v1.png" className="image" width={"100%"} alt="" />
                                </div>

                                <div className="col-6 content">
                                    <img src="./glassesImage/model.jpg" className="people" alt="" width={"70%"} />
                                    <img src={glass.url} className="image" width={"100%"} alt="" />
                                </div>
                            </div>


                            <div className="col-8 bg-success mt-5 hh" style ={{ backgroundImage: 'url(./glassesImage/background.jpg)' }}>
                                {this.renderbody()}
                            </div>


                        </div>
                    </div>
                    </div>
                </div>



                )
    }
}
