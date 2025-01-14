import React from "react";
import styled from "styled-components";
import { companyDetails } from "../constant";

const WhatDrivesUs = () => {
  const values = [
    {
      title: "Innovation",
      description:
        "We’re always exploring new technologies and trends to ensure we provide our clients with the best solutions available.",
    },
    {
      title: "Integrity",
      description:
        "Transparency and honesty are at the core of everything we do. Our clients can trust that we’re always acting in their best interest.",
    },
    {
      title: "Collaboration",
      description:
        "We believe in the power of teamwork. Our success is built on working closely with clients and across our internal teams to deliver optimal results.",
    },
    {
      title: "Excellence",
      description:
        "We’re dedicated to providing high-quality solutions that exceed expectations, every time.",
    },
    {
      title: "Customer Focus",
      description:
        "Our clients are our priority. We take the time to understand their unique needs, ensuring that we create solutions that support their long-term goals.",
    },
  ];

  return (
    <WhatDrivesUsContainer>
      <h2>What Drives Us</h2>
      <p>
        At {companyDetails.name}, our work is shaped by values that guide us
        both as a team and as a company. These values ensure that we always
        deliver the best results for our clients and maintain a positive,
        forward-thinking environment:
      </p>
      <ValuesList>
        {values.map((value, index) => (
          <ValueItem key={index}>
            <h3>{value.title}</h3>
            <p>{value.description}</p>
          </ValueItem>
        ))}
      </ValuesList>
    </WhatDrivesUsContainer>
  );
};

// Styled Components
const WhatDrivesUsContainer = styled.div`
  padding: 40px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  max-width: 80rem;
  margin: 0 auto;
  text-align: center;
  margin-top: 120px;
`;

const ValuesList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
  padding: 0 20px;
`;

const ValueItem = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  h3 {
    font-size: 1.6rem;
    font-weight: 500;
    color: #333;
    margin-bottom: 15px;
  }

  p {
    font-size: 1rem;
    color: #777;
    line-height: 1.5;
  }
`;

// Responsive styles using media queries
const GlobalStyles = styled.div`
  @media (max-width: 768px) {
    h2 {
      font-size: 2rem;
    }

    p {
      font-size: 1rem;
    }

    h3 {
      font-size: 1.4rem;
    }

    p {
      font-size: 0.95rem;
    }
  }
`;

export default WhatDrivesUs;
