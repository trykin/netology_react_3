import { Tab, Tabs } from "react-bootstrap";
import { OfferList } from "./OfferList";
import { BsFillStarFill } from "react-icons/bs";

function App() {
  const counts: number[] = [-1, 2, 5, 7, 4, 2, 5, 6, 3];
  return (
    <Tabs
      defaultActiveKey="Star"
      id="uncontrolled-tab-example"
      className="mx-3 my-3"
    >
      <Tab eventKey="Star" title="Star" key="Star">
        {counts.map((e, index) => (
          <StarView count={e} index={index} />
        ))}
      </Tab>
      <Tab eventKey="OfferList" title="OfferList">
        <OfferList />
      </Tab>
    </Tabs>
  );
}

function StarView(props: { count: number; index: number }) {
  const { count, index } = props;
  return (
    <div key={index} className="d-flex">
      {count > 1 && count <= 5 ? <Star count={count} index={index}/> : null}
    </div>
  );
}

function Star(props: { count: number, index: number }) {
  const { count, index } = props;
  const stars = [];
  for (let i = 0; i < count; i++) stars.push(<BsFillStarFill key={`${index}-${i}`}/>);
  return stars;
}

export default App;
