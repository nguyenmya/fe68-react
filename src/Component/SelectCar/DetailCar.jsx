import React, { Component } from 'react'

export default class DetailCar extends Component {
    render() {
        const { car } = this.props
        return (
            <div style={{ width: '100%' }}>
                <table style={{ width: '100%' }}>
                    <tbody>
                        <tr >
                            <td>Color</td>
                            <td>{car.color}</td>
                        </tr>
                        <tr>
                            <td>Price</td>
                            <td>{car.price}</td>
                        </tr>
                        <tr>
                            <td>Engine Type</td>
                            <td>{car.engineType}</td>
                        </tr>
                        <tr>
                            <td>Displacement</td>
                            <td>{car.displacement}</td>
                        </tr>
                        <tr>
                            <td>Horsepower(SAE net)</td>
                            <td>{car.horsepower}</td>
                        </tr>
                        <tr>
                            <td>Torque (SAE net )</td>
                            <td>{car.torque}</td>
                        </tr>
                        <tr>
                            <td>Redline</td>
                            <td>{car.redline}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}
