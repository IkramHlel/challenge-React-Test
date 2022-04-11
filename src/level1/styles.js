import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
    home:{
    display: "flex",
    height: 700,
    },
    gauche:{
        flex: 1,
        margin: 30,
        width:"400px",
        height:'500px',
        alignSelf:"center"
    },
    droite:{
        flex: 1,
    },
    pageTitle:{
        fontWeight: 'bold',
        fontSize:'70px'
    },
    fieldContainer:{
        display: 'flex', 
        flexDirection:'row', 
        justifyContent:"center", 
        alignItems:"center"
    },
    cardsContainer:{
        margin: 30,
    },
    btnContainer: {
        margin: 10,
        height: 46,
        width: "40%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
}));