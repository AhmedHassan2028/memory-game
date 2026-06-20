import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function TypesExample() {
  return (
    <Link to="/intermediate">
      <Button variant="success">
        Intermediate
      </Button>
    </Link>
  );
}

export default TypesExample;