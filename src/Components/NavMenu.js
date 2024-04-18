import { useEffect } from 'react';
import { Container, Navbar } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import { useLocation } from 'react-router-dom';

export default function NavMenu({ activeKey, setActiveKey, navigate }) {
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case '/calculator':
        setActiveKey(1);
        break;
      case '/color':
        setActiveKey(2);
        break;
      case '/todolist':
        setActiveKey(3);
        break;
      case '/test':
        setActiveKey(4);
        break;
      default:
        setActiveKey("");
        break;
    }
  }, [location.pathname, setActiveKey]);

  return (
    <Navbar bg="dark" variant="dark" className='flex'>
      <Container className='flex'>
        <Nav variant="pills" activeKey={activeKey} onSelect={(key) => setActiveKey(key)}>
          <Navbar.Brand href='/' className='flex justify-center'>
            Convenient Tool Set
          </Navbar.Brand>
          <Nav.Item>
            <Nav.Link eventKey={1} to='/calculator' onClick={() => navigate('/calculator')}>
              Calculator
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey={2} to='/color' onClick={() => navigate('/color')}>
              Color Selector
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey={3} to='todolist' onClick={() => navigate('/todolist')}>
              Todolist
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey={4} to='test' onClick={() => navigate('/test')}>
              Test
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  );
}
