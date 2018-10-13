import React from 'react'
import { Button, List, Card } from 'antd'

const bankList = (props) => {
  const { selectBank } = props

  const data = [
    {
      name: 'Banco Sabadell',
    },
    {
      name: 'La Caixa',
    },
    {
      name: 'Title 3',
    },
    {
      name: 'Title 4',
    },
    {
      name: 'Title 5',
    },
    {
      name: 'Title 6',
    },
  ];

  return (
    <List
      grid={{ gutter: 6, column: 6, xs: 2, sm: 2, md: 3, lg: 4, xl: 6, xxl: 6 }}
      dataSource={data}
      renderItem={item => (
        <List.Item style={{ marginBottom: 4 }}>
          <Card title={item.name}>
            <Button type="primary" onClick={() => selectBank(item)}>Select</Button>
          </Card>
        </List.Item>
      )}
    />
  )
}

export default bankList
