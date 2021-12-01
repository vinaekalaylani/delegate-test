import React from 'react'
import Sidebar from '../components/sidebar'
import { useState } from 'react'
import { Button } from 'react-bootstrap'
import Image from 'next/image'
import Router from 'next/router'
import Modal from 'react-bootstrap/Modal'

export default function Home({ dataUser, page }) {
  const [ inputSearch, setInputSearch ] = useState("")
  const { data } = dataUser
  const [ users, setUsers ] = useState(data)
  const [ show, setShow ] = useState(false)
  const [ userId, setUserId ] = useState({
    "first_name": "",
    "last_name": "",
    "avatar": ""
  })

  const date = `${new Date().toLocaleDateString('id-ID')} ${new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })}`

  const handleInput = (event) => {
    setInputSearch(event.target.value)
    let search = event.target.value
    let result = users.filter((el) => el.first_name.toLowerCase().includes(search.toLowerCase()))
    search ? setUsers(result) : setUsers(data)
  }

  const handleShow = (data) => {
    setShow(true)
    setUserId(data)
  }

  const handleClose = () => {
    setShow(false)
  }

  let myPagin = []
  for (let i = 1; i <= dataUser.total_pages; i++) {
    myPagin.push(
      <h6 className="d-flex align-items-center justify-content-center rounded-circle m-0 mx-1"
        style={{ 
          color: page === i ? "#FFFFFF" : "#666666", backgroundColor: page === i && "#7DB7B4",
          fontSize: "11px", height: "21px", width: "21px"
        }}>{i}
      </h6>
    )
  }

  return (
    <div className="frame container" style={{marginTop: "100px"}}>
      <Sidebar/>
      <div className="col-md-9 col-12 body">
        <div className="body-content">
          <div className="col-1">
            <Image src="/Vector.png" height="60" width="60" alt="vector"/>
          </div>
          <div className="title">
            <p className="m-0">PERFORMANCE</p>
            <h3>Interested Users</h3>
          </div>
        </div>
        <div className="mt-5 d-flex justify-content-end">
          <div className="search">
            <Image src="/search.png" width="13" height="13"/>
            <input className="form-control p-0 bg-transparent border-0 shadow-none mx-2" type="text" placeholder="Search by email or name" value={inputSearch} onChange={handleInput}/>
          </div>
        </div>
        <div className="tab">
          <h5>INTERESTED USERS</h5>
          <div className="tab-head">
            <div className="col-md-2 col-2"><h6>ID</h6></div>
            <div className="col-md-4 col-4 ml-md-0 ml-2"><h6>EMAIL</h6></div>
            <div className="col-md-3 col-3 ml-md-0 ml-3"><h6>NAME</h6></div>
            <div className="col-md-3 col-3 ml-md-0 ml-3"><h6>DATE</h6></div>
          </div>
          {
            users.sort((a, b) => (a.id > b.id ? -1 : 1)).map((user) => {
              user.date = date
              return (
                <div className="tab-body" key={user.id} onClick={() => handleShow(user)}>
                  <p className="col-md-2 col-2">{user.id}</p>
                  <p className="col-md-4 col-7 ml-md-0 ml-2">{user.email}</p>
                  <p className="col-md-3 col-3 ml-md-0 ml-3">{user.first_name} {user.last_name}</p>
                  <p className="col-md-3 col-3 ml-md-0 ml-3">{user.date}</p>
                </div>
              )
            })
          }
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Detail User</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="d-flex justify-content-center flex-column align-items-center">
                  <div>
                    <Image className="rounded-circle" src={userId.avatar} width="200" height="200"/>
                  </div>
                  <h3>{userId.first_name} {userId.last_name}</h3>
                </div>
            </Modal.Body>
          </Modal>
        </div>
        <div className="d-flex align-items-center justify-content-center pagin">
          <Button className="d-flex align-items-center bg-transparent border-0 shadow-none"
              onClick={() => Router.push(`/?page=${page - 1}`)}
              disabled={page === 1}
            >
            <Image src="/left.png" width="15" height="15"/>
          </Button>
          {
            myPagin.map((pagin, idx) => {
              return (<div key={idx} >{pagin}</div>)
            })
          }
          <Button className="d-flex align-items-center bg-transparent border-0 shadow-none"
            onClick={() => Router.push(`/?page=${page + 1}`)}
            disabled={page === dataUser.total_pages}
          >
            <Image src="/right.png" width="15" height="15"/>
          </Button>
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps({ query: { page = 1 }}) {
	const res = await fetch(`https://reqres.in/api/users?page=${page}`)
	const dataUser = await res.json()
	return {
		props: {
			dataUser,
      page: Number(page)
		}
	}
}
