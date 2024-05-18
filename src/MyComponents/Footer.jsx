function Footer(){
    let year = new Date().getFullYear();
    const footerStyle = {
        width:'100%',
        backgroundColor:'black',
        color:'white',
        textAlign:'center',
        fontWeight:'bold',
        padding:'0.5em 0',
    }
    return(
        <>
        <h5 style={footerStyle}>CopyRights &copy; | All Rights Reserved | {year}</h5>
        </>
    )
}
export default Footer;