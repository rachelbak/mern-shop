// import { useDispatch } from "react-redux";
// import { useLocation, useNavigate, useParams } from "react-router-dom";
// import { addToCart } from "../features/cartSlice";

// const Parrot = () => {
//     const dispatch = useDispatch();
//     const location = useLocation();
//     const navigate = useNavigate();
//     const parrot = location.state?.product;
//     if (!parrot) {
//         return <Typography variant="h5">המוצר לא נמצא</Typography>;
//     }
//     return (<>
//         <div className="parrot-card">
//             {parrot.image && <img src={parrot.image} alt={parrot.nameproduct} />}
//             <h2>{parrot.nameproduct}</h2>
//             <p><strong>תיאור:</strong> {parrot.description || "אין תיאור"}</p>
//             <p><strong>תאריך לידה:</strong> {new Date(parrot.bearthDate).toLocaleDateString()}</p>
//             <p><strong>מחיר:</strong> ₪{parrot.price}</p>
//             <p><strong>יכולת דיבור:</strong> {parrot.speeking === "speeking" ? "מדבר" : "לא מדבר"}</p>
//             <input type="button" value="הוסף לסל" onClick={() => {
//                 dispatch(addToCart(item))
//             }} />
//         </div>
//     </>)
// }
// export default Parrot;

// import { useDispatch, useSelector } from "react-redux";
// import { useLocation } from "react-router-dom";
// import { addToCart } from "../features/cartSlice";
// import { Card, CardContent, CardMedia, Typography, Box, Button } from "@mui/material";
// const Parrot = () => {
//     const dispatch = useDispatch();
//     const location = useLocation();
//     const parrot = location.state?.product;
//     const user = useSelector(state => state.user.currentUser);

//     if (!parrot) {
//         return <Typography variant="h5">המוצר לא נמצא</Typography>;
//     }

//     return (
//         <Card
//             sx={{
//                 display: 'flex',
//                 flexDirection: 'row-reverse', // תמונה בצד ימין
//                 alignItems: 'flex-start',
//                 maxWidth: 1000,
//                 height: '80vh',
//                 margin: 'auto',
//                 p: 3,
//                 boxShadow: 'none',
//                 border: 'none',
//             }}
//         >
//             <CardMedia
//                 component="img"
//                 sx={{
//                     width: 400,
//                     height: 400,
//                     objectFit: 'cover',
//                     borderRadius: 0.5,
//                     marginLeft: 3,
//                 }}
//                 image={parrot.image}
//                 alt={parrot.nameproduct}
//             />

//             <CardContent sx={{ flex: 1, textAlign: 'right' }}>
//                 <Typography variant="h4" gutterBottom><strong>{parrot.nameproduct}</strong> - {parrot.description || ""}</Typography>

//                 {/* <Typography variant="body1" gutterBottom><strong> {parrot.description ||""}</strong></Typography> */}
//                 <Typography variant="h5" sx={{ fontWeight: 'bold', mt: 1, color: 'black' }}>
//                     ₪{parrot.price}
//                 </Typography>
//                 <Typography variant="body1"><strong>תאריך לידה:</strong> {new Date(parrot.bearthDate).toLocaleDateString()}</Typography>


//                 {parrot.speeking === "speeking" && (
//                     <Box sx={{
//                         display: 'inline-block',
//                         backgroundColor: 'gold',
//                         padding: '5px 10px',
//                         borderRadius: '50%',
//                         fontWeight: 'bold',
//                         mt: 1
//                     }}>
//                         SPEEKING
//                     </Box>
//                 )}
//                 {user?.role != "ADMIN" &&
//                     <Box mt={3}>
//                         <Button
//                             onClick={() => dispatch(addToCart(parrot))}
//                             sx={{
//                                 backgroundColor: 'black',
//                                 color: 'white',
//                                 borderRadius: '50px',
//                                 px: 4,
//                                 py: 1,
//                                 fontWeight: 'bold',
//                                 '&:hover': {
//                                     backgroundColor: '#333',
//                                 },
//                             }}
//                         >
//                             הכנס לסל
//                         </Button>
//                     </Box>}
//             </CardContent>
//         </Card>
//     );
// };

// export default Parrot;
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import { addToCart } from "../features/cartSlice";
import { Card, CardContent, CardMedia, Typography, Box, Button, Fade } from "@mui/material";
import SmallShoppingCart from "../pages/SmallShoppingCart"; // ודא שהנתיב נכון

const Parrot = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const parrot = location.state?.product;
    const user = useSelector(state => state.user.currentUser);

    // סטייטים ותצוגת סל
    const [showCart, setShowCart] = useState(false);
    const [hoveringCart, setHoveringCart] = useState(false);
    const cartRef = useRef(null);

    const handleAddToCart = () => {
        dispatch(addToCart(parrot));
        setShowCart(true);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (cartRef.current && !cartRef.current.contains(event.target) && !hoveringCart) {
                setShowCart(false);
            }
        };

        const handleScroll = () => {
            if (!hoveringCart) {
                setShowCart(false);
            }
        };

        if (showCart) {
            document.addEventListener("mousedown", handleClickOutside);
            window.addEventListener("scroll", handleScroll);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            window.removeEventListener("scroll", handleScroll);
        };
    }, [showCart, hoveringCart]);

    if (!parrot) {
        return <Typography variant="h5">המוצר לא נמצא</Typography>;
    }

    return (
        <>
            {/* סל קניות מוקטן */}
            <Fade in={showCart}>
                <Box
                    ref={cartRef}
                    sx={{
                        position: "fixed",
                        top: "70px",
                        left: "10px",
                        backgroundColor: "white",
                        boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
                        padding: "10px",
                        borderRadius: "8px",
                        zIndex: 1000,
                        display: showCart ? "block" : "none"
                    }}
                    onMouseEnter={() => setHoveringCart(true)}
                    onMouseLeave={() => setHoveringCart(false)}
                >
                    <SmallShoppingCart />
                </Box>
            </Fade>

            {/* כרטיס תוכי */}
            <Card
                sx={{
                    display: 'flex',
                    flexDirection: 'row-reverse',
                    alignItems: 'flex-start',
                    maxWidth: 1000,
                    height: '80vh',
                    margin: 'auto',
                    p: 3,
                    boxShadow: 'none',
                    border: 'none',
                }}
            >
                <CardMedia
                    component="img"
                    sx={{
                        width: 400,
                        height: 400,
                        objectFit: 'cover',
                        borderRadius: 0.5,
                        marginLeft: 3,
                    }}
                    image={parrot.image}
                    alt={parrot.nameproduct}
                />

                <CardContent sx={{ flex: 1, textAlign: 'right' }}>
                    <Typography variant="h4" gutterBottom>
                        <strong>{parrot.nameproduct}</strong> - {parrot.description || ""}
                    </Typography>

                    <Typography variant="h5" sx={{ fontWeight: 'bold', mt: 1, color: 'black' }}>
                        ₪{parrot.price}
                    </Typography>

                    <Typography variant="body1">
                        <strong>תאריך לידה:</strong> {new Date(parrot.bearthDate).toLocaleDateString()}
                    </Typography>

                    {parrot.speeking === "speeking" && (
                        <Box sx={{
                            display: 'inline-block',
                            backgroundColor: 'gold',
                            padding: '5px 10px',
                            borderRadius: '50%',
                            fontWeight: 'bold',
                            mt: 1
                        }}>
                            SPEEKING
                        </Box>
                    )}

                    {user?.role !== "ADMIN" && (
                        <Box mt={3}>
                            <Button
                                onClick={handleAddToCart}
                                sx={{
                                    backgroundColor: 'black',
                                    color: 'white',
                                    borderRadius: '50px',
                                    px: 4,
                                    py: 1,
                                    fontWeight: 'bold',
                                    '&:hover': {
                                        backgroundColor: '#333',
                                    },
                                }}
                            >
                                הכנס לסל
                            </Button>
                        </Box>
                    )}
                </CardContent>
            </Card>
        </>
    );
};

export default Parrot;
