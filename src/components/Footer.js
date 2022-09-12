import React from 'react'

import { Container, Row, Col } from 'react-bootstrap'

function Footer() {
  return (

    <footer bg="transparent">
        <Container>
            <Row>

                <Col className="text-center py-3">
                    Copyright &copy; Jacob Van Cleave
                </Col>
                
            </Row>
        </Container>
    </footer>

  )
}

export default Footer