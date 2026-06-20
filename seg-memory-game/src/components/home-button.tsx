import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function TypesExample() {
  return (
    <Link to="/">
      <Button variant="success">
        Home
      </Button>
    </Link>
  );
}

export default TypesExample;