import React from "react";
import { Helmet } from "react-helmet";
import { companyDetails } from "../constant";
const HelmetReact = ({ title }) => {
  return (
    <Helmet>
      <title>
        {title} || {companyDetails.name}
      </title>
      <meta name="description" content={companyDetails.name} />
    </Helmet>
  );
};

export default HelmetReact;
