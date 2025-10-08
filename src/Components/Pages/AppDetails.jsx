import React from "react";
import AppCards from "../Cards/AppCards";
import { useLoaderData, useParams } from "react-router";

const AppDetails = () => {
  const apps = useLoaderData();
  const { id: appId } = useParams();
  const app = apps.find((app) => app.id === parseInt(appId));
  return (
    <>
      <h1>{app.title}</h1>
    </>
  );
};

export default AppDetails;