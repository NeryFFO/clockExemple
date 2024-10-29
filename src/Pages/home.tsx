import { Button, ThemeProvider } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { themeMaterial } from "../Theme/themeMaterial";

export function Home(){
    const navigate = useNavigate();
    return(
        <>
            <p>EU SOU A TELA DE HOME</p>
            <ThemeProvider theme={themeMaterial}>
                <Button variant="contained" color="secondary" onClick={()=>navigate("/")}>
                    Ir para tela de login
                </Button>
            </ThemeProvider>
        </>
    );
}