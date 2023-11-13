import React from 'react'
import {Nav, Navbar, Image} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {useAuth} from '../contexts/AuthContext'

export default function Navigation() {
  const {currentUser} = useAuth()

  return (
    <Navbar bg='dark' variant='dark' expand='md' className="p-3">
        <Navbar.Brand href='/'>ToDo</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className='justify-content-end'>
            <Nav>
              {currentUser && 
                <>
                  <Link to='/todos' className='nav-link'>ToDos</Link>
                  <Link to='/categories' className='nav-link'>Categories</Link>
                </>
              }
              {!currentUser &&
                <Link to='/login' className='nav-link'>Login</Link>
              }
            </Nav>
        </Navbar.Collapse>
    </Navbar>
  )
}
