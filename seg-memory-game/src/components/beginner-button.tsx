import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';



function TypesExample() {
  return (
    <Link to="/beginner">
      <Button variant="success">
        Beginner
      </Button>
    </Link>

  );
}

export default TypesExample;