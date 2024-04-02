import { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import { useLocation } from 'react-router-dom';

export default function NavMenu({ activeKey, setActiveKey, navigate }) {
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case '/calculator':
        setActiveKey(2);
        break;
      case '/color':
        setActiveKey(3);
        break;
      case '/memo':
        setActiveKey(4);
        break;
      case '/test':
        setActiveKey(5);
        break;
      default:
        setActiveKey(1);
        break;
    }
  }, [location.pathname, setActiveKey]);

  return (
    <>
      <h1 className="text-3xl font-bold flex justify-center my-8">
        Convenient Tool Set
      </h1>
      <nav className="flex justify-center">
        <Container className='flex justify-center'>
          <Nav variant="pills" activeKey={activeKey} onSelect={(key) => setActiveKey(key)}>
            <Nav.Item>
              <Nav.Link eventKey={1} to='/' onClick={() => navigate('/')}>
                Welcome
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey={2} to='/' onClick={() => navigate('/calculator')}>
                Calculator
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey={3} to='/color' onClick={() => navigate('/color')}>
                Color Selector
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey={4} to='memo' onClick={() => navigate('/memo')}>
                Memo
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey={5} to='test' onClick={() => navigate('/test')}>
                Test
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Container>
      </nav>
    </>
  );
}
