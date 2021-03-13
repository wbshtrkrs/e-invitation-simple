import React from 'react'
import {Row, Col, Divider} from 'antd'
import 'antd/dist/antd.css';
import basicStyle from '../../settings/basicStyle'

const style = { background: '#0092ff', padding: '8px 0' };

const Landing = () => {
    let { rowStyle, colStyle, gutter } = basicStyle
    return (
        <Row style={rowStyle}>
            <Col style={colStyle} xs={6} sm={10} md={14} lg={16} xl={24} xxl={24}>
                <div style={style}>asd</div>
            </Col>
        </Row>
    )
}

export default Landing
