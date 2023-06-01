import { Col, Row } from "react-bootstrap";
import storeItems from "../data/items.json";
import { v4 as uuidv4 } from "uuid";
import { StoreItem } from "../components/StoreItem";

export function Store() {
    return (
        <>
            <h1> Store</h1>
            <Row xs={1} md={2} lg={3} className="g-3">
                {storeItems.map((item) => (
                    <Col key={uuidv4()}>
                        <StoreItem {...item} />
                    </Col>
                ))}
            </Row>
        </>
    );
}
