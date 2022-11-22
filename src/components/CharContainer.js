import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCharacters } from "../redux/actions/CharacterActions";
import { Card } from "antd";
import Link from "antd/lib/typography/Link";
import { useNavigate } from "react-router";
const { Meta } = Card;

const CharContainer = () => {
    const navigate = useNavigate()
  const charData = useSelector((state) => state.char.charData);
  console.log(charData);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCharacters());
  }, []);
  const statusClass = (character) => {
    if (character === "Alive") {
      console.log("if", character);
      return "alive";
    } else if (character === "Dead") {
      return "dead";
    } else if (character === "unknown") {
      return "unknown";
    }
  };
  return (
    <div>
      <h1 className="title"> Characters </h1>
      <div className="container">
        {charData &&
          charData.map((char) => (
            <Fragment key={char.id}>
              <Card
                hoverable
                style={{
                  width: 300,
                  padding: 10,
                  margin: "10px",
                }}
                cover={<img alt="Character" src={char.image} />}
                onClick={() => navigate(`${char.id}`)}
              >
                <Meta
                  title={char.name}
                  description={char.status}
                  className={statusClass(char.status)}
                />
              </Card>
            </Fragment>
          ))}
      </div>
    </div>
  );
};

export default CharContainer;
