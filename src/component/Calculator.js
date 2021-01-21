import React from "react";
import penghitung from "../util/Penghitung";
import Base from "./Base";
import CalculatorButton from "./CalculatorButton";
import {Card, Container, Row, Col} from "react-bootstrap";
import History from "./History";

export default class Calculator extends React.Component {
    state = {
        total: null,
        next: null,
        operation: null,
        riwayat: []
    };

    handleClick = buttonName => {
        this.setState(penghitung(this.state, buttonName));
    };

    render() {
        return (
            <Container className='mt-5'>
                <Row>
                    <Col lg={true} className='mb-5'>
                        <Base value={this.state.next || this.state.total || "0"}/>
                        <CalculatorButton clickHandler={this.handleClick}/>
                    </Col>
                    <Col lg={true}>
                        <h5 className='mb-3'>Riwayat Perhitungan</h5>
                        <History obj={this.state.riwayat}/>
                    </Col>
                </Row>
            </Container>

        );
    }
}
