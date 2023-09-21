/* eslint-disable jsx-a11y/img-redundant-alt */
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import styled from "styled-components";

function getRandomLightColorHex() {
  // Generate random values for red, green, and blue components
  const red = Math.floor(Math.random() * 128) + 128; // 128 to 255 (lighter shades)
  const green = Math.floor(Math.random() * 128) + 128;
  const blue = Math.floor(Math.random() * 128) + 128;

  // Convert RGB values to a hex color code
  const hex = `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;

  return hex;
}

export default function Cards({ name, desp, link, image, width, sxStyle }) {
  const randomLightColor = React.useMemo(() => getRandomLightColorHex(), []);

  return (
    <Card sx={{ display: "flex", margin: "1rem", ...sxStyle }}>
      <CardActions>
        <Button onClick={() => window.open(link, "_blank")}>
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {image && (
              <Img>
                <img
                  src={image}
                  alt="image-text"
                  style={{
                    width: "100%",
                    height: "8rem",
                  }}
                />
              </Img>
            )}
            <Name color={randomLightColor}>{name}</Name>
            {desp && <Desp>{desp}</Desp>}
          </CardContent>
        </Button>
      </CardActions>
    </Card>
  );
}

const Img = styled.div``;

const Name = styled.div`
  font-weight: 600;
  font-size: 1rem;
  font-family: monospace;
  text-align: left;
  width: 100%;
  padding: 0.8rem;
  color: black;
  border: 0.2rem solid ${(props) => props.color};
  border-radius: 2rem;
  background: ${(props) => props.color};
`;
const Desp = styled.div`
  font-size: 0.8rem;
  font-family: monospace;
  text-align: left;
  width: 100%;
  padding: 1rem 0 0 0;
  color: black;
`;
