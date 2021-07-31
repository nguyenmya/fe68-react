import React, { Component } from 'react'
import wheels from './Data/wheels.json'
import arrayFeatures from './Data/arrayFeatures.json'
import './style.css'
import DetailCar from './DetailCar';

export default class CarComponent extends Component {
    state = {
        car : {     
            id : 1, 
            srcImg : 'images-black/images-black-1/',      
            color : "Black",
            price: "19,550",
            engineType: "In-Line 4-Cylinder",
            displacement: "1996 cc",
            horsepower: "158 @ 6500 rpm",
            torque: "138 lb-ft @ 4200 rpm",
            redline: "6700 rpm",
        }      
    };

    handleChangeColor = (icon) => {
        this.setState({
            car : icon
        }, console.log(this.state.srcImg))
    };

    handleChangeWheel = (idWheel) => {
        arrayFeatures.filter(p => p.id === this.state.car.id).map((item, index) => {
            item.wheels.map((wheel, index) => {
                if (wheel.idWheel === idWheel) {
                    this.setState({
                        car : {...this.state.car, srcImg : wheel.srcImg}
                    })
                }
            })
        })
    }
    renderWheel = () => {
        return wheels.map((wheel, index) => {
            return (
                <li key={index}
                    className="list-group-item"
                    onClick={() => this.handleChangeWheel(wheel.idWheel)}
                >
                    <div className="row">
                        <div className="col-2">
                            <img src={wheel.img} width="60px" />
                        </div>
                        <div className="col-10 d-flex align-items-center">
                            {wheel.title}
                        </div>
                    </div>
                </li>
            )
        })
    }
    renderIcon = () => {
        return arrayFeatures.map((icon, index) => {
            return (
                <li
                    key={index}
                    className="list-group-item"
                    onClick={() => this.handleChangeColor(icon)}
                >
                    <div className="row">
                        <div className="col-2">
                            <img src={icon.img} width="60px" />
                        </div>
                        <div className="col-10 d-flex align-items-center">
                            {icon.title}
                        </div>
                    </div>
                </li>
            )
        })
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-7">
                        <img src={`./images/${this.state.car.srcImg}civic-1.jpg`} width="100%" height="700px" alt="" />
                    </div>
                    <div className="col-5">
                        <div className="card">
                            <div className="card-header">Exterior Color</div>
                            <ul className="list-group list-group-flush">
                                {this.renderIcon()}
                            </ul>
                        </div>
                        <div className="card">
                            <div className="card-header">Wheels</div>
                            <ul className="list-group list-group-flush">
                                {this.renderWheel()}
                            </ul>
                        </div>
                    </div>
                    <div className="col-7">
                        <div className="card">
                            <div className="card-header">Exterior Color</div>
                            <h2>See More LX Futures </h2>
                          
                            <DetailCar car={this.state.car}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
