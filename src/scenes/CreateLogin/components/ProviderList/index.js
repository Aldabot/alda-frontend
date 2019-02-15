import React, { Fragment } from 'react'
import { Button, Row, Col, Card } from 'antd'
import bancoSabadell from './images/banco-sabadell.png'
import laCaixa from './images/la-caixa.png'

const providerList = (props) => {
  const { selectProvider } = props

  const banks = [
    {
      name: 'Banco Sabadell',
      code: 'sabadell_es',
      img: bancoSabadell,
    },
    {
      name: 'La Caixa',
      code: 'la_caixa_es',
      img: laCaixa,
    },
  ];

  return (
    <Fragment>
      <h2>Vincula tu cuenta</h2>
      <Row gutter={8} type="flex">
        {banks.map(bank => (
          <Col span={12}>
            <Card
              hoverable
              onClick={() => selectProvider(bank)}
              bordered={false}
              style={{ boxShadow: 'rgba(0, 0, 0, 0.15) 1px 1px 10px', height: '100%' }}
            >
              <img alt={bank.name} src={bank.img} style={{width: '100%'}} />
            </Card>
          </Col>
        ))}
      </Row>
    </Fragment>
  )
}

export default providerList
