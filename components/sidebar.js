import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import BtnSidebar from './btnSidebar'
import Accordion from 'react-bootstrap/Accordion'
import { useAccordionButton } from 'react-bootstrap/AccordionButton'

export default function sidebar() {
  
  function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey)
  
    return (
      <div className="btn_sidebar" onClick={decoratedOnClick} style={{background: "rgba(125, 183, 180, 0.15)"}}>
        {children}
      </div>
    )
  }

  return (
    <div className="col-md-3 sidebar d-none d-lg-block">
      <div className="sidebar-logo">
        <div className="logo-frame">
          <div className="logo-lg d-flex justify-content-center align-items-center rounded-circle">
            <h3 className="logo-ko mt-1">KO</h3>
          </div>
          <div className="logo-md d-flex justify-content-center align-items-center rounded-circle">
            <div className="logo-sm rounded-circle d-flex justify-content-center align-items-center">
              <Image src="/bel.png" height="16" width="14" alt="bel"/>
            </div>
            <div className="logo-red rounded-circle"></div>
          </div>
        </div>
      </div>
      <div className="sidebar-content">
        <h6>KINKY OSTENDORF</h6>
        <p>kinkysfruitlab@outlook.com</p>
      </div>
      <BtnSidebar icon={"/Frame.png"} title={"OVERVIEW"}/>
      <BtnSidebar icon={"/business.png"} title={"BUSINESS"}/>
      <BtnSidebar icon={"/inbox.png"} title={"INBOX"}/>
      <BtnSidebar icon={"/collaborators.png"} title={"COLLABORATORS"}/>
      <Accordion defaultActiveKey="0">
          <CustomToggle eventKey="0">
            <div className="d-flex align-items-center row" style={{marginLeft: "1px"}}>
              <div className="col-4 p-0 bg-white d-flex align-items-center justify-content-center p-0 mx-1" style={{ borderRadius: "10px", height: "39px", width: "55px"}}>
                <Image src="/performance.png" height="25" width="30" alt="logo"/>
              </div>
              <div className="col-7" style={{marginLeft: "9px"}}>
                <p className="m-0">PERFORMANCE</p>
              </div>
            </div>
          </CustomToggle>
          <Accordion.Collapse eventKey="0">
            <div className="row">
              <div className="col-8" style={{marginLeft: "107px"}}>
                <ul className="p-0 m-0" style={{listStyleType: "none"}}>
                  <Link href="/">
                    <li className="sub-link mt-3">SUMMARY</li>
                  </Link>
                  <Link href="/">
                    <li className="sub-link mt-3">CREDIT</li>
                  </Link>
                  <Link href="/">
                    <li className="sub-link mt-3" style={{color: "#7DB7B4"}}>INTERESTED USERS</li>
                  </Link>
                </ul>
              </div>
            </div>
          </Accordion.Collapse>
      </Accordion>
      <BtnSidebar icon={"/billing.png"} title={"BILLING"}/>
      <BtnSidebar icon={"/support.png"} title={"SUPPORT"}/>
    </div>
  )
}
