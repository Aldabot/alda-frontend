import React from 'react'
import { Button, List, Card } from 'antd'

const providerList = (props) => {
  const { selectProvider } = props

  const data = [
    {
      name: 'Banco Sabadell',
      code: 'sabadell_es',
    },
    {
      name: 'La Caixa',
      code: 'la_caixa_es',
    },
  ];

  return (
    <List
      grid={{ gutter: 6, column: 6, xs: 2, sm: 2, md: 3, lg: 4, xl: 6, xxl: 6 }}
      dataSource={data}
      renderItem={item => (
        <List.Item style={{ marginBottom: 4 }}>
          <Card title={item.name}>
            <Button type="primary" onClick={() => selectProvider(item)}>Select</Button>
          </Card>
        </List.Item>
      )}
    />
  )
}

export default providerList
