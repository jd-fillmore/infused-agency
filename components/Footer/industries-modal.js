import React, { useState } from "react"
import Link from "next/link"
import { Button, Modal, ModalBody, ModalFooter, Row, Col } from "reactstrap"
import { NIAGARA_INDUSTRIES } from "../../src/lib/niagaraIndustries"

const MID = Math.ceil(NIAGARA_INDUSTRIES.length / 2)

const IndustriesModal = () => {
  const [modal, setModal] = useState(false)

  const toggle = () => setModal(!modal)

  const columns = [NIAGARA_INDUSTRIES.slice(0, MID), NIAGARA_INDUSTRIES.slice(MID)]

  return (
    <div className="industries">
      <Button className="link" onClick={toggle}>
        View Industries
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalBody>
          <h5>Industries Served</h5>
          <Row>
            {columns.map((column, i) => (
              <Col lg="6" key={i}>
                <ul>
                  {column.map((item) => (
                    <li key={item.href}>
                      <Link href={item.href}>{item.displayName}</Link>
                    </li>
                  ))}
                </ul>
              </Col>
            ))}
          </Row>
          <p className="mt-3 mb-0">
            <Link href="/industries">Browse all industries</Link>
          </p>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  )
}

export default IndustriesModal
