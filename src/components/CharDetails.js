import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getCharactersDetails } from "../redux/actions/CharacterActions";
import { Card } from "antd";
const { Meta } = Card;

const CharDetails = () => {
  const { characterId } = useParams();
  const CharDetails = useSelector((state) => state.char.charDetails);
  console.log(CharDetails);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCharactersDetails(characterId));
  }, []);
  return (
    <div>
      <h1 className="titles"> Specific Character Details</h1>
      <br />
      <br />
      <br />
      <Card
        hoverable
        style={{
          width: 240,
          marginLeft: "20px",
        }}
        cover={<img alt="example" src={CharDetails.image} />}
      >
        <Meta title={CharDetails.name} description={CharDetails.status} />
      </Card>
    </div>
  );
};

export default CharDetails;
