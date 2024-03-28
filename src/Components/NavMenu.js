import { useEffect } from 'react';
import Nav from 'react-bootstrap/Nav';
import { useLocation } from 'react-router-dom';

export default function NavMenu({ activeKey, setActiveKey, navigate }) {
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case '/color':
        setActiveKey(2);
        break;
      case '/memo':
        setActiveKey(3);
        break;
      default:
        setActiveKey(1);
        break;
    }
  }, [location.pathname, setActiveKey]);

  return (
    <nav className="flex justify-center">
      <Nav variant="pills" activeKey={activeKey} onSelect={(key) => setActiveKey(key)}>
        <Nav.Item>
          <Nav.Link eventKey={1} to='/' onClick={() => navigate('/')}>
            Calculator
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey={2} to='/color' onClick={() => navigate('/color')}>
            Color Selector
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey={3} to='memo' onClick={() => navigate('/memo')}>
            Memo
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </nav>
  );
}
