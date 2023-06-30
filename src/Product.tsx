import { Card } from "react-bootstrap";
import Image from "react-bootstrap/Image";

export function Product({
  title,
  url,
  id,
  price,
}: {
  title: string;
  url: string;
  id: number;
  price: string;
}) {
  return (
    <Card key={`card-${id}`} style={{ width: "25rem" }}>
      <Card.Title>{title}</Card.Title>
      <Card.Body>
        <Image key={`img-${id}`} src={url} style={{ width: "100px" }} />
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
          <div>{price}</div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
