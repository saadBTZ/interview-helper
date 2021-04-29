import React from "react";
import { Grid } from "@material-ui/core";

export const DefaultContainer: React.FC = ({ children }) => {
    return (
        <Grid container spacing={2} justify="center">
            <>{children}</>
        </Grid>
    );
};
