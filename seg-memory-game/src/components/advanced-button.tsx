import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function TypesExample() {
  return (
    <Link to="/advanced">
      <Button variant="success">
        Advanced
      </Button>
    </Link>
  );
}

export default TypesExample;