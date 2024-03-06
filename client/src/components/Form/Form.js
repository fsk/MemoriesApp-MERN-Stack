import React from "react";
import {StyledForm, StyledPaper} from "./style";

const Form = () => {
    return(
        <StyledPaper>
            <StyledForm autoComplete={"off"} noValidate={true}>

            </StyledForm>
        </StyledPaper>
    );
}

export default Form;