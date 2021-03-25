import React from "react";
import { Container, Contents, RowGrid } from "../Styles/Grid";
import KOO from "../../assets/image/KOO.png";
import LEE from "../../assets/image/LEE.png";
import OH from "../../assets/image/OH.png";
import PARK from "../../assets/image/PARK.png";

const members = [
  { name: "Koo Minhyung", profile: KOO },
  { name: "Lee Jaehee", profile: LEE },
  { name: "Oh Seunghyuk", profile: OH },
  { name: "Park Soojin", profile: PARK },
];

function AboutUs() {
  return (
    <React.Fragment>
      <Container className="AboutUs" color="#F3F1F0">
        <Contents className="Contents">
          <RowGrid size={1}>
            <h1> 모두가 벗처럼 일할 수 있는 위벗을 추구합니다.</h1>
          </RowGrid>
          <RowGrid size={2}></RowGrid>
        </Contents>
      </Container>
    </React.Fragment>
  );
}

export default AboutUs;
