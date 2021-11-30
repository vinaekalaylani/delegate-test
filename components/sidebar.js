import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Accordion from 'react-bootstrap/Accordion'
import { useAccordionButton } from 'react-bootstrap/AccordionButton'; 

export default function sidebar() {
  
  function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey)
  
    return (
      <div className="btn_sidebar" onClick={decoratedOnClick} style={{background: "rgba(125, 183, 180, 0.15)"}}>
        {children}
      </div>
    );
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
      <Link href="/">
        <div className="btn_sidebar">
          <div>
            <Image src="/Frame.png" height="23" width="30" alt="logo"/>
          </div>
          <p className="m-0 mx-4">OVERVIEW</p>
        </div>
      </Link>
      <Link href="/">
        <div className="btn_sidebar">
          <div>
            <Image src="/business.png" height="25" width="30" alt="logo"/>
          </div>
          <p className="m-0 mx-4">BUSINESS</p>
        </div>
      </Link>
      <Link href="/">
        <div className="btn_sidebar">
          <div>
            <Image src="/inbox.png" height="25" width="30" alt="logo"/>
          </div>
          <p className="m-0 mx-4">INBOX</p>
        </div>
      </Link>
      <Link href="/">
        <div className="btn_sidebar">
          <div>
            <Image src="/collaborators.png" height="25" width="30" alt="logo"/>
          </div>
          <p className="m-0 mx-4">COLLABORATORS</p>
        </div>
      </Link>
      <Accordion defaultActiveKey="0">
          <CustomToggle eventKey="0">
            <div className="d-flex align-items-center row">
              <div className="col-3 p-0 mx-2">
                <Image src="/performance.png" height="25" width="30" alt="logo"/>
              </div>
              <div className="col-7 mx-1">
                <p className="m-0">PERFORMANCE</p>
              </div>
            </div>
          </CustomToggle>
          <Accordion.Collapse eventKey="0">
            <div className="row">
              <div className="col-8" style={{marginLeft: "100px"}}>
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
      <Link href="/">
        <div className="btn_sidebar">
          <div>
            <Image src="/billing.png" height="25" width="30" alt="logo"/>
          </div>
          <p className="m-0 mx-4">BILLING</p>
        </div>
      </Link>
      <Link href="/">
        <div className="btn_sidebar">
          <div>
            <Image src="/support.png" height="25" width="30" alt="logo"/>
          </div>
          <p className="m-0 mx-4">SUPPORT</p>
        </div>
      </Link>
    </div>
  )
}
