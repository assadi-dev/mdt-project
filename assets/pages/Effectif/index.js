import React from "react";
import styled from "styled-components";
import HeaderPresentation from "../../components/HeaderPresentation";
import CardEffectif from "../../components/CardEffectif";
import effectif from "../../services/effectifs";

const RowCard = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const Effectif = () => {
  return (
    <div>
      <HeaderPresentation title="Effectif" />
      <RowCard>
        {effectif.map((e) => (
          <CardEffectif />
        ))}
      </RowCard>
    </div>
  );
};

export default Effectif;
